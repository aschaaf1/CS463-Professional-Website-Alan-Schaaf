let aboutSection = document.querySelector("#about");

let aboutMe = document.createElement("div");
aboutMe.classList.add("aboutMe");

let selfie = document.createElement("img");
selfie.classList.add("selfie");
selfie.src = "images/selfie.jpg";
selfie.alt =
  "A professional looking photograph of Alan standing in front of a white background";
aboutMe.append(selfie);

let aboutMeText = document.createElement("p");
aboutMeText.classList.add("aboutMeText");
aboutMeText.innerHTML =
  "Hello my name is Alan Schaaf and I am a current student at Portland State University \
  where I am working on completing my Bachelors of Computer Science. I am in the PCEP \
  internship program and currently working as a software engineering intern at Apex Fintech \
  Solutions here in Portland Oregon.<br><br>At Apex I work on the Trade Processing team. Some of the technologies that I work with on a \
  daily basis are Kafka, Docker, Kubernetes, and Google Cloud Platform. The primary languages I use at Apex are Go, \
  Java, and Javascript. My day to day responsiblities include maintaining our currently deployed financial trading platform, as well as \
  working toward developing a brand new platform from the ground up.<br><br>I have loved my experience working as a software engineering intern, but as \
  I near graduation I am now on the search for a full time software engineering position. Please \
  reach out via the contact page so that we can set up an interview!";
aboutMe.append(aboutMeText);

aboutSection.append(aboutMe);
