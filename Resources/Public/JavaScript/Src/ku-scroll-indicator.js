/**
 * Scroll progress indicator. Adds a progress bar at the top of the page and indicates scroll progress.
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
  
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      return;
    }
    let scrollPosition = 0;
    let tick = false;
  
    const scrollProgress = () => {
      const progressbar = document.getElementById('horizontal-scroll');
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scroll = (winScroll / height) * 100;
      scroll = Math.round(scroll);
      progressbar.setAttribute('aria-valuenow', scroll);
      progressbar.setAttribute('aria-valuetext', 'Scroll progress: ' + scroll + '%');
      progressbar.style.setProperty('--scrollPercentage', scroll + '%');
    }
  
    window.addEventListener('scroll', () => {
      const el = document.querySelector('.scroll-indicator');
      scrollPosition = window.scrollY;
      if (!tick) {
        window.requestAnimationFrame(function() {
          scrollProgress();
          const top = window.pageYOffset || document.documentElement.scrollTop;
          // Apply class to scroll progress bar after some scroll to make it visible...
          el.classList.toggle('in-view', top > 20);
          tick = false;
        });
        tick = true;
      }
    }, {
      capture: false,
      passive: true
    });
  });
  