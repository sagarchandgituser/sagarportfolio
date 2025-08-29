 // vant banner starts  here
VANTA.WAVES({
  el: "#vantawave",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0000000, 
  shininess: 23.00,
  waveHeight: 5.00,
  waveSpeed: 0.75,
  zoom: 1.36
})
 // vant banner ends  here

// sticky header js start here
window.addEventListener("scroll", function() {
  const header = document.querySelector(".site_header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
// sticky header js end here

// Always scroll to top when the page loads
window.addEventListener("load", function() {
  window.scrollTo(0, 0);
  history.replaceState(null, "", window.location.pathname); // remove #hash from URL
});
// Always scroll to top when the page loads end here


// JS: reliable show/hide + reset behavior
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.sg_nav_item');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  function clearActive() {
    navItems.forEach(i => i.classList.remove('active'));
  }
  function removeHashFromUrl() {
    // keep search params if any, remove only the hash
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  // Called when user clicks the scroll-to-top button
  function scrollToTop(smooth = true) {
    if (smooth && 'scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
    // Immediately reset URL & nav state and hide the button visually
    removeHashFromUrl();
    clearActive();
    if (scrollTopBtn) scrollTopBtn.classList.remove('show');
  }
  // Show/hide handler for the button
  function handleScroll() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }
  // Attach scroll listener (passive for performance) and call once to set initial state
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  // Attach click for the button
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => scrollToTop(true));
  }
  // Nav items click -> set active on the <li>
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  // On page load (after resources) we want to cancel the browser auto-scroll-to-anchor:
  // jump to top immediately and clean hash + active classes.
  window.addEventListener('load', () => {
    // immediate jump (no smooth) to override default anchor scrolling
    window.scrollTo(0, 0);
    removeHashFromUrl();
    clearActive();
    if (scrollTopBtn) scrollTopBtn.classList.remove('show');
  });
});

// scroll to top js end

// active menu class header

const navItems = document.querySelectorAll(".sg_nav_item");
navItems.forEach(item => {
  item.addEventListener("click", function() {
    navItems.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});

// active menu class header end


// Projects filter script start here

document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab_link");
    const projects = document.querySelectorAll(".project_col"); 
    tabLinks.forEach(tab => {
        tab.addEventListener("click", function () {
            tabLinks.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            let filter = this.textContent.trim(); 
            projects.forEach(project => {
                let tags = [...project.querySelectorAll(".tech_tag")].map(tag => tag.textContent.trim());            
                if (filter === "All" || tags.includes(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});

// tabs script end here

// mobile toggle start here
const toggleBtn = document.querySelector(".toggle_button");
const navWrap = document.querySelector(".sg_nav_wrap");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".sg_nav_link");

function openMenu() {
  navWrap.classList.add("active");
  overlay.classList.add("active");
   document.body.style.overflow = "hidden";
  
}

function closeMenu() {
  navWrap.classList.remove("active");
  overlay.classList.remove("active");
 document.body.style.overflow = ""; 
}

toggleBtn.addEventListener("click", () => {
  if (navWrap.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});
overlay.addEventListener("click", closeMenu);
navLinks.forEach(link => link.addEventListener("click", closeMenu));

// mobile toggle end  here