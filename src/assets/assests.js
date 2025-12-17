export const validateInput = (input, type) => {
  if (type == "list") {
    return input.length > 0 ? true : false;
  }
  if (type == "number") {
    return !isNaN(input);
  }
  const inputTrimmed = input.trim();
  if (inputTrimmed == "") {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (type == "email") {
    return emailRegex.test(inputTrimmed);
  }

  return true
}




