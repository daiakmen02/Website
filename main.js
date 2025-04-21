// Show current date/time in the footer
const footer = document.querySelector("footer");
const now = new Date();
footer.innerHTML += `<p>Last updated: ${now.toLocaleString()}</p>`;

// Light/Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "10px";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  const inputs = form.querySelectorAll("input, textarea");
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "#ccc";
    }
  });
  if (!isValid) {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});

// Load Projects Dynamically
const projectData = [
  {
    title: "Project One : Procrastinator App",
    desc: "It is a time management app that helps users to finish their task on time.",
    link: "#"
  },
];

const projectsSection = document.getElementById("projects");
projectsSection.innerHTML = `<h2>Projects</h2>`;

projectData.forEach((proj) => {
  const projDiv = document.createElement("div");
  projDiv.className = "project";
  projDiv.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.desc}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  projectsSection.appendChild(projDiv);
});
