export const stringlength = (string) => {
  if (string.length < 1 || string.length > 10){
    throw new Error('String must be at least one character long and not more than 10');
  };
  try {
    return string.length;
  }
  catch (Error){
    return (Error);
  };
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
}

export class calculator {
  constructor (){
    this.value = 0;
  };

  add(num, num2){
    return num + num2;
  };

  subtract(num, num2){
    return num - num2;
  };

  divide(num, num2){
    return num / num2;
  };

  multiply(num, num2){
    return num * num2;
  };
};

export const capitalizeFirst = (string) => {
  const firstLetter = string.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = string.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;
  return capitalizedWord;
}