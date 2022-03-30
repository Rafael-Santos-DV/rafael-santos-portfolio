import { useCallback } from 'react';

const useAnimate = () => {
  return useCallback(() => {
    const elements = Array.from(
      document.querySelectorAll('.js-animate-react')
    ) as HTMLElement[];
    const elementScroll = document.getElementById(
      'js-data-scroll-react'
    ) as HTMLElement;

    function isOnScreen(element: HTMLElement): boolean {
      const rect = element.getBoundingClientRect();
      return rect.top > 0 && rect.bottom < window.innerHeight + 150;
    }

    if (elementScroll) {
      elementScroll.addEventListener('scroll', () => {
        elements.forEach((element) => {
          if (isOnScreen(element)) {
            element.style.animationPlayState = 'running';
          }
        });
      });
    }
  }, []);
};

export default useAnimate;
