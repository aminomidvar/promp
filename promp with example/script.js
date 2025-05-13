
function generateRandomArray(length) {
    return Array.from({ length }, () => parseFloat((Math.random() * 10).toFixed(2)));
}

function calculateSum() {
    let numbers = generateRandomArray(6);
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    document.getElementById("numbers").innerText = `[${numbers.join(", ")}]`;
    document.getElementById("result").innerText = `$${sum.toFixed(2)}`;
}