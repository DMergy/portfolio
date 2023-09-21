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

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentYear").textContent = year;

const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;

// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);