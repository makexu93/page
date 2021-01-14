/// mouse cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("a, #myBtn");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
  });
})




////scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");



function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


window.onscroll = function() {
  myFunction()
  scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

};






// Progress bar
// When the user scrolls the page, execute myFunction


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};




//smooth scrolling across entire website
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});





////// Tag cloud
const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'Python', 'R', 'SQL',
  'Wordpress', 'Tableau', 'PowerBI',
  'AWS', 'SPSS', 'SAS',
];

if ($(window).width() < 960) { // some code..
  var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: 150,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

  });
} else {
  var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

  });
};



//add loader on button click

$(document).ready(function() {
  var myVar;
  $(".fade-button").click(function() {
    myFunction(this);
  });

  function myFunction(div) {
    $(".loader").toggle();
    $(div).toggle();

  }


});
