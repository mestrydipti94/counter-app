let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let decrease = document.querySelector("#decrease")
let h2 = document.querySelector("h2");
let count = 0;

increase.addEventListener("click", function () {

    count++;
    h2.textContent = count;
    if (count > 0) {
        h2.style.color = "green";
    } else if (count < 0) {
        h2.style.color = "red";
    } else {
        h2.style.color = "black";
    }

});

decrease.addEventListener("click", function () {

    count--;
    h2.textContent = count;
    if (count > 0) {
        h2.style.color = "green";
    } else if (count < 0) {
        h2.style.color = "red";
    } else {
        h2.style.color = "black";
    }
});

reset.addEventListener("click", function () {

    count = 0
    h2.textContent = count;
    h2.style.color = "black";
});

