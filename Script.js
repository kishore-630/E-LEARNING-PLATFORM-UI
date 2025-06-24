// Array of course objects containing info to display
const courses = [
  {
    id: 1,
    title: "HTML Tutoriol",
    description: "Learn HTML carsh couse.",
    progress: 30,
    videoUrl: "https://www.bing.com/videos/search?q=Tutorial+HTML&FORM=VRPATC",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Understand core JavaScript concepts.",
    progress: 50,
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
];

// Reference to the course container in HTML
const courseList = document.getElementById("courseList");

// Loop through each course and create its card
courses.forEach(course => {
  // Create outer card div
  const courseCard = document.createElement("div");
  courseCard.className = "card";

  // Add inner HTML content using template literals
  courseCard.innerHTML = `
    <h2>${course.title}</h2>
    <p class="description">${course.description}</p>
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${course.progress}%"></div>
      </div>
      <small>Progress: ${course.progress}%</small>
    </div>
    <iframe src="${course.videoUrl}" allowfullscreen></iframe>
    <a href="#" class="button">Continue Course</a>
  `;

  // Append the created card to the container
  courseList.appendChild(courseCard);
});
