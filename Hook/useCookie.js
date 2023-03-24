import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function useCookie(key, intialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, intialValue);
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(value), { expires: 9999 });
  }, [value, key]);

  return [value, setValue];
}

function getSavedValue(key, intialValue) {
  const SavedValue = Cookies.get(key, { path: '/' });
  if (SavedValue) {
    return JSON.parse(SavedValue);
  }
  return intialValue;
}
