// Back to top button //

const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("header");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            backToTop.classList.add("shown");
            
        } else {
            backToTop.classList.remove("shown");
        }
    });
    
});

observer.observe(observerTarget);

// footer dates //

const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentYear").textContent = year;

const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;

// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);