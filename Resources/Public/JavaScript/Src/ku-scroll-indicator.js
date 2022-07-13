/**
 * Scroll progress indicator. Adds a progress bar at the top of the page and indicates scroll progress.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
        return;
    }

    const _timeoutIDs = {};
    let $progressbar;

    /**
     * 
     * @param {*} paramFunction 
     * @param {*} timeoutMs 
     * @param {*} functionID 
     */
    const nonBlockingRepetiveFunctionCall = (paramFunction, timeoutMs, functionID = '') => {
        if (!_timeoutIDs[paramFunction + functionID]) {
            // add timeout to not block the GUI
            _timeoutIDs[paramFunction + functionID] = window.setTimeout(() => {
                paramFunction();
                window.clearTimeout(_timeoutIDs[paramFunction + functionID]);
                _timeoutIDs[paramFunction + functionID] = undefined;
            }, timeoutMs);
        }
    }

    /**
     * Calculate progress and update progress bar
     */
    const scrollProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scroll = (winScroll / height) * 100;
        scroll = Math.round(scroll);
        $progressbar.setAttribute('aria-valuenow', scroll);
        $progressbar.setAttribute('aria-valuetext', 'Scroll progress: ' + scroll + '%');
        $progressbar.style.setProperty('--scrollPercentage', scroll + '%');
    }

    /**
     * Append progress bar html
     */
    const appendProgressbar = () => {
        const target = document.querySelector('header:first-of-type');
        const bar = document.createElement('div');
        bar.classList.add('progress', 'scroll-indicator');
        bar.innerHTML = '<div class="progress-bar" id="horizontal-scroll" role="progressbar" aria-valuetext="Scroll progress: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" tabindex="-1"></div>';
        const fragment = document.createDocumentFragment();
        fragment.appendChild(bar);
        target.appendChild(fragment);
        $progressbar = document.getElementById('horizontal-scroll');
    }
    appendProgressbar();

    window.addEventListener('scroll', () => {
      const $el = document.querySelector('.scroll-indicator');
        if ($progressbar) {
            
            // Update progressbar on scroll
            nonBlockingRepetiveFunctionCall(() => {
                scrollProgress();
                const top = window.pageYOffset || document.documentElement.scrollTop;
                // Apply class to scroll progress bar after some scroll to make it visible...
                $el.classList.toggle('in-view', top > 20);
            }, 10);
        }
    });
});
