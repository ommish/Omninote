export const debounce = (func, delay) => {
  let timeoutFunc;
  return (callImmediately) => {
    const laterFunc = () => {
      timeoutFunc = null;
      if (!callImmediately) func();
    }
    window.clearTimeout(timeoutFunc);
    timeoutFunc = window.setTimeout(laterFunc, delay);
    if (callImmediately && !timeoutFunc) func();
  };
};
