export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
}

export const smoothEase = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1.0],
}

export const fastEase = {
  duration: 0.3,
  ease: "easeInOut",
}
