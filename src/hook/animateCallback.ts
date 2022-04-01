import { useCallback } from 'react';

const useAnimate = () => {
  return useCallback(() => {
    const elements = Array.from(
      document.querySelectorAll('.js-animate-all')
    ) as HTMLElement[];
    const elementScroll = document.getElementById(
      'js-data-scroll-react'
    ) as HTMLElement;

    if (elementScroll) {
      elementScroll.addEventListener('scroll', () => {
        elements.forEach((element) => {
          const windowHeight = window.innerHeight * 0.6;
          const elementRect = element.getBoundingClientRect();
          const isTrueOrFalseElement = elementRect.top - windowHeight < 0;

          if (isTrueOrFalseElement) {
            element.classList.remove('js-animate-react');
            element.classList.add('js-animate-init-all');
          } else {
            element.classList.remove('js-animate-init-all');
            element.classList.add('js-animate-react');
            // element.style.animationPlayState = 'paused';
          }

          // animation parte de cima
          // if (elementRect.top < 0) {
          //   if (Math.abs(elementRect.top) - elementRect.height >= 0) {
          //     element.classList.add('js-animate-react');
          //   }
          // }
        });
      });
    }
  }, []);
};

export default useAnimate;
