import Matter from 'matter-js';

export const visualBall = () => {
    let ww = 1920, hh = window.innerHeight;
    let particles = [];
    let points = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
    let colors = ['#ED6075', '#C75B8E', '#965C97', '#645B8E', '#3E5476', '#2F4858']
    const visual = document.querySelector('.visual_in');
    const Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Bodies = Matter.Bodies,
                Common = Matter.Common,
                Composite = Matter.Composite,
                Constraint = Matter.Constraint,
                Event = Matter.Events;
    
    const engine = Engine.create(),
                runner = Runner.create(),
                world = engine.world;
    
    const render = Render.create({
        element: visual,
        engine: engine,
        pixelRatio: window.devicePixelRatio,
        options: {
            width: 1920,
            height: hh,
            wireframes: false,
            // background: 'radial-gradient(#464646, #272727, #000)'
            background: 'transparent'
        }
    });
    
    Render.run(render);
    Runner.run(runner, engine);
    
    engine.gravity.y = 0.95;
    Composite.clear(world);

    let triA = new Polygon(ww*0.7, hh*0.38, 3, 170, 10),
    penta = new Polygon(ww*0.14, hh*0.2, 5, 40);
    let circleA = new Circle(ww*0.5, hh*0.5, 110),
    circleB = new Circle(ww*0.85, hh*0.2, 40);
    let crossA = new Cross(ww*0.3, hh*0.35, 180, 30),
    crossB = new Cross(ww*0.7, hh*0.7, 50, 20);
    let barA = new Rectangle(ww*0.84, hh*0.8, 220, 220/4, 5, 10, 20000),
    barB = new Rectangle(ww*0.2, hh*0.8, 220, 220/4, -7, 10, 20000),
    barC = new Rectangle(ww*0.6, hh*0.8, 150, 20, 0, 5, 1000);

    document.querySelectorAll('.visualBall').forEach(x => x.setAttribute('r', circleA.body.circleRadius))
    
    triA.body.id = 'triangle';
    circleA.body.id = 'circleA';
    crossA.body.id = 'crossA';
    Matter.Body.rotate(crossA.body, Math.PI / 8);
    Matter.Body.rotate(barA.body, Math.PI / -4);
    Matter.Body.rotate(barB.body, Math.PI / 7);
    Matter.Body.rotate(crossB.body, Math.PI / 2.5);

    particles.length = 0;
    updateParticle(10, 20);
    Composite.add(world, particles);

    Event.on(engine, 'collisionStart', (e) => {
        const pairs = e.pairs;
        var bodyA = pairs[0].bodyA,
            bodyB = pairs[0].bodyB;
        if(bodyA.label == 'static'){
            bodyA.render.fillStyle = bodyB.render.fillStyle
        }
        if(bodyB.label == 'static'){
            bodyB.render.fillStyle = bodyA.render.fillStyle
        }
        if(bodyA.label == 'cross'){
            bodyA.parent.parts.forEach(x => {
                x.render.fillStyle = bodyB.render.fillStyle;
            })
        }
    });

    Event.on(engine, 'afterUpdate', (e) => {
        let arr = e.source.detector.bodies,
        clipTri = arr.filter(arr => arr.id == 'triangle'),
        clipR = arr.filter(arr => arr.id == 'circleA'),
        clipC = arr.filter(arr => arr.id == 'crossA');

        document.querySelectorAll('.visualBall').forEach(x => {
            x.setAttribute('cx', clipR[0].position.x);
            x.setAttribute('cy', clipR[0].position.y);
            x.setAttribute('fill', clipR[0].render.fillStyle);
        })

        let newPoints = points;
        newPoints.map((e, idx) => {
            newPoints[idx] = [clipTri[0].vertices[idx].x, clipTri[0].vertices[idx].y] 
        });
        document.querySelector('.visualTri').setAttribute('points', newPoints.join(' '));
        document.querySelector('.visualTri').setAttribute('fill', clipTri[0].render.fillStyle);

        document.querySelector('.crossA1').setAttribute('fill', clipC[0].render.fillStyle);
        document.querySelector('.crossA1').setAttribute('d', `M${clipC[0].vertices[0].x},${clipC[0].vertices[0].y} L${clipC[0].vertices[3].x},${clipC[0].vertices[3].y} ${clipC[0].vertices[4].x},${clipC[0].vertices[4].y} ${clipC[0].vertices[7].x},${clipC[0].vertices[7].y}`);
        document.querySelector('.crossA2').setAttribute('fill', clipC[0].render.fillStyle);
        document.querySelector('.crossA2').setAttribute('d', `M${clipC[0].vertices[1].x},${clipC[0].vertices[1].y} L${clipC[0].vertices[2].x},${clipC[0].vertices[2].y} ${clipC[0].vertices[5].x},${clipC[0].vertices[5].y} ${clipC[0].vertices[6].x},${clipC[0].vertices[6].y}`);
    });

    Event.on(render, 'afterRender', (e) => {
        particles.forEach(p => {
            if (p.position.y > render.canvas.height) {
                Matter.Body.setVelocity(p, { x: 0, y: Common.random(-30, 30) });
                var x = Common.random(
                    100, ww - 100
                );
                var y = Common.random(-render.canvas.height, 0);
                Matter.Body.setPosition(p, { x: x, y: -p.circleRadius });
            }
        })
    });

    function Polygon(x, y, sides, width, r=0){
        this.body = Bodies.polygon(x, y, sides, width, {
            restitution: 0.6,
            label: 'static',
            chamfer: {radius: [r]},
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: {x, y},
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [this.body, this.con]);
    }

    function Circle(x, y, r){
        this.body = Bodies.circle(x, y, r, {
            restitution: 1,
            label: 'static',
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: {x, y},
            bodyB: this.body,
            pointB: { x: -50, y: -50 },
            length: 0,
            stiffness: 0.001,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ]);
    }
    
    function Rectangle(x, y, w, h, angle, r = 0, inertia=Infinity){
        this.body = Bodies.rectangle(x, y, w, h, {
            label: 'static',
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.1,
            chamfer: {radius: [r]},
            inertia,
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.con = Constraint.create({
            pointA: { x, y },
            pointB: {x: angle, y: -10},
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ]);
    }
    
    function Cross(x, y, w, h){
        this.partA = Bodies.rectangle(x, y, w, h, {
            label: 'cross',
            render: {
                fillStyle: colors[Math.round(Common.random(0, 5))]
            }
        });
        this.partB = Bodies.rectangle(x, y, h, w, {
            render: this.partA.render,
            label: 'cross'
        });
        this.body = Matter.Body.create({
            restitution: 0.4,
            parts: [ this.partA, this.partB ],
            inertia: window.innerWidth
        });
        this.con = Constraint.create({
            pointA: { x, y },
            bodyB: this.body,
            length: 0,
            render: { visible: false }
        });
        Composite.add(world, [ this.body, this.con ])
    }
    
    function updateParticle(min, max){
        for(var i = 0; i < 10; i++){
            let x = Common.random(100, render.canvas.width - 100),
                y = Common.random(-30, 30),
                size = Common.random(min, max),
                num = Math.round(Common.random(0, 5));
            const p = Bodies.circle(x, y, size, {
                restitution: 0,
                friction: 0,
                label: 'particle',
                render: {
                    fillStyle: colors[num]
                }
            });
            particles.push(p)
        }
    }
}