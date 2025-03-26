const bodyElement = document.querySelector("body")
const news = document.querySelector(".news")
const h1 = document.querySelector("h1")
const zprava1 = document.querySelector("#zprava1")
const obrazek = document.querySelector("#zprava3 .post__picture")

bodyElement.style.backgroundColor = "#e9e9e9"
news.style.backgroundColor = "white"
news.style.maxWidth = "60rem"
h1.classList.add("news__title")
h1.textContent = "Aktuální novinky"
zprava1.classList.add("post--main")
obrazek.src = "images/zprava3-novy.jpg"