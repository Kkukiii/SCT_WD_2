let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll(".button");

let string = "";
let isEvaluated = false;

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
                isEvaluated = true;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            // If last operation was evaluation, and user types a number/operator, start fresh
            if (isEvaluated && /[0-9.]/.test(value)) {
                string = value;
                isEvaluated = false;
            } else {
                string += value;
                isEvaluated = false;
            }
            input.value = string;
        }
    });
});
