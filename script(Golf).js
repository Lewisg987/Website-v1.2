function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
}


window.addEventListener('scroll', function() {
    // Change text after scrolling 500 pixels
    var scrollThreshold = 1000; // Adjust this value to change when the text changes
    var changingText = document.getElementById('text');
  
    if (window.pageYOffset >= scrollThreshold) {
      changingText.innerText = " \n Other info"; // Change to the desired text
    } else {
      changingText.innerText = " \n Golf"; // Change to the original text
    }
  });
  