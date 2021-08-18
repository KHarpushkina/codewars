function rgb(r, g, b) {
  let rgb = [r, g, b];
  let result = "";
  let hexValue = 0;
  for (let i = 0; i < rgb.length; i++) {
    if (rgb[i] > 255) {
        rgb[i] = 255;
    }
    if (rgb[i] < 0) {
        rgb[i] = 0;
    }
    hexValue = rgb[i].toString(16);
    result += hexValue.length === 1 ? "0" + hexValue : hexValue;
  }
  return result.toUpperCase();
}

console.log(rgb(300, 255, 255));
