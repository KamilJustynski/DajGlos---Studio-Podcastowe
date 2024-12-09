const getTimelineHeight = () => {
  if (window.innerWidth < 640) {
    return 150;
  } else if (window.innerWidth >= 640) {
    return 220;
  }
};

const getTimelineHeight02 = () => {
  if (window.innerWidth < 640) {
    return 240;
  } else if (window.innerWidth >= 640) {
    return 310;
  }
};

const getTimelineWidth = () => {
  if (window.innerWidth >= 1280) {
    return 1050;
  } else if (window.innerWidth >= 1024) {
    return 780;
  }
};

export const timelineAnimation = {
  hidden: { height: 0 },
  visible: {
    height: getTimelineHeight(),
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export const timelineAnimation02 = {
  hidden: { height: 0 },
  visible: {
    height: getTimelineHeight02(),
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export const timelineAnimationWidth = {
  hidden: { width: 0 },
  visible: {
    width: getTimelineWidth(),
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
