import { useEffect, useRef } from 'react';

export const useScrollAnimation = (animationUp, animationDown) => {
    const reference = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const toAnimate = reference.current;
            if (!toAnimate) return;

            
            

            const scrollPosition = window.scrollY + window.innerHeight;
            const toAnimatePosition = toAnimate.offsetTop + toAnimate.clientHeight / 2;

            if (scrollPosition > toAnimatePosition) {
                toAnimate.style.animation = animationUp;
                toAnimate.style.visibility = 'visible';
            } else {
                toAnimate.style.animation = animationDown;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return reference;
};