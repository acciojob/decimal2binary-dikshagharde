function threeSum(arr, target) {
 let binaryString = "";
  while (arr > 0) {
    binaryString = (arr % 2) + binaryString;
    arr = Math.floor(arr / 2);
  }
  return binaryString;
}
module.exports = threeSum;
