function threeSum(arr, target) {
// write your code 
	 // array to store binary number
    let binaryNum = new Array(32);
 
    // counter for binary array
    let i = 0;
    while (arr > 0) {
 
        // storing remainder in binary array
        binaryNum[i] = arr % 2;
        arr = Math.floor(arr / 2);
        i++;
    }
 
    // printing binary array in reverse order
    for (let j = i - 1; j >= 0; j--)
        document.write(binaryNum[j]);
}
 
// Driver program to test above function
    let arr = 17;
    decToBinary(arr);
  
}

module.exports = threeSum;