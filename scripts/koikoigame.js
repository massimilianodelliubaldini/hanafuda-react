const allCards = [
	{ id: "1-L",	key: "1-L",		month: "January",	flower: "Pine",				name: "Crane",			points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Hanafuda_January_Hikari_Alt.svg" },
	{ id: "1-P",	key: "1-P",		month: "January",	flower: "Pine",				name: "Poetry Slip",	points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hanafuda_January_Tanzaku_Alt.svg" },
	{ id: "1-C1",	key: "1-C1",	month: "January",	flower: "Pine",				name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Hanafuda_January_Kasu_1_Alt.svg" },
	{ id: "1-C2",	key: "1-C2",	month: "January",	flower: "Pine",				name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hanafuda_January_Kasu_2_Alt.svg" },
	
	{ id: "2-S",	key: "2-S",		month: "February",	flower: "Plum Blossom",		name: "Bush Warbler",	points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_February_Tane_Alt.svg" },
	{ id: "2-P",	key: "2-P",		month: "February",	flower: "Plum Blossom",		name: "Poetry Slip",	points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Hanafuda_February_Tanzaku_Alt.svg" },
	{ id: "2-C1",	key: "2-C1",	month: "February",	flower: "Plum Blossom",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hanafuda_February_Kasu_1_Alt.svg" },
	{ id: "2-C2",	key: "2-C2",	month: "February",	flower: "Plum Blossom",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hanafuda_February_Kasu_2_Alt.svg" },
	
	{ id: "3-L",	key: "3-L",		month: "March",		flower: "Cherry Blossom",	name: "Curtain",		points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Hanafuda_March_Hikari_Alt.svg" },
	{ id: "3-P",	key: "3-P",		month: "March",		flower: "Cherry Blossom",	name: "Poetry Slip",	points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanafuda_March_Tanzaku_Alt.svg" },
	{ id: "3-C1",	key: "3-C1",	month: "March",		flower: "Cherry Blossom",	name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Hanafuda_March_Kasu_1_Alt.svg" },
	{ id: "3-C2",	key: "3-C2",	month: "March",		flower: "Cherry Blossom",	name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Hanafuda_March_Kasu_2_Alt.svg" },
	
	{ id: "4-S",	key: "4-S",		month: "April",		flower: "Wisteria",			name: "Cuckoo",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Hanafuda_April_Tane_Alt.svg" },
	{ id: "4-P",	key: "4-P",		month: "April",		flower: "Wisteria",			name: "Plain Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Hanafuda_April_Tanzaku_Alt.svg" },
	{ id: "4-C1",	key: "4-C1",	month: "April",		flower: "Wisteria",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Hanafuda_April_Kasu_1_Alt.svg" },
	{ id: "4-C2",	key: "4-C2",	month: "April",		flower: "Wisteria",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Hanafuda_April_Kasu_2_Alt.svg" },
	
	{ id: "5-S",	key: "5-S",		month: "May",		flower: "Iris",				name: "Bridge",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hanafuda_May_Tane_Alt.svg" },
	{ id: "5-P",	key: "5-P",		month: "May",		flower: "Iris",				name: "Plain Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Hanafuda_May_Tanzaku_Alt.svg" },
	{ id: "5-C1",	key: "5-C1",	month: "May",		flower: "Iris",				name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Hanafuda_May_Kasu_1_Alt.svg" },
	{ id: "5-C2",	key: "5-C2",	month: "May",		flower: "Iris",				name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Hanafuda_May_Kasu_2_Alt.svg" },
	
	{ id: "6-S",	key: "6-S",		month: "June",		flower: "Peony",			name: "Butterflies",	points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Hanafuda_June_Tane_Alt.svg" },
	{ id: "6-P",	key: "6-P",		month: "June",		flower: "Peony",			name: "Blue Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Hanafuda_June_Tanzaku_Alt.svg" },
	{ id: "6-C1",	key: "6-C1",	month: "June",		flower: "Peony",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_June_Kasu_1_Alt.svg" },
	{ id: "6-C2",	key: "6-C2",	month: "June",		flower: "Peony",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Hanafuda_June_Kasu_2_Alt.svg" },
	
	{ id: "7-S",	key: "7-S",		month: "July",		flower: "Bush Clover",		name: "Boar",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hanafuda_July_Tane_Alt.svg" },
	{ id: "7-P",	key: "7-P",		month: "July",		flower: "Bush Clover",		name: "Plain Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Hanafuda_July_Tanzaku_Alt.svg" },
	{ id: "7-C1",	key: "7-C1",	month: "July",		flower: "Bush Clover",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hanafuda_July_Kasu_1_Alt.svg" },
	{ id: "7-C2",	key: "7-C2",	month: "July",		flower: "Bush Clover",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Hanafuda_July_Kasu_2_Alt.svg" },
	
	{ id: "8-L",	key: "8-L",		month: "August",	flower: "Susuki Grass",		name: "Moon",			points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Hanafuda_August_Hikari_Alt.svg" },
	{ id: "8-S",	key: "8-S",		month: "August",	flower: "Susuki Grass",		name: "Geese",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Hanafuda_August_Tane_Alt.svg" },
	{ id: "8-C1",	key: "8-C1",	month: "August",	flower: "Susuki Grass",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanafuda_August_Kasu_1_Alt.svg" },
	{ id: "8-C2",	key: "8-C2",	month: "August",	flower: "Susuki Grass",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hanafuda_August_Kasu_2_Alt.svg" },
	
	{ id: "9-S",	key: "9-S",		month: "September",	flower: "Chrysanthemum",	name: "Sake Cup",		points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Hanafuda_September_Tane_Alt.svg" },
	{ id: "9-P",	key: "9-P",		month: "September",	flower: "Chrysanthemum",	name: "Blue Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hanafuda_September_Tanzaku_Alt.svg" },
	{ id: "9-C1",	key: "9-C1",	month: "September",	flower: "Chrysanthemum",	name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hanafuda_September_Kasu_1_Alt.svg" },
	{ id: "9-C2",	key: "9-C2",	month: "September",	flower: "Chrysanthemum",	name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Hanafuda_September_Kasu_2_Alt.svg" },
	
	{ id: "10-S",	key: "10-S",	month: "October",	flower: "Maple",			name: "Deer",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Hanafuda_October_Tane_Alt.svg" },
	{ id: "10-P",	key: "10-P",	month: "October",	flower: "Maple",			name: "Blue Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Hanafuda_October_Tanzaku_Alt.svg" },
	{ id: "10-C1",	key: "10-C1",	month: "October",	flower: "Maple",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Hanafuda_October_Kasu_1_Alt.svg" },
	{ id: "10-C2",	key: "10-C2",	month: "October",	flower: "Maple",			name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hanafuda_October_Kasu_2_Alt.svg" },
	
	{ id: "11-L",	key: "11-L",	month: "November",	flower: "Willow",			name: "Michikaze",		points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Hanafuda_November_Hikari_Alt.svg" },
	{ id: "11-S",	key: "11-S",	month: "November",	flower: "Willow",			name: "Swallow",		points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_November_Tane_Alt.svg" },
	{ id: "11-P",	key: "11-P",	month: "November",	flower: "Willow",			name: "Plain Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hanafuda_November_Tanzaku_Alt.svg" },
	{ id: "11-C",	key: "11-C",	month: "November",	flower: "Willow",			name: "Lightning",		points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Hanafuda_November_Kasu_Alt.svg" },
	
	{ id: "12-L",	key: "12-L",	month: "December",	flower: "Paulownia",		name: "Phoenix",		points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Hanafuda_December_Hikari_Alt.svg" },
	{ id: "12-C1",	key: "12-C1",	month: "December",	flower: "Paulownia",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Hanafuda_December_Kasu_1_Alt.svg" },
	{ id: "12-C2",	key: "12-C2",	month: "December",	flower: "Paulownia",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Hanafuda_December_Kasu_2_Alt.svg" },
	{ id: "12-C3",	key: "12-C3",	month: "December",	flower: "Paulownia",		name: "Chaff",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Hanafuda_December_Kasu_Alt.svg" },
];

const allAreas = [
	{ id: "oppohand",	key: "oppohand",	name: "Opponent's Hand",		owner: "opponent",	canView: false, canPull: false, canPut: false, },
	{ id: "oppocoll",	key: "oppocoll",	name: "Opponent's Collection",	owner: "opponent",	canView: true , canPull: false, canPut: false, },
	{ id: "deck",		key: "deck",		name: "The Deck",				owner: "",			canView: true , canPull: true , canPut: false, },
	{ id: "board",		key: "board",		name: "The Board",				owner: "",			canView: true , canPull: true , canPut: true , },
	{ id: "yourcoll",	key: "yourcoll",	name: "Your Collection",		owner: "you",		canView: true , canPull: false, canPut: true , },
	{ id: "yourhand",	key: "yourhand",	name: "Your Hand",				owner: "you",		canView: true , canPull: true , canPut: false, },
];

function KoiKoiGame() {

	const [gameAreas, setGameAreas] = React.useState(allAreas);

	var addGameArea = function(gameArea) {
		setGameAreas([...gameAreas, gameArea]);
	};

	var addCardToArea = function(card, gameArea) {
		gameArea.addCard(card);
		setGameAreas([gameAreas.filter(a => a.id !== gameArea.id)]);
		setGameAreas([...gameAreas, gameArea]);
	};

	var removeCardFromArea = function(card, gameArea) {
		gameArea.removeCard(card);
		setGameAreas([gameAreas.filter(a => a.id !== gameArea.id)]);
		setGameAreas([...gameAreas, gameArea]);
	};

	var moveCard = function(card, fromArea, toArea) {
		addCardToArea(card, toArea);
		removeCardFromArea(card, fromArea);
	};

	var shuffleDeck = function() {
		for (let i = allCards.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var t = allCards[i];
			allCards[i] = allCards[j];
			allCards[j] = t;
		}

		for (let i = allCards.length - 1; i > 0; i--) {
			addCardToArea(allCards[i], gameAreas.find(f => f.key == "deck"));
		}
	};

	return React.createElement(
		"div", { className: "koikoigame", onLoad: shuffleDeck() }, 
		gameAreas.map((a) => React.createElement(
			GameArea, {
				id: 		a.id,
				key: 		a.key,
				name: 		a.name,
				owner: 		a.owner,
				canView: 	a.canView,
				canPull: 	a.canPull,
				canPut: 	a.canPut,
			}
	)));
}