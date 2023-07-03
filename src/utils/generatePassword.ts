export type Options = {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
};

export const generatePassword = (length: number, options: Options): string => {
  let result = "";
  const characterSets: { [key: string]: string } = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const selectedCharacters = Object.keys(options)
    .filter((option) => options[option as keyof Options])
    .map((option) => characterSets[option as keyof Options]) // Type assertion
    .join("");

  const selectedCharactersLength = selectedCharacters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharactersLength);
    result += selectedCharacters.charAt(randomIndex);
  }

  return result;
};
