//Function Rounds to two decimal places and takes into account some of the weird edge cases that happen in frontend js calculations
//Explanation can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function roundToX(number, decimals) { 
    return +(Math.round(number + "e+" + decimals) + "e-" + decimals); 
}

export default roundToX;