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

    // let selectedTechtools = proj.techtools[0];
    
    // proj.techtools.forEach(tool => {
    //     const tecttool = document.createElement("button");
    //     tecttool.textContent = tool;
    //     if (tool === selectedTechtools) tecttool.classList.add("selected");

    //     techtoolProj.appendChild(tecttool);
    // });

    titleProj.textContent = proj.title;
    descProj.textContent = proj.desc;

    techtoolProj.innerHTML = `
        <ul class="techtool-list">
            <li>${proj.techtools[0]}</li>
            <li>${proj.techtools[1]}</li>
        </ul>
    `;

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

