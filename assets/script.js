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

let arrowLeft = document.querySelectorAll(".arrow_left");
arrowLeft[0].addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche gauche")
});

let arrowRight = document.querySelectorAll(".arrow_right");
arrowRight[0].addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche droite")
});