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

// ************************************Toggle Menu Navigation Bar************************************
const hamMenu = document.querySelector(".ham-menu");
const togMenu = document.querySelector("ul");
const projname = document.querySelector(".projectsname");

togMenu.style.maxHeight= "0px";
projname.style.transform = "translateY(0px)";

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    if(togMenu.style.maxHeight == "0px")
    {
        togMenu.style.maxHeight = "400px"
        togMenu.style.transition = "max-height 0.3s ease-in-out";
    }
    else{
        togMenu.style.maxHeight = "0px"
    }
});

hamMenu.addEventListener("click", () => {
    if(projname.style.transform == "translateY(0px)")
    {
        projname.style.transform = "translateY(80px)";
    }
    else{
        projname.style.transform = "translateY(0px)";
    }
});

// ************************************Dark Mode************************************
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    darkmode.style.transition = ".5s ease";
});


// ************************************Display All Projects************************************
const projects = document.querySelector("#projectbox");
const isProjectsDetail = document.querySelector(".projectsname");
const isFeatureInclude = document.querySelector(".featureinclude");

if(projects){
    displayProjects();
} else if(isProjectsDetail){
    displayProjectsDetails();
} 

function displayProjects(){
    myprojects.forEach(project => {
        const proj = document.createElement("div");
        proj.classList.add("projbox");
        proj.innerHTML = `
            <img src="${project.image}"/>
            <div class="details"> 
                <h2 class="title">${project.title}</h2>
                <h3 class="desc">${project.desc}</h3>
            </div>
        `;
        projects.appendChild(proj);
    });
}


// ************************************Display All Project Details************************************
function displayProjectsDetails(){
    const proj = JSON.parse(sessionStorage.getItem("selectedProjects"));

    const titleProj = document.querySelector(".title");
    const descProj = document.querySelector(".description");
    const techtoolProj = document.querySelector(".techtools");
    const projImage = document.querySelector(".proj-img");
    const overView = document.querySelector(".overview");
    const date = document.querySelector(".date");
    const team = document.querySelector(".team");
    const category = document.querySelector(".category");

    const featurelist = document.querySelector(".feature-list");

    titleProj.textContent = proj.title;
    descProj.textContent = proj.desc;

    for (let i = 0; i < proj.techtools.length; i++) {
        const techtool = document.createElement("li");
        techtool.textContent = proj.techtools[i];
        techtoolProj.appendChild(techtool);
    }

    projImage.innerHTML = `
        <img src="${proj.image}">
    `;
    
    overView.textContent = proj.projectoverview;
    date.textContent = proj.date;
    team.textContent = proj.team;

    category.textContent = proj.category

    featurelist.innerHTML = `
        <ol>
            <li>• ${proj.featureinclude[0]}</li>
            <li>• ${proj.featureinclude[1]}</li>
            <li>• ${proj.featureinclude[2]}</li>
            <li>• ${proj.featureinclude[3]}</li>
        </ol>
    `;
}


// ************************************Scroll Down Animation************************************
const projName = document.querySelector("header");

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        entries[0].target.classList.add("show");
    }else{
        entries[0].target.classList.remove("show");
    }
}, 
{
    rootMargin: "0px 0px 700px 0px",
    threshold: 0.5
})

observer.observe(projName)

