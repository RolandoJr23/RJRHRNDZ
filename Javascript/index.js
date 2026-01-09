// ************************************Navigation Scrolled Shadow************************************
const navBar = document.querySelector('nav');

function navShadow(){
    window.onscroll = function() {
        if(window.scrollY > 22)
        {
            navBar.classList.add('scrolled');
        }
        else
        {
            navBar.classList.remove('scrolled');
        }
    };
} navShadow();


// ************************************Scroll Navigation Link************************************
const navigation = document.querySelector("nav");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");


// ************************************Toggle Menu Navigation Bar************************************
const hamMenu = document.querySelector(".ham-menu");
const togMenu = document.querySelector("ul");

togMenu.style.maxHeight= "0px";

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    if(togMenu.style.maxHeight == "0px")
    {
        togMenu.style.maxHeight = "400px"
    }
    else{
        togMenu.style.maxHeight = "0px"
    }
});


// ************************************Display All Projects************************************
const projects = document.querySelector("#projectbox");

if(projects){
    displayProjects();
}

function displayProjects(){
    myprojects.forEach(project => {
        const proj = document.createElement("div");
        proj.classList.add("projbox");
        proj.innerHTML = `
            <div class="imageproj"><img src="${project.image}"/></div>
            <div class="details"> 
                <ul class="techtool-list">
                    <li>${project.techtools[0]}</li>
                    <li>${project.techtools[1]}</li>
                </ul>
                <h2 class="title">${project.title}</h2>
                <h3 class="desc">${project.desc}</h3>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
        `;
        projects.appendChild(proj);

        const projBox = proj.querySelector(".fa-arrow-up-right-from-square");
        projBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProjects", JSON.stringify(project));
            window.location.href = "projectdetails.html";
        });
    });
}


// ************************************Sending Message in Email************************************
(function(){
    emailjs.init({
      publicKey: "CklEv4ZnFZ-VSrEnK",
    });
})();

window.onload = function(){
    const form = this.document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subj").value,
            message: document.getElementById("message").value
        };
        
        emailjs.send("service_byplvku", "template_8gt77lk", templateParams)
            .then(function(response){
                alert("Email Sent Successfully!");
                console.log("Success!", response.status, response.text);   
            }, function(error) {
                alert("Failed to send email. Check console for details.");
                console.error("Failed...", error);
        });
    });
};


// ************************************Scroll Down Animation************************************

const firstSection = document.querySelector("#header");
const secondSection = document.querySelector("#Aboutme");
const aside = document.querySelector("aside");
const thirdSection = document.querySelector("#corecompetencies");
const fourthSection = document.querySelector("#myprojects");
const fifthSection = document.querySelector("#contacts");

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        entries[0].target.classList.add("show");
    }else{
        entries[0].target.classList.remove("show");
    }
}, 
{
    threshold: 0.2
})
observer.observe(firstSection)
observer.observe(secondSection)
observer.observe(aside)
observer.observe(thirdSection)
observer.observe(fourthSection)
observer.observe(fifthSection)







