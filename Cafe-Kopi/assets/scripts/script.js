// Function to generate cards from data
function generateDrinkCards() {
	const menuContainer = document.getElementById("drink-catalog");

	drinkMenu.forEach((drink) => {
		const card = document.createElement("div");
		card.className = "card";

		card.innerHTML = `
          <img src="${drink.image}" alt="${drink.name}" />
          <h3>${drink.name}</h3>
          <p class="desc">${drink.desc}</p>
          <p class="price">Rp${drink.price}</p>
      `;

		menuContainer.appendChild(card);
	});
}

function generateFoodCards() {
	const menuContainer = document.getElementById("food-catalog");

	foodMenu.forEach((food) => {
		const card = document.createElement("div");
		card.className = "card";

		card.innerHTML = `
					<img src="${food.image}" alt="${food.name}" />
					<h3>${food.name}</h3>
					<p class="desc">${food.desc}</p>
					<p class="price">Rp${food.price}</p>
			`;

		menuContainer.appendChild(card);
	});
}

// Function to make the transition to each section more smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: "smooth",
			});
		}
	});
});

// JavaScript to toggle the menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
	menu.classList.toggle("active");
});

// Call the function to generate cards when the page loads
window.addEventListener("load", generateDrinkCards);
window.addEventListener("load", generateFoodCards);
