/*
  Shared motion primitives.

  The easing matches --ease-clay from the token layer, so JS-driven motion and
  CSS transitions feel like the same system.

  Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in
  App.jsx — Framer then neutralises transform/opacity animations for users who
  ask for it, so individual components don't need to check.
*/
export const EASE_CLAY = [0.16, 1, 0.3, 1];

/* Viewport rule for scroll reveals: fire once, slightly before fully in view. */
export const inView = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -60px 0px",
};

/* A single element rising into place. */
export const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_CLAY },
  },
};

/* Smaller travel — for items inside an already-revealed card. */
export const riseSm = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_CLAY },
  },
};

/* Parent that releases its children one after another. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/* Ready-made props for "reveal this block when it scrolls into view". */
export const revealProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: inView,
};

/* Same, for content that is already on screen at load (the hero). */
export const enterProps = {
  initial: "hidden",
  animate: "show",
};
