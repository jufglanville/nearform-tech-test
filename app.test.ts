import {
  formatConsonant,
  formatVowel,
  exerciseOne,
  formatConsonantTwo,
  exerciseTwo,
  isUpperCase,
} from "./app";

describe("Consonant Function", () => {
  it.each`
    input       | output
    ${"pig"}    | ${"igpay"}
    ${"latin"}  | ${"atinlay"}
    ${"smile"}  | ${"ilesmay"}
    ${"floor"}  | ${"oorflay"}
    ${"string"} | ${"ingstray"}
  `(
    'Moves all the letters before the first vowel to the end and appends "ay"',
    ({ input, output }) => {
      expect(formatConsonant(input)).toBe(output);
    }
  );
});

describe("Vowel Function", () => {
  it.each`
    input        | output
    ${"egg"}     | ${"eggyay"}
    ${"explain"} | ${"explainyay"}
    ${"I"}       | ${"Iyay"}
  `('Appends "yay" to the end of the word', ({ input, output }) => {
    expect(formatVowel(input)).toBe(output);
  });
});

describe("Exercise One", () => {
  it.each`
    input                                                                        | output
    ${"pleased to meet you"}                                                     | ${"easedplay otay eetmay ouyay"}
    ${"how much does it cost"}                                                   | ${"owhay uchmay oesday ityay ostcay"}
    ${"i would rather be at the beach"}                                          | ${"iyay ouldway atherray ebay atyay ethay eachbay"}
    ${"a tree whose elements have at most two children is called a binary tree"} | ${"ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay inarybay eetray"}
  `("Returns the correct encoded message", ({ input, output }) => {
    expect(exerciseOne(input)).toBe(output);
  });
});

describe("isUpperCase function", () => {
  it.each`
    input     | output
    ${"T"}    | ${true}
    ${"t"}    | ${false}
    ${"TREE"} | ${true}
    ${"TReE"} | ${false}
  `(
    "Returns true or false whether whether passed string/letter is capitalised",
    ({ input, output }) => {
      expect(isUpperCase(input)).toBe(output);
    }
  );
});

describe("Consonant Function including casing", () => {
  it.each`
    input        | output
    ${"Pleased"} | ${"Easedplay"}
    ${"Do"}      | ${"Oday"}
    ${"Pig"}     | ${"Igpay"}
    ${"Latin"}   | ${"Atinlay"}
    ${"Time"}    | ${"Imetay"}
    ${"BINARY"}  | ${"INARYBAY"}
    ${"TREE"}    | ${"EETRAY"}
  `(
    'Moves all the letters before the first vowel to the end and appends "ay"',
    ({ input, output }) => {
      expect(formatConsonantTwo(input)).toBe(output);
    }
  );
});

describe("Exercise Two", () => {
  it.each`
    input                                                                        | output
    ${"Pleased to meet you"}                                                     | ${"Easedplay otay eetmay ouyay"}
    ${"Do you speak Pig Latin"}                                                  | ${"Oday ouyay eakspay Igpay Atinlay"}
    ${"Time flies when you are having fun"}                                      | ${"Imetay iesflay enwhay ouyay areyay avinghay unfay"}
    ${"A tree whose elements have at most two children is called a BINARY TREE"} | ${"Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY"}
  `("Returns encoded message with the original casing", ({ input, output }) => {
    expect(exerciseTwo(input)).toBe(output);
  });
});
