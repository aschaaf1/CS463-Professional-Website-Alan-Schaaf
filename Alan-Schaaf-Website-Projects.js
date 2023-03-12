let projectSection = document.querySelector("#projects");

let project1 = document.createElement("div");
project1.classList.add("project-block");

let project1Image = document.createElement("img");
project1Image.classList.add("project-image");
project1Image.src = "images/chocan.png";
project1Image.alt = "Sample code for the chocan database, written in Java.";
project1.append(project1Image);

let project1Text = document.createElement("h2");
project1Text.classList.add("project-text");
project1Text.textContent = "Chocan Database";
project1.append(project1Text);

let project1Link = document.createElement("a");
project1Link.classList.add("project-link");
project1Link.href = "https://github.com/aschaaf1/chocan/tree/master/src";
project1Link.text = "Click here for the code!";
project1.append(project1Link);

projectSection.append(project1);

let project2 = document.createElement("div");
project2.classList.add("project-block");

let project2Image = document.createElement("img");
project2Image.classList.add("project-image");
project2Image.src = "images/prime.png";
project2Image.alt =
  "Sample code from Optimus Prime, a program that calculates prime number, written in C.";
project2.append(project2Image);

let project2Text = document.createElement("h2");
project2Text.classList.add("project-text");
project2Text.textContent = "Optimuse Prime";
project2.append(project2Text);

let project2Link = document.createElement("a");
project2Link.classList.add("project-link");
project2Link.href = "https://github.com/aschaaf1/lab-3.4/blob/main/primesMT.c";
project2Link.text = "Click here for the code!";
project2.append(project2Link);

projectSection.append(project2);
