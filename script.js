const prevBtn = document.querySelector("#control-btn-prev");
const nextBtn = document.querySelector("#control-btn-next");
const imgBtn = document.querySelector(".img-btn");
const about = document.querySelector("#about-paragraph");
const nameContainer = document.querySelector("#name-paragraph");
const job = document.querySelector("#job-paragraph");

const tanyaData = {
  name: "Tanya Sinclair",
  job: "UX Engineer",
  about: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
  img: "./images/image-tanya.jpg",
};

const johnData = {
  name: "John Tarkpor",
  job: "Junior Front-end Developer",
  about: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
  img: "./images/image-john.jpg",
};

prevBtn.addEventListener("click", function () {
  about.textContent = tanyaData.about;
  nameContainer.textContent = tanyaData.name;
  job.textContent = tanyaData.job;
  imgBtn.src = tanyaData.img;
  nextBtn.classList.remove("control-btn-disabled");
  prevBtn.classList.add("control-btn-disabled");
});

nextBtn.addEventListener("click", function () {
  about.textContent = johnData.about;
  nameContainer.textContent = johnData.name;
  job.textContent = johnData.job;
  imgBtn.src = johnData.img;
  nextBtn.classList.add("control-btn-disabled");
  prevBtn.classList.remove("control-btn-disabled");
});
