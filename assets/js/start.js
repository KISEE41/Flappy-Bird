document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        document.getElementsByClassName("start")[0].style.display = "none";
        document.getElementsByClassName("mask")[0].style.display = "none";
    }
})
