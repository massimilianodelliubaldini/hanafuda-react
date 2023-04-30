function GameArea({ id, name, cards, owner, canView, canPull, canPut }) {

	return React.createElement(
		"section", { 
			id: id,
			className: "gamearea"
		},
		React.createElement("h2", null, name),
		React.createElement("i",  null, "You " + (canView ? "can" : "cannot") + " view " + name + "."),
		React.createElement("br", null),
		React.createElement("i",  null, "You " + (canPull ? "can" : "cannot") + " pull cards from " + name + "."),
		React.createElement("br", null),
		React.createElement("i",  null, "You " + (canPut ? "can" : "cannot") + " put cards into " + name + "."),
		React.createElement("br", null),
		React.createElement("div", { id : "cardsin" + id, }, id !== id /* I want to force the else clause. == "deck"*/ ? 
			React.createElement("div", { style: { margin: 2, height: 204, width: 121, display: "inline-block", backgroundColor: "black"} }) :
			cards.map((c) => { 
				return canView ? 
					React.createElement("div", { style : { margin: 2, display: "inline-block" } }, c) : 
					React.createElement("div", { style: { margin: 2, height: 204, width: 121, display: "inline-block", backgroundColor: "black"} });
			}
	)));
}