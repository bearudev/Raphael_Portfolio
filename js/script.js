
const scrollUp = document.querySelector("#scroll-up")

window.addEventListener("scroll", function(){
    if(window.scrollY==0){
        //user is at the top of the page; no need to show the back to top button
        scrollUp.classList.remove("up-arrow-show")
        scrollUp.classList.add("up-arrow-hide")
    } else {
        scrollUp.classList.remove("up-arrow-hide")
        scrollUp.classList.add("up-arrow-show")
    }
  });

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
)

const socials = document.querySelector("#socials");

socials.addEventListener("hover", () => {
    console.log("Hover")
    socials.classList.add("animate__animated");
    socials.classList.add("animate__bounce");
})

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  window.addEventListener('load', function () {
    if (window.mobileCheck()){
        alert("This website is not yet fully optimized for mobile phones. It is recommended you use a larger device to see this page.")
    }
    init_projects()
  })


//Projects stuff

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function fetchJSONfromfile(file){
    readTextFile(file, function(text){
        return JSON.parse(text);
    })
}

const projectsContainer = document.getElementsByClassName("projects-container")[0]

async function fetchDataAsync(url) {
    const response = await fetch(url);
    return await response.json();
}

async function init_projects(){
    const projectData = await fetchDataAsync('js/projects.json')

    const randomMoreText = [
        "Curious?",
        "More!",
        "Learn More ♡",
        "Wanna know more?",
        "Click me!"
    ]
    const prjMoreBtnText = randomMoreText[Math.floor(Math.random() * 5)]

    for(var projectIndex of Object.keys(projectData)){
        //Setting up new project card
        const projectCard = document.createElement("div")
        projectCard.classList.add("project-container")
        projectCard.classList.add("project-card")
        projectsContainer.appendChild(projectCard)

        //Adding prj image
        const prjImg = document.createElement("img")
        prjImg.classList.add("project-pic")
        prjImg.src = "./img/prj" + projectIndex + ".png" //Good or not?
        projectCard.appendChild(prjImg)
        
        //Adding title
        const prjTitle = document.createElement("h3")
        prjTitle.classList.add("project-title")
        prjTitle.textContent = projectData[projectIndex]["name"]
        projectCard.appendChild(prjTitle)

        //Adding sub-details
        const prjDetails = document.createElement("ul")
        const prjYear = document.createElement("li")
        const prjType = document.createElement("li")
        const prjLanguage = document.createElement("li")

        const subPrefix = "> "
        prjYear.textContent =subPrefix + projectData[projectIndex]["date"]
        prjType.textContent =subPrefix + projectData[projectIndex]["projectType"] + " PROJECT"
        prjLanguage.textContent =subPrefix + "Made with " + projectData[projectIndex]["languages"]

        prjDetails.appendChild(prjYear)
        prjDetails.appendChild(prjType)
        prjDetails.appendChild(prjLanguage)
        projectCard.appendChild(prjDetails)

        //Adding description
        const prjDescription = document.createElement("p")
        prjDescription.textContent = projectData[projectIndex]["description"]
        prjDescription.classList.add("project-details")
        projectCard.appendChild(prjDescription)

        //Adding learn mode button
        const prjMoreBtn = document.createElement("button")
        
        prjMoreBtn.textContent = prjMoreBtnText
        prjMoreBtn.classList.add("project-more-button")
        projectCard.appendChild(prjMoreBtn)
        var pathToProjectHTML = "./html/prj" + projectIndex + ".html"
        prjMoreBtn.setAttribute("onClick", "location.href=\""+pathToProjectHTML+'"')
    }
}

