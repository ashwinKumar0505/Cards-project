import { useEffect } from "react";

const useInfiniteScroll = (ref, onScrollBottomReached) => {
  useEffect(() => {
    ref.current?.addEventListener("scroll", () => {
      if (!ref.current) return;

      const isBottomReached =
        ref.current.scrollTop + ref.current.clientHeight >=
        ref.current.scrollHeight;

      if (isBottomReached) {
        onScrollBottomReached();
      }
    });
  }, [onScrollBottomReached, ref]);
};

export default useInfiniteScroll;
