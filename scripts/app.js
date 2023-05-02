function setupKoiKoiGame() {
	return ReactDOM
		.createRoot(document.getElementById("hanafuda"))
		.render(React.createElement("div", null,
			React.createElement("h1", null, "Koi Koi"),
			React.createElement(KoiKoiGame, null),
		));
}

//window.addEventListener("DOMContentLoaded", function (e) { });