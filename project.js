const projectData = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      details: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      code: "<h1>Sagar</h1>",
      preview: "<h1>Goru</h1>"
    },
    // Add more projects here
  ];
  
  const projectTitleElement = document.getElementById("project-title");
  const projectDescriptionElement = document.getElementById("project-description");
  const projectDetailsElement = document.getElementById("project-details");
  const projectFeaturesElement = document.getElementById("project-features");
  const sourceCodeTextarea = document.getElementById("source-code");
  const copyCodeButton = document.getElementById("copy-code");
  const previewIframe = document.getElementById("preview");
  
  // Render project data
  projectTitleElement.textContent = projectData[0].title;
  projectDescriptionElement.textContent = projectData[0].description;
  projectDetailsElement.textContent = projectData[0].details;
  projectFeaturesElement.innerHTML = projectData[0].features.map(feature => `<li>${feature}</li>`).join("");
  sourceCodeTextarea.value = projectData[0].code;
  previewIframe.srcdoc = projectData[0].preview;
  
  // Add event listener for copy code button
  copyCodeButton.addEventListener("click", () => {
    sourceCodeTextarea.select();
    document.execCommand("copy");
  });

// responsive
  // utility functions
if(!Util) function Util () {};

Util.hasClass = function(el, className) {
  return el.classList.contains(className);
};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

