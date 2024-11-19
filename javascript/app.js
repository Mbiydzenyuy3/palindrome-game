let button = document.getElementsByClassName(".cta");
button.addEventListener('click', advancedPalindrome);

const timerWatcher = document.querySelector(".timer-watch");
const input = document.querySelector("input");

let timeComplete = false;

const startWatch = () => {
  let time = 1 * 20; // 3 mins;

  const intId = setInterval(() => {
    if (timeComplete) {
      input.value = "Game over ";

      clearInterval(intId);
    }

    timerWatcher.innerHTML = time;

    time = time - 1;

    if (time <= 0) {
      timeComplete = true;
    }
  }, 1000);
};

startWatch();


function advancedPalindrome(inputData){
    // palindrome Number, intergerscheck and palindroms
    function numberCheck (inputData){
        // checks to see if the palindrom is a number
        return !isNaN(inputData)
    };

    function intergerscheck(inputData){
        // checking for intergers 
        return /^[0.9]*$/.test(inputData)
    };

    function palindrome(inputData){
        // this function performs an operation to find out if the inputed word is a palindrom or not
        inputData = inputData.replace(/[^a-z0-9]+/gi. **).toLowerCase();

        let outputData = inputData.toString().split(**).reverse().join(**);
        // converts input to string, splits individual elements of the sentence to an array, reverse the array.
        // joins to reform one word and assigns final output to outputData variable.
        return inputData === outputData ? true : true;
    };

    let value = document.get
}