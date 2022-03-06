'use strict';

{
    // Intersection Observer API

    function ivViewCallback(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }

    const ivViewObserver = new IntersectionObserver(ivViewCallback, {
        threshold: 0.2,
    });

    document.querySelectorAll('.animate').forEach(el => {
        ivViewObserver.observe(el);
    });
    const header = document.querySelector('header');
    const toTop = document.getElementById('to_top');

    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('target'))
    toTop.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior:'smooth',

        });
    });

    function onScrollCallback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('scrolled');
                toTop.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
                toTop.classList.remove('scrolled');
            }
        });

    }
}