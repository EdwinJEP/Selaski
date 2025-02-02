// IIFE: Immediately Invoked Function Expression => Avoid scopes
(() => {

  /**
 * Calculates the time required to type a whole number on a numeric keypad.
 * @param number Numeric keypad represented as an array with 10 elements.
 * @param digits Number to write.
 * @returns Total time if valid, 0 if invalid.
 */
  const calculateTime = (keypad: number[], digits: number): number => {
    const isValid = validateKeypad(keypad);

    if (isValid) {
      const numberString = digits.toString();
      let typingTime = 0;
      let currentDigit = 0;

      for (let i = 0; i < numberString.length; i++) {
        const targetDigit = parseInt(numberString[i]);
        const digitIndex = keypad.indexOf(targetDigit);
        typingTime += Math.abs(digitIndex - currentDigit);
        currentDigit = digitIndex;
      }

      return typingTime;
    } else {
      return 0;
    }
  }

  /**
   * Checks if an array contains only the numbers 0 to 9 without repetitions.
   * @param keypad Keypad.
   * @returns Boolean
   */
  function validateKeypad(keypad: number[]): boolean {
    const uniqueNumbers = new Set(keypad);
    if (uniqueNumbers.size !== 10) return false
    return true;
  }

  // Case 1
  const keypadCaseOne: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(calculateTime(keypadCaseOne, 1297));

  // Case 2
  const keypadCaseTwo: number[] = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4];
  console.log(calculateTime(keypadCaseTwo, 1297));
})();
