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

let project1Desc = document.createElement("p");
project1Desc.classList.add("project-desc");
project1Desc.textContent =
  "A provider end system developed in Java for Chocoholics Anonymous to run reports and bill members for services";
project1.append(project1Desc);

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

let project2Desc = document.createElement("p");
project2Desc.classList.add("project-desc");
project2Desc.textContent =
  "A multithreaded program developed in C that calculates prime numbers using the sieve of Eratosthenes";
project2.append(project2Desc);

let project2Link = document.createElement("a");
project2Link.classList.add("project-link");
project2Link.href = "https://github.com/aschaaf1/lab-3.4/blob/main/primesMT.c";
project2Link.text = "Click here for the code!";
project2.append(project2Link);

projectSection.append(project2);
