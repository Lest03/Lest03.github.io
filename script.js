const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting); // Log the status of the intersection
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      entry.target.classList.remove('animate-out');
    } else {
      entry.target.classList.add('animate-out');
      entry.target.classList.remove('animate');
    }
  });
};

// Create an intersection observer to detect when each service item is in view
document.addEventListener('DOMContentLoaded', function() {
	const serviceItems = document.querySelectorAll('.service-item');

	// Callback function to handle when the item is in view
	const observerCallback = (entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('animate');  // Add 'animate' class when in view
		  observer.unobserve(entry.target); // Stop observing after it enters the viewport
		}
	  });
	};

	// IntersectionObserver options
	const observerOptions = {
	  root: null,  // Use the viewport as the root
	  rootMargin: '0px',
	  threshold: 0.5  // Trigger the animation when 50% of the item is in view
	};

	// Create an IntersectionObserver instance
	const observer = new IntersectionObserver(observerCallback, observerOptions);

	// Observe each service item
	serviceItems.forEach(item => {
	  observer.observe(item);
	});
  });

document.addEventListener('DOMContentLoaded', function() {
  const serviceItems = document.querySelectorAll('.service-item');

  // Callback function to handle when the item is in view or out of view
  const observerCallback = (entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		// Item is in view, so we add the 'animate' class (fade-in effect)
		entry.target.classList.add('animate');
		entry.target.classList.remove('animate-out'); // Ensure fade-out class is removed when it's in view
		
		observer.unobserve(entry.target); // Stop observing when item enters the viewport
	  } else {
		// Item is out of view, so we add the 'animate-out' class (fade-out effect)
		entry.target.classList.add('animate-out');
		entry.target.classList.remove('animate'); // Remove the fade-in animation class
		
		observer.observe(entry.target); // Start observing again in case the item comes back into view
	  }
	});
  };

  // IntersectionObserver options
  const observerOptions = {
	root: null,  // Use the viewport as the root
	rootMargin: '0px',
	threshold: 0.5  // Trigger the animation when 50% of the item is in view
  };

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each service item
  serviceItems.forEach(item => {
	observer.observe(item);
  });
});

// JavaScript to handle the animation trigger when projects come into view
document.addEventListener("DOMContentLoaded", () => {
const projectItems = document.querySelectorAll('.project-item');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
	if (entry.isIntersecting) {
	  // Add the 'visible' class to trigger the animation
	  entry.target.classList.add('visible');
	  observer.unobserve(entry.target); // Stop observing after it's visible
	}
  });
}, {
  threshold: 0.5 // Trigger when 50% of the item is in view
});

// Observe each project item
projectItems.forEach(item => observer.observe(item));
});



