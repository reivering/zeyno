'use client';
import { useEffect, useState } from 'react';
import SplitText from "../ui/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default function IntroScreen() {
  const [animateLift, setAnimateLift] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    // 1s typing + 0.5s wait before lift
    const liftTimer = setTimeout(() => setAnimateLift(true), 1500);
    // Hide after lift completes (1.2s)
    const hideTimer = setTimeout(() => setHideIntro(true), 2700);

    return () => {
      clearTimeout(liftTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hideIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-base text-white transition-transform duration-[1200ms] ease-in-out ${
        animateLift ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="transform translate-y-12 animate-bounce-up">
        {/* Placeholder for your typing animation */}


        <SplitText
        text="Zeyno"
        className="text-[12vh] font-bold mb-24 font-raleway text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
}
