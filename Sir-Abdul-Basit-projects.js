const Container = document.querySelector("#container")
const newContainer = document.querySelector("#new-container")
const Container1 = document.querySelector(".container1")
const Container2 = document.querySelector(".container2")
const navIcon = document.querySelector("#nav-icon")

navIcon.addEventListener("click", function(){
    newContainer.style.display = (newContainer.style.display == "block") ? "none" : "block";
    if (newContainer.style.display == "block") {
        Container.style.gridTemplateRows = "25vh 45vh 45vh 50vh 70vh 115vh 85vh";
    }else{
        Container.style.gridTemplateRows = "25vh 45vh 50vh 70vh 115vh 85vh"
    }
})

function remove(){
    if (navIcon.display == "none") {
        newContainer.style.display = "none"
    }
}

remove()


window.addEventListener("resize", function(){
 if (window.innerWidth < 800) {
        newContainer.style.display = "none"
    
     Container.style.gridTemplateRows = " 23vh 45vh 50vh 70vh 115vh"
}})

window.addEventListener("resize", function(){
    if (window.innerWidth < 1058 && window.innerWidth > 800 ) {
        newContainer.style.display = "none"
    Container.style.gridTemplateRows = " 23vh 45vh 30vh 70vh 115vh"

}})



window.addEventListener("resize", function(){
    if (window.innerWidth > 1058 ) {
        newContainer.style.display = "none"
    
    Container.style.gridTemplateRows = "30vh 65vh 44vh 105vh 100vh"
}})

