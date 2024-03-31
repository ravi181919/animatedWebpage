const gsapTimeLine = gsap.timeline();

const navAnimation = () => {
  gsapTimeLine.from(".nav h1", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
};
navAnimation();

const homeTextAnimation = () => {
  gsapTimeLine.from(".home h1", {
    x: -400,
    opacity: 0,
    stagger: 0.4,
    duration: 0.4,
  });
};
homeTextAnimation();

const homeImageAnimation = () => {
    gsapTimeLine.from('.image img', {
        y:-700,
        duration:0.3,
        stagger:0.5
    });
}
homeImageAnimation()

