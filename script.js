const button = document.querySelector('#check-btn');
const userInput = document.querySelector('#text-input');
const message = document.querySelector('#message');

button.addEventListener('click', function (e) {
    const inputValue = userInput.value.trim();

    if (inputValue === '') {
        message.innerHTML = 'Please input a value';
        alert('Please input a value');
    } else {
        isPalindrome(inputValue);
    }
});

function isPalindrome(userInput) {
    // Sanitize input: remove non-alphanumeric characters and convert to lowercase
    const sanitizedInput = userInput
        .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
        .toLowerCase();               // Convert to lowercase

    let reverse = '';
    for (let i = sanitizedInput.length - 1; i >= 0; i--) {
        reverse += sanitizedInput[i];
    }

    if (reverse === sanitizedInput) {
        message.innerHTML = `${userInput} is a palindrome`;
    } else {
        message.innerHTML = `${userInput} is not a palindrome`;
    }
}
