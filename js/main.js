//alert("Can you see this?");
/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates 
    unique colors and content for each weekday (Sunday to Saturday) into the page.  
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include 
    the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    Image (of specific coffee)
    alt tag(identifies type of coffee)
    description (of this type of coffee)
    weekday
    color (supporting image)

    The unique color could affect the background HTML, or an element on the page for each day of the week.  
    All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
    
    return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong>${coffee.day}'s Coffee Special</strong>: ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
    </p>`;
}



let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring 
    myDay = urlParams.get("day");
}else{//today's day of week
    myDay = today;
}

//change the string
myDay = parseInt(myDay);


switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color: "#f7e7c8",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some Bubble Tea!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "#d7a96e",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `It's cold, so a caramel latte sounds good!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "#382819",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `Cold brew for when we're serious!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "#1c140c",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip",
            day: "Thurday",
            desc: `Drip coffee to match your drip!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color: "#d8cbc4",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Friday",
            desc: `Endless flavors of blended ice coffee, topped off with whipped cream and syrup!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color: "#967969",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Saturday",
            desc: `Served hot or cold, get a mocha!`
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            color: "#ed7014",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            day: "Sunday",
            desc: `Most popular during full, it's great all year long!`
        };
    break;

    default:
        alert("something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

 //change the background color of the HTML element
document.querySelector("html").style.backgroundColor = coffee.color;