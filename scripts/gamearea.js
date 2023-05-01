function GameArea({ id, name, owner, canView, canPull, canPut }) {

	const [cards, setCards] = React.useState([]);

	var addCard = function(card) {
		setCards([...cards, card]);
	};

	var removeCard = function(card) {
		setCards([cards.filter(c => c.id !== card.id)]);
	};

	return React.createElement(
		"section", { 
			id: id,
			key: id,
			className: "gamearea"
		},
		React.createElement("h2", null, name),
		React.createElement("i",  null, "You " + (canView ? "can" : "cannot") + " view " + name + ". "),
		React.createElement("br", null),
		React.createElement("i",  null, "You " + (canPull ? "can" : "cannot") + " pull cards from " + name + ". "),
		React.createElement("br", null),
		React.createElement("i",  null, "You " + (canPut ? "can" : "cannot") + " put cards into " + name + ". "),
		React.createElement("br", null),
		React.createElement(
			"div", { id : "cardsin" + id, }, id == "deck" ? 
				React.createElement("div", { style: { margin: 2, height: 204, width: 121, display: "inline-block", backgroundColor: "black"} }) :
				cards.map((c) => { 
					return canView ? 
						c : 
						React.createElement("div", { style: { margin: 2, height: 204, width: 121, display: "inline-block", backgroundColor: "black"} });
			})
		)
	);
}