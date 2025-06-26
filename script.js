// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

document.querySelectorAll('.elem').forEach((elem) => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline()

    let xtransform = gsap.utils.random(-100, 100);

    tl
        .set(image, {
            transformOrigin: `${xtransform < 0 ? 0 : '100%'}`,
        })
        .to(image, {

        })
})