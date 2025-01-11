/**
 * Generate a random word with a random length between minLength and maxLength
 * First letter is uppercase, the rest is lowercase
 * @param minLength minimum length of the word
 * @param maxLength maximum length of the word
 * @returns a random word
 */
export default function randomWord(
    minLength: number = 5,
    maxLength: number = 15,
): string {
    const length =
        Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let name = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}`;
    for (let i = 0; i < length - 1; i++)
        name += String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    return name;
}
