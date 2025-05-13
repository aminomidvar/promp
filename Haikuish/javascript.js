function reverseString() {
    // Get the user input value
    let input = document.getElementById("inputString").value;
    
    // Reverse the string
    let reversed = input.split("").reverse().join("");
    
    // Display the reversed string
    document.getElementById("output").textContent = reversed;
}