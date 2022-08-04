/*
	Name: Lissett Toscano
	Date: 8/3/2022
*/
const loader = document.querySelector(".loader");
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

const buttonText = [
	"Ugh.",
	"omg dad.",
	"you are the worst",
	"seriously",
	"stop it.",
	"please stop",
  	"that was the worst one",
	"hahaha that one was actually funny",
];

async function fetchJoke() {
	loader.classList.remove("hidden");
	jokeButton.classList.remove("hidden");

	const response = await fetch("https://icanhazdadjoke.com/", {
 		headers: {
			Accept: "application/json",
			
		},
   });
     //return response.json();
	const data = response.json();
	loader.classList.add("hidden");
	return data;
	
}

async function handleClick() {
	const { joke } = await fetchJoke();
	jokeHolder.textContent = joke;
	jokeButton.textContent = randomItemFromArray(
		buttonText,
		jokeButton.textContent
	);
	//console.log(joke);
}

function randomItemFromArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item == not) {
		console.log("Ah! we used that one last time, look again");
		return randomItemFromArray(arr, not);
	}
	return item;
}

jokeButton.addEventListener("click", handleClick);
