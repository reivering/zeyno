document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Cursor Logic (Desktop Only)
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    if(window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0 });
        });

        gsap.ticker.add(() => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            gsap.set(follower, { x: followerX, y: followerY });
        });

        document.querySelectorAll('a, button, .project-item, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('cursor-active'));
            el.addEventListener('mouseleave', () => follower.classList.remove('cursor-active'));
        });
    }

    // Intro Animations
    const tl = gsap.timeline();
    tl.to('.loader-text', { opacity: 1, duration: 0.8, y: 0, ease: "power4.out" })
      .to('.loader-sub', { opacity: 1, duration: 0.8 }, "-=0.4")
      .to('.loader-text, .loader-sub', { opacity: 0, y: -50, duration: 0.5, delay: 0.5 })
      .to('.loader', { height: 0, duration: 0.8, ease: "expo.inOut" })
      .from('.reveal-text', { y: 150, skewY: 10, opacity:0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=0.5")
      .to('.scroll-indicator', { opacity: 1, duration: 1 }, "-=1");

    // Philosophy Reveal
    gsap.from('.philo-text', {
        scrollTrigger: { trigger: '.philosophy', start: 'top 80%' },
        y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"
    });

    // Services Grid Animation
    gsap.utils.toArray('.service-card').forEach((el, i) => {
        gsap.from(el, {
            scrollTrigger: { trigger: '.services', start: 'top 80%' },
            y: 50, opacity: 0, duration: 0.8, delay: i * 0.1, ease: "power2.out"
        });
    });

    gsap.from('.cta-text', {
        scrollTrigger: { trigger: '.cta', start: 'top 70%' },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
    
    gsap.to('.italic', {
        scrollTrigger: { trigger: '.cta', start: 'top 70%', scrub: true },
        color: '#ccff00',
    });
});