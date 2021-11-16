function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    let res = document.getElementById("result");
    res.value += value;
}