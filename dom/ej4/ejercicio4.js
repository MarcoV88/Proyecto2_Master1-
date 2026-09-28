document.querySelector("#btnToClick").addEventListener("click", event => {
    console.log(event);
});

document.querySelector(".focus").addEventListener("focus", event => {
    console.log(event.target.value);
});

document.querySelector(".value").addEventListener("input", event => {
    console.log(event.target.value);
});