const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.src = "img/logo.png";

const logo2 = document.getElementById("cta-img");
logo2.src = "img/header-img.png";

const logo3 = document.getElementById("middle-img");
logo3.src = "img/mid-page-accent.jpg";

const botto = document.querySelector('.contact h4');
botto.textContent = siteContent.contact["contact-h4"];

const foots = document.querySelector('footer p');
foots.textContent = siteContent.footer.copyright;

const ctathing = document.querySelector('.cta-text h1');
ctathing.textContent = siteContent.cta.h1;

const ctatexty = document.querySelector('.cta-text button');
ctatexty.textContent = siteContent.cta.button;

const topThing = document.querySelectorAll('.text-content h4');

let widget = Array.from(topThing);

widget[0].textContent = siteContent["main-content"]["features-h4"];
widget[1].textContent = siteContent["main-content"]["about-h4"];
widget[2].textContent = siteContent["main-content"]["services-h4"];
widget[3].textContent = siteContent["main-content"]["product-h4"];
widget[4].textContent = siteContent["main-content"]["vision-h4"];

const middleThing = document.querySelectorAll('.text-content p');

let widget2 = Array.from(middleThing);

widget2[0].textContent = siteContent["main-content"]["features-content"];
widget2[1].textContent = siteContent["main-content"]["about-content"];
widget2[2].textContent = siteContent["main-content"]["services-content"];
widget2[3].textContent = siteContent["main-content"]["product-content"];
widget2[4].textContent = siteContent["main-content"]["vision-content"];

let widget3 = [];

let navs = document.querySelectorAll("nav a");
for (i =0; i < navs.length; i++){
  widget3.push(navs[i])
}

widget3[0].textContent = siteContent.nav["nav-item-1"];
widget3[1].textContent = siteContent.nav["nav-item-2"];
widget3[2].textContent = siteContent.nav["nav-item-3"];
widget3[3].textContent = siteContent.nav["nav-item-4"];
widget3[4].textContent = siteContent.nav["nav-item-5"];
widget3[5].textContent = siteContent.nav["nav-item-6"];

const conctactthing = document.querySelectorAll('.contact p');

let widget4 = Array.from(conctactthing);

widget4[0].textContent = siteContent.contact.address;
widget4[1].textContent = siteContent.contact.email;
widget4[2].textContent = siteContent.contact.phone;





