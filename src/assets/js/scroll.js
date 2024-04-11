import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);
export const scroll = () => {
    const lenis = new Lenis({
        syncTouch: true
    });
	lenis.on('scroll', () => {
        ScrollTrigger.update
    });
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);

    let pin = gsap.timeline({
        scrollTrigger: {
            trigger:'.pin',
            scrub:1,
            pin:!0,
            onUpdate ({ progress }){
                gsap.to('.tail', { strokeDashoffset:540 - progress*540 })
            },
            end:`+=${document.querySelector('.pin').offsetHeight * 4}`
        },
        ease: 'none'
    });
    pin.to('.visualBall', { r:600, duration:4 })
    .to('.barba', { scale:6 }, '<')
    .to('.barba', { scale:10, opacity:1, delay:1 })
    .to('.about', { opacity:1, 
        onComplete: () => zIndex('about', 1),
        onReverseComplete: () => zIndex('about', -1)
    }, '<')
    .to('.visual_in', { opacity:0 })
    .to('.barbaB', { scale:1, opacity:.5, duration:4 })
    .to('.career', { opacity:1, yPercent:-50, duration:3 }, '-=0.2')
    .to('.career', { opacity:0, yPercent:-100, delay:2, duration:3 })
    .to('.about .top', { y:0, duration:4 }, '<')
    .to('.skills li', { opacity:1, y:0, yPercent:0, duration:4 })
    .to('.about .inner', { rotateX:45, opacity:0, delay:4, duration:3,
        onComplete: () => zIndex('portfolio', 1),
        onReverseComplete: () => zIndex('portfolio', -1)
    })
    .to('.portfolio', { opacity:1 }, '<')
    .to('.portfolio .inner', { rotateX:0, opacity:1, duration:3 })
    .to('.contact', { y:0, delay:3, duration:4 });


    function zIndex(target, value){
        document.querySelector(`.${target}`).style.zIndex = value
    }
}