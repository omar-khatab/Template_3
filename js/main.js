// dark mode in page

let darkMode = document.querySelectorAll(".heading .theme");

darkMode.forEach((e) => {
    e.onclick = function () {
        document.body.classList.toggle("dark-theme");
    }     
})

// open main-links in head

let mainLinks = document.querySelector(".main-links");
let list = document.querySelector(".heading .container ul")

mainLinks.onclick = function () {
    list.classList.toggle("open")
}


// scroll to top

let scrollTop = document.querySelector(".back")

scrollTop.onclick = function () {
    scrollTo ({
        top:0,
        behavior:"smooth",
    })
}

//read more in about

let textMore = document.querySelector(".about .content .card .special:last-of-type");
let readMore = document.querySelector(".about .content .more");


readMore.onclick = function () {
    textMore.classList.add("more")
    this.remove()
}