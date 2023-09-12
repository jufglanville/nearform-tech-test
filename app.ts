// Vowels
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// Exercise One

export const formatConsonant = (string: string): string => {
  let suffix = "";
  let iteration = 0;

  while (!vowels.includes(string[iteration])) {
    suffix += string[iteration];
    iteration++;
  }

  return string.slice(iteration) + suffix + "ay";
};

export const formatVowel = (string: string): string => {
  return string + "yay";
};

export const exerciseOne = (string: string): string => {
  const words = string.split(" ");

  const formatText = words.reduce((acc, cur) => {
    return vowels.includes(cur[0])
      ? (acc += `${formatVowel(cur)} `)
      : (acc += `${formatConsonant(cur)} `);
  }, "");

  return formatText.trim();
};

// Exercise Two

export const isUpperCase = (string: string): boolean => {
  return /^[A-Z]+$/.test(string);
};

export const formatConsonantTwo = (string: string): string => {
  let iteration = 0;
  let isCap: number[] = [];
  let newWordArr: string[] = [];

  const allUppercase = isUpperCase(string);

  while (!vowels.includes(string[iteration])) {
    if (allUppercase) {
      newWordArr.push(string[iteration]);
    } else {
      newWordArr.push(string[iteration].toLowerCase());
      if (isUpperCase(string[iteration])) isCap.push(iteration);
    }
    iteration++;
  }

  newWordArr.unshift(...string.slice(iteration));

  if (allUppercase) {
    return newWordArr.join("") + "AY";
  } else {
    isCap.forEach((iteration) => {
      newWordArr[iteration] = newWordArr[iteration].toUpperCase();
    });
    return newWordArr.join("") + "ay";
  }
};

export const exerciseTwo = (string: string): string => {
  const words = string.split(" ");

  const formatText = words.reduce((acc, cur) => {
    return vowels.includes(cur[0])
      ? (acc += `${formatVowel(cur)} `)
      : (acc += `${formatConsonantTwo(cur)} `);
  }, "");

  return formatText.trim();
};
