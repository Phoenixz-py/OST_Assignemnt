// Animation - Fade In Effect
const sections = document.querySelectorAll("section");

function fadeInSections() {
  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add("fade-in");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", fadeInSections);
window.addEventListener("load", fadeInSections);

function fetchSubSegmentData() {
    // Fetch data from the URL
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Get the sub-segment elements
        const subSegments = document.querySelectorAll('.segment ul');
  
        // Loop through each sub-segment element
        subSegments.forEach((subSegment, index) => {
          // Get the corresponding data items
          const subSegmentData = data.slice(index * 7, index * 7 + 7);
  
          // Create and append list items to the sub-segment
          subSegmentData.forEach(subSegmentItem => {
            const listItem = document.createElement('li');
            listItem.textContent = subSegmentItem.title;
            subSegment.appendChild(listItem);
          });
        });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
  
  // Call the function to fetch and add data to the sub-segments
  fetchSubSegmentData();

