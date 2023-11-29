import React from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref Ref to the element
 * @param callback Callback function to be called when outside click happens
 */
export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
