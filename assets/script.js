const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let nbSlides = slides.length;

// Add dots
for (let i = 0; i < nbSlides; i++) {
	let dots = document.querySelector("#banner > .dots");
	let dot = document.createElement('div')
	dot.classList.add('dot');
	dots.appendChild(dot);
}

// Change slide on click
let arrows = document.querySelectorAll("#banner > .arrow");
let arrowLeft = document.querySelector("#banner > .arrow_left");
let bannerImg = document.querySelector("#banner > .banner-img");
let bannerText = document.querySelector("#banner > p");
let allDots = document.querySelectorAll("#banner > .dots > .dot");
let i = 0;
allDots[i].classList.add('dot_selected');

arrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		allDots[i].classList.remove('dot_selected');
		if (arrow === arrowLeft) {
			if (i === 0) {
				i = nbSlides - 1;
			}
			else {
			i--;
			}
		}
		else {
			if (i === nbSlides - 1) {
				i = 0;
			} else {
			i++;
			}
		}
		console.log(i);
		bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[i]["image"]);
		bannerText.innerHTML = slides[i]["tagLine"];
		allDots[i].classList.add('dot_selected');
	});
});