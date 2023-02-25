window.addEventListener("scroll", e => {
    let sTop = document.documentElement.scrollTop;
    let sHeight = document.documentElement.scrollHeight;
    let cHeight = document.documentElement.clientHeight;

    let mainProgress = Math.floor(sTop / (sHeight - cHeight) * 100)
    document.getElementById('progressBar').style.width = mainProgress + "%"
})