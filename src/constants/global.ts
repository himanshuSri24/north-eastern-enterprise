export const isMobile = () => {
  return window.innerWidth < 768;
};

export const getLogoDimensions = (
  windowWidth: number = 1025,
  smallerVariant?: boolean
) => {
  if (windowWidth <= 440) {
    return smallerVariant
      ? { width: 165, height: 16.5 }
      : { width: 270, height: 27 };
  } else if (windowWidth < 768) {
    return smallerVariant
      ? { width: 175, height: 17.5 }
      : { width: 350, height: 35 };
  } else if (windowWidth < 1024) {
    return smallerVariant
      ? { width: 215, height: 21.5 }
      : { width: 430, height: 43 };
  } else if (windowWidth < 1500) {
    return smallerVariant
      ? { width: 225, height: 22.5 }
      : { width: 450, height: 45 };
  } else {
    return smallerVariant
      ? { width: 300, height: 30 }
      : { width: 600, height: 60 };
  }
};

export const getLocationsDimensions = (windowWidth: number = 1025) => {
  if (windowWidth <= 440) {
    return { width: 77, height: 43 };
  } else if (windowWidth < 768) {
    return { width: 77 * 1.25, height: 43 * 1.25 };
  } else if (windowWidth < 1024) {
    return { width: 77 * 1.75, height: 43 * 1.75 };
  } else if (windowWidth < 1500) {
    return { width: 221, height: 124 };
  } else {
    return { width: 221, height: 124 };
  }
};
