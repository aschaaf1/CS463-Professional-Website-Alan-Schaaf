let projectSection = document.querySelector("#projects");

let project1 = document.createElement("div");
project1.classList.add("project-block");
let project1Image = document.createElement("img");
project1Image.classList.add("project-image");
project1Image.src = "images/chocan.png";
project1.append(project1Image);

let project1Text = document.createElement("p");
project1Text.classList.add("project-text");
project1Text.textContent = "Chocan Database";
project1.append(project1Text);

let project1Link = document.createElement("a");
project1Link.classList.add("project-link");
let project1LinkText = document.createTextNode("Click here for the code!");
project1Link.appendChild(project1LinkText);
project1Link.href = "https://github.com/weswwolf/jdbc_cs314";
project1.append(project1Link);

projectSection.append(project1);
