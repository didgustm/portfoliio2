function Polygon(x, y, sides, width, r=0){
    this.body = Bodies.polygon(x, y, sides, width, {
        restitution: 0.6,
        label: 'static',
        chamfer: {radius: [r]},
        render: {
            fillStyle: colors[Math.round(Common.random(0, 4))]
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
            fillStyle: colors[Math.round(Common.random(0, 4))]
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
            fillStyle: colors[Math.round(Common.random(0, 4))]
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
            fillStyle: colors[Math.round(Common.random(0, 4))]
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
            num = Math.round(Common.random(0, 4));
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

export { Polygon, Circle, Cross, Rectangle, updateParticle }