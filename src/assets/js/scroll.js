import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const scroll = () => {
    let pin = gsap.timeline({
        scrollTrigger: {
            trigger:'.pin',
            scrub:1.5,
            pin:!0,
            onUpdate ({ progress }){
                gsap.to('.tail', { strokeDashoffset:540 - progress*540 })
                console.log(progress)
            },
            end:`+=${document.querySelector('.pin').offsetHeight * 4}`
        },
        duration:2
    });
    pin.to('.visualBall', { r:600 })
    .to('.barba', { scale:6, }, '<')
    .to('.barba', { scale:10, opacity:1, duration:0.2 });

}