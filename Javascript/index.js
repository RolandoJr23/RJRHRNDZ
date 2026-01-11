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
const wrapprsninfo = document.querySelector(".wrappersonalinfo");

togMenu.style.maxHeight= "0px";
wrapprsninfo.style.transform = "translateY(0px)";

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    if(togMenu.style.maxHeight == "0px")
    {
        togMenu.style.maxHeight = "400px"
        togMenu.style.transition = "max-height .3s ease-in-out";
    }
    else{
        togMenu.style.maxHeight = "0px"
    }
});

hamMenu.addEventListener("click", () => {
    if(wrapprsninfo.style.transform == "translateY(0px)")
    {
        wrapprsninfo.style.transform = "translateY(80px)";
    }
    else{
        wrapprsninfo.style.transform = "translateY(0px)";
    }
});


// ************************************Header Quotes, Name and Course Auto Typed**********************
const typedJS = window.Typed;

const typedMotivate = new Typed('#auto-typed', {
    strings: ['BRAVE', 'UNIQUE', 'ACCEPTABLE', 'MINDFUL', 'YOUSELF.'],
    typeSpeed: 150,
    backSpeed: 200,
    loop: true
});
const typedPassionate = new Typed('#auto-typed-passionate', {
    strings: ['SOFTWARE ENGINEER', 'AI ENGINEER', 'FULL STACK DEV', 'AUTOMATION DEV', 'DATA SCIENCE', 'DATA ANALYST'],
    typeSpeed: 150,
    backSpeed: 200,
    loop: true
});


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
            <div  class="imageproj"><img src="${project.image}"/></div>
            <div class="details"> 
                <ul class="techtool-list">
                    ${project.techtools.filter(tool => tool !== undefined)
                        .map(tool => `<li>${tool}</li>`).join('')}
                </ul>
                <h2 class="title">${project.title}</h2>
                <h3 class="desc">${project.desc}</h3>
                <div class="btnlink">
                    <button><a href="${project.githublink}" target="_blank">Code</a></button>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
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

// ************************************End of Javascript Code************************************





