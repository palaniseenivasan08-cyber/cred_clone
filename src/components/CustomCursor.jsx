import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animate);
    };

    const handleHover = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      follower.style.width = '60px';
      follower.style.height = '60px';
      follower.style.borderColor = 'rgba(212, 175, 55, 0.8)';
    };

    const handleUnhover = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.width = '36px';
      follower.style.height = '36px';
      follower.style.borderColor = 'rgba(212, 175, 55, 0.5)';
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  // Only show on desktop
  return (
    <div className="hidden lg:block">
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </div>
  );
};

export default CustomCursor;
