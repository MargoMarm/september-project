import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1439px)',
  '(min-width: 1440px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler),
      );
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {},
  );
};
