document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
  
    const observerOptions = {
      threshold: 0.5 // adjust this value to determine when the project is considered visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Optionally unobserve the element after it has been animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    projects.forEach(project => {
      observer.observe(project);
    });
  });
  