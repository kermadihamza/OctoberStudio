export const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
};
