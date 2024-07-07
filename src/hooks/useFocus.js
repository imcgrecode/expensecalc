import { useState } from 'react';

const useFocus = (initialState = false) => {
  const [isFocused, setIsFocused] = useState(initialState);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (value) => {
    setIsFocused(!!value); // Set isFocused to true if there is a value, false otherwise
  };

  return {
    isFocused,
    handleFocus,
    handleBlur,
  };
};

export default useFocus;
