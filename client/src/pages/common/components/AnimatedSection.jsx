import React, { useEffect } from 'react';
import 'animate.css/animate.min.css'; // Import animate.css for pre-built animations
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Adjust the threshold as per your needs
  });

  useEffect(() => {
    if (inView) {
      ref.current.classList.add('animate__animated', animation);
    }
  }, [inView, ref, animation]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedSection;