function toggleAbout() {
  let aboutSection = document.getElementById('about');
  let currentDisplay=window.getComputedStyle(aboutSection).display;
  if(!aboutSection){
    console.error('Could not find the about section');
    return;
  }
  if (currentDisplay === 'none') {
    aboutSection.style.display = 'block';
  } else {
    aboutSection.style.display = 'none';
  } 
}

function toggleSkills(){
  let skillsSection = document.getElementById('skills');
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'flex';
  } else {
    skillsSection.style.display = 'none';
  }
}

function toggleProjects() {
  let projectSection = document.getElementById('projects');
  if (projectSection.style.display === 'none' || projectSection.style.display === '') {
      projectSection.style.display = 'block';
  } else {
      projectSection.style.display = 'none';
  }
}

function toggleRecommendations() {
  let recommendationsSection = document.getElementById('recommendations');
  if (recommendationsSection.style.display === "none" || recommendationsSection.style.display === "") {
      recommendationsSection.style.display = "block";
  } else {
      recommendationsSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("recommend_btn").addEventListener("click", addRecommendation);
});


    
document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript Loaded!"); 
  let addButton = document.getElementById("recommend_btn");

  if (addButton) {
      addButton.addEventListener("click", addRecommendation);
  } else {
      console.error("Button not found!");
  }
});

function addRecommendation() {
  let inputField = document.getElementById("recommendation-input");
  let recommendationText = inputField.value.trim();

  if (recommendationText === "") {
      alert("Please enter a recommendation before submitting.");
      return;
  }

  let recommendationContainer = document.getElementById("recommendation-container");

  let newRecommendation = document.createElement("div");
  newRecommendation.classList.add("recommendation", "card");
  newRecommendation.innerHTML = `<p>${recommendationText}</p>`;

  recommendationContainer.appendChild(newRecommendation);

  
  inputField.value = "";

 
  showPopup(true);
}


document.getElementById("home-icon").addEventListener("click", function(event){
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});


 
function showPopup(show) {
  let popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
}
