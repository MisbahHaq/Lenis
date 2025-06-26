// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.elem').forEach((elem) => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline()

    let xtransform = gsap.utils.random(-100, 100);

    tl
        .set(image, {
            transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
        }, "start")
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }, "start")
        .to(elem, {
            xPercent: xtransform,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })
})