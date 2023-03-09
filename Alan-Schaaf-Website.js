let aboutSection = document.querySelector("#about");

let aboutHeading = document.createElement("h1");
aboutHeading.classList.add("page-heading");
aboutHeading.textContent = "About Me";

let aboutMe = document.createElement("div");
aboutMe.classList.add("aboutMe");
let aboutMeText = document.createElement("p");
let selfie = document.createElement("img");
selfie.classList.add("selfie");
selfie.src = "images/selfie.jpg";
selfie.alt =
  "A professional looking photograph of Alan standing in front of a white background";
aboutMeText.textContent =
  "Hello my name is Alan Schaaf and I am a current student at Portland State University \
  where I am working on completing my Bachelors of Computer Science. I am in the PCEP \
  internship program and currently working as a software engineering intern at Apex Fintech \
  Solutions here in Portland Oregon. I  am part of the Trade Processing team at Apex. My \
  time at Apex has so far been divided between working on many different things, from maintaining \
  our currently deployed applications, to working on creating a brand new platform from the ground \
  up that will be released in the future. The primary languages I have used at Apex have been Java,\
   Go, and Javascript. I have loved my experience working as a software engineering intern, but as\
    I near graduation I am now on the search for a full time software engineering position. Please \
    reach out via the contact form below so that we can set up an interview!";

aboutMe.append(aboutHeading);
aboutMe.append(selfie);
aboutMe.append(aboutMeText);
aboutSection.append(aboutMe);
