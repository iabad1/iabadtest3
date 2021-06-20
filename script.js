
let hamburger = document.getElementById("hamburger-container");
let nav = document.getElementById("nav-links");
let lines = document.getElementsByClassName("line");
let links = document.getElementsByClassName("links");
let fixedPage = document.getElementById("main-container");
let lines_classLength = lines.length;
let links_classLength = links.length;


function openNav(){
    //check for 'active' classlist
    if(hamburger.classList[1] === "active"){
        console.log("Removed active");
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        fixedPage.classList.remove("active");

        for(let i = 0; i < lines_classLength; i++){
            lines[i].classList.remove("active");
        }
        for(let j = 0; j < links_classLength; j++){
            links[j].classList.remove("active");
        }
    }
    else{
        console.log("Added active");
        hamburger.classList.add("active");
        nav.classList.add("active");
        fixedPage.classList.add("active");
        for(let i = 0; i < lines_classLength; i++){
            lines[i].classList.add("active");
        }
        for(let j = 0; j < links_classLength; j++){
            links[j].classList.add("active");
        }
       
    }
    
}
