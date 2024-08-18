let main_click = () => {
    let inputField = document.getElementById("inputField");
    let result = document.querySelector(".result");
    let btn = document.getElementById("btn");

    let inputMain = inputField.value;

    if (inputMain == "") {
        result.textContent = "Please enter a number";
    }
    else if (inputMain == 0) {
        result.textContent = "Its a ZERO ";

    }
    else if (inputMain > 0) {
        result.textContent = "Its a Positive value ";

    } else if (inputMain < 0) {
        result.textContent = "Its a Nagetive value ";

    } else {
        result.textContent = "not a number"

    }

}

btn.addEventListener("click", () => {
    main_click();
    setTimeout(() => {
        inputField.value = "";

    }, 500)
})
