window.onload = () => {
    let container = document.getElementById("container");
    container.innerHTML = '<object type="text/html" data="lesson-plan.html" ></object>'
}

let handleNavClick = (id) => {
    let pages = [
        "students.html",
        "lesson-plan.html",
        "settings.html"
    ]
    let navBox = document.getElementsByClassName("icon-box")
    let container = document.getElementById("container");
    for (let index = 0; index < navBox.length; index++) {
        const element = navBox[index];
        if(element.classList.contains("nav-icon-active")){
            element.classList.remove("nav-icon-active")
        }
    }
    navBox[id].classList.add("nav-icon-active")
    container.innerHTML = `<object type="text/html" data="${pages[id]}" ></object>`
}