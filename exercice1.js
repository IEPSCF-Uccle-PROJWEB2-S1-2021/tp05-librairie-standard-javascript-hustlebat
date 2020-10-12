function chuckNorris(msg) {
  let buffer = "";
  for (let i = 0; i < msg.length; i++) {
    const charCode = msg.charCodeAt(i);
    const binaryCode = charCode.toString(2);
    buffer += binaryCode;
  }
  const convertedChar = CToUnary(buffer);

  return convertedChar;
}

function CToUnary(binaryCode) {
  let result = "";
  let lastChar = "";
  for (let i = 0; i < binaryCode.length; i++) {
    const element = binaryCode[i];
    if (element === lastChar) {
      result += "0";
    } else {
      result += " ";
      if (element === "1") {
        result += "0 0";
      } else {
        result += "00 0";
      }
    }
    lastChar = element;
  }
  return result;
}
