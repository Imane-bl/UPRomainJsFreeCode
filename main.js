let btn = document.getElementById("convert-btn");
let out = document.getElementById("output");

btn.addEventListener('click', function() {
    let input = document.getElementById("number").value;

    if (input === "") {
        out.innerHTML = "Please enter a valid number";
    } else {
        let num = parseInt(input);

        if (num < 1) {
            out.innerHTML = "Please enter a number greater than or equal to 1";
        } else if (num > 3999) {
            out.innerHTML = "Please enter a number less than or equal to 3999";
        } else {
            let result = convertToRoman(num);
            out.innerHTML = result;
        }
    }
});

function convertToRoman(num) {
    let symbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let res = "";

    for (let i in symbols) {
        while (num >= symbols[i]) {
            res += i;
            num -= symbols[i];
        }
    }

    return res;
}