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

const nbSlides = slides.length;

// Add dots

for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement('div')
	dot.classList.add('dot');
	document.querySelector("#banner > .dots").appendChild(dot);
}

// Change slide on click

const dots = document.querySelectorAll("#banner > .dots > .dot");

let i = 0;

dots[i].classList.add('dot_selected');

document.querySelectorAll("#banner > .arrow").forEach(arrow => {
	arrow.addEventListener("click", () => {
		dots[i].classList.remove('dot_selected');
		if (arrow === document.querySelector("#banner > .arrow_left")) {
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
		document.querySelector("#banner > .banner-img").setAttribute("src", "./assets/images/slideshow/" + slides[i]["image"]);
		document.querySelector("#banner > p").innerHTML = slides[i]["tagLine"];
		dots[i].classList.add('dot_selected');
	});
});