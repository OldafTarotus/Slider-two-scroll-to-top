let scrollToIp = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 500 ? scrollToIp.classList.add("show") : scrollToIp.classList.remove("show");
}

scrollToIp.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}
