function shuffle(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var t = deck[i];
		deck[i] = deck[j];
		deck[j] = t;
	}

	return deck;
}

function setupKoiKoiGame() {
	return ReactDOM
		.createRoot(document.getElementById("hanafuda"))
		.render(React.createElement("div", null,
			React.createElement("h1", null, "Koi Koi"),
			React.createElement(KoiKoiGame, null),
		));
}

window.addEventListener("DOMContentLoaded", function (e) { });