/*
	This array contains all 48 standard cards in a Hanafuda deck.
	Each card belongs to suit and a category.
	There are 12 suits, each representing a month and a flower. Each suit contains 4 cards.
	There are 4 categories: Light (jp. Hikari), Seed (jp. Tane), Slip (jp. Tanzaku), and Chaff (jp. Kasu). 
	Not every suit contains one of each category.
	There are 5 Lights, 9 Seeds, 10 Slips, and 24 Chaff.
*/
const allCards = [

	{ id: "1-L",	key: "1-L",		month: "January",	flower: "Pine",				name: "Crane",				points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Hanafuda_January_Hikari_Alt.svg" },
	{ id: "1-P",	key: "1-P",		month: "January",	flower: "Pine",				name: "Poetry Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hanafuda_January_Tanzaku_Alt.svg" },
	{ id: "1-C1",	key: "1-C1",	month: "January",	flower: "Pine",				name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Hanafuda_January_Kasu_1_Alt.svg" },
	{ id: "1-C2",	key: "1-C2",	month: "January",	flower: "Pine",				name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hanafuda_January_Kasu_2_Alt.svg" },
		
	{ id: "2-S",	key: "2-S",		month: "February",	flower: "Plum Blossom",		name: "Bush Warbler",		points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_February_Tane_Alt.svg" },
	{ id: "2-P",	key: "2-P",		month: "February",	flower: "Plum Blossom",		name: "Poetry Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Hanafuda_February_Tanzaku_Alt.svg" },
	{ id: "2-C1",	key: "2-C1",	month: "February",	flower: "Plum Blossom",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hanafuda_February_Kasu_1_Alt.svg" },
	{ id: "2-C2",	key: "2-C2",	month: "February",	flower: "Plum Blossom",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hanafuda_February_Kasu_2_Alt.svg" },
		
	{ id: "3-L",	key: "3-L",		month: "March",		flower: "Cherry Blossom",	name: "Curtain",			points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Hanafuda_March_Hikari_Alt.svg" },
	{ id: "3-P",	key: "3-P",		month: "March",		flower: "Cherry Blossom",	name: "Poetry Slip",		points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: true , isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanafuda_March_Tanzaku_Alt.svg" },
	{ id: "3-C1",	key: "3-C1",	month: "March",		flower: "Cherry Blossom",	name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Hanafuda_March_Kasu_1_Alt.svg" },
	{ id: "3-C2",	key: "3-C2",	month: "March",		flower: "Cherry Blossom",	name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Hanafuda_March_Kasu_2_Alt.svg" },
		
	{ id: "4-S",	key: "4-S",		month: "April",		flower: "Wisteria",			name: "Cuckoo",				points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Hanafuda_April_Tane_Alt.svg" },
	{ id: "4-P",	key: "4-P",		month: "April",		flower: "Wisteria",			name: "Plain Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Hanafuda_April_Tanzaku_Alt.svg" },
	{ id: "4-C1",	key: "4-C1",	month: "April",		flower: "Wisteria",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Hanafuda_April_Kasu_1_Alt.svg" },
	{ id: "4-C2",	key: "4-C2",	month: "April",		flower: "Wisteria",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Hanafuda_April_Kasu_2_Alt.svg" },
		
	{ id: "5-S",	key: "5-S",		month: "May",		flower: "Iris",				name: "Bridge",				points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hanafuda_May_Tane_Alt.svg" },
	{ id: "5-P",	key: "5-P",		month: "May",		flower: "Iris",				name: "Plain Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Hanafuda_May_Tanzaku_Alt.svg" },
	{ id: "5-C1",	key: "5-C1",	month: "May",		flower: "Iris",				name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Hanafuda_May_Kasu_1_Alt.svg" },
	{ id: "5-C2",	key: "5-C2",	month: "May",		flower: "Iris",				name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Hanafuda_May_Kasu_2_Alt.svg" },
		
	{ id: "6-S",	key: "6-S",		month: "June",		flower: "Peony",			name: "Butterflies",		points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Hanafuda_June_Tane_Alt.svg" },
	{ id: "6-P",	key: "6-P",		month: "June",		flower: "Peony",			name: "Blue Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Hanafuda_June_Tanzaku_Alt.svg" },
	{ id: "6-C1",	key: "6-C1",	month: "June",		flower: "Peony",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_June_Kasu_1_Alt.svg" },
	{ id: "6-C2",	key: "6-C2",	month: "June",		flower: "Peony",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Hanafuda_June_Kasu_2_Alt.svg" },
		
	{ id: "7-S",	key: "7-S",		month: "July",		flower: "Bush Clover",		name: "Boar",				points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hanafuda_July_Tane_Alt.svg" },
	{ id: "7-P",	key: "7-P",		month: "July",		flower: "Bush Clover",		name: "Plain Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Hanafuda_July_Tanzaku_Alt.svg" },
	{ id: "7-C1",	key: "7-C1",	month: "July",		flower: "Bush Clover",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hanafuda_July_Kasu_1_Alt.svg" },
	{ id: "7-C2",	key: "7-C2",	month: "July",		flower: "Bush Clover",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Hanafuda_July_Kasu_2_Alt.svg" },
		
	{ id: "8-L",	key: "8-L",		month: "August",	flower: "Susuki Grass",		name: "Moon",				points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Hanafuda_August_Hikari_Alt.svg" },
	{ id: "8-S",	key: "8-S",		month: "August",	flower: "Susuki Grass",		name: "Geese",				points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Hanafuda_August_Tane_Alt.svg" },
	{ id: "8-C1",	key: "8-C1",	month: "August",	flower: "Susuki Grass",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanafuda_August_Kasu_1_Alt.svg" },
	{ id: "8-C2",	key: "8-C2",	month: "August",	flower: "Susuki Grass",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hanafuda_August_Kasu_2_Alt.svg" },
		
	{ id: "9-S",	key: "9-S",		month: "September",	flower: "Chrysanthemum",	name: "Sake Cup",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Hanafuda_September_Tane_Alt.svg" },
	{ id: "9-P",	key: "9-P",		month: "September",	flower: "Chrysanthemum",	name: "Blue Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hanafuda_September_Tanzaku_Alt.svg" },
	{ id: "9-C1",	key: "9-C1",	month: "September",	flower: "Chrysanthemum",	name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hanafuda_September_Kasu_1_Alt.svg" },
	{ id: "9-C2",	key: "9-C2",	month: "September",	flower: "Chrysanthemum",	name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Hanafuda_September_Kasu_2_Alt.svg" },
		
	{ id: "10-S",	key: "10-S",	month: "October",	flower: "Maple",			name: "Deer",				points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Hanafuda_October_Tane_Alt.svg" },
	{ id: "10-P",	key: "10-P",	month: "October",	flower: "Maple",			name: "Blue Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: true , isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Hanafuda_October_Tanzaku_Alt.svg" },
	{ id: "10-C1",	key: "10-C1",	month: "October",	flower: "Maple",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Hanafuda_October_Kasu_1_Alt.svg" },
	{ id: "10-C2",	key: "10-C2",	month: "October",	flower: "Maple",			name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hanafuda_October_Kasu_2_Alt.svg" },
	
	{ id: "11-L",	key: "11-L",	month: "November",	flower: "Willow",			name: "Ono no Michikaze",	points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Hanafuda_November_Hikari_Alt.svg" },
	{ id: "11-S",	key: "11-S",	month: "November",	flower: "Willow",			name: "Swallow",			points: 10,	isLight: false, isSeed: true , isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Hanafuda_November_Tane_Alt.svg" },
	{ id: "11-P",	key: "11-P",	month: "November",	flower: "Willow",			name: "Plain Slip",			points: 5,	isLight: false, isSeed: false, isSlip: true , isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hanafuda_November_Tanzaku_Alt.svg" },
	{ id: "11-C",	key: "11-C",	month: "November",	flower: "Willow",			name: "Lightning",			points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Hanafuda_November_Kasu_Alt.svg" },
		
	{ id: "12-L",	key: "12-L",	month: "December",	flower: "Paulownia",		name: "Phoenix",			points: 20,	isLight: true , isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: false, image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Hanafuda_December_Hikari_Alt.svg" },
	{ id: "12-C1",	key: "12-C1",	month: "December",	flower: "Paulownia",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Hanafuda_December_Kasu_1_Alt.svg" },
	{ id: "12-C2",	key: "12-C2",	month: "December",	flower: "Paulownia",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Hanafuda_December_Kasu_2_Alt.svg" },
	{ id: "12-C3",	key: "12-C3",	month: "December",	flower: "Paulownia",		name: "Chaff",				points: 1,	isLight: false, isSeed: false, isSlip: false, isPoetry: false, isBlue: false, isChaff: true , image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Hanafuda_December_Kasu_Alt.svg" },
];

/*
	This array contains all possible sets (jp. Yaku) that a player can make in Koi Koi. 
	Each set contains a function (meetsRequirement) that allows you to determine if a given collection of cards forms the set.
	Most sets provide a constant number of points, but several provide additional points for each instance of a card type (eg. Poetry Slips, 5 => 1, 6 => 2, etc). 
	Two sets are not listed here as they are only dealt with before the round begins. 
*/
const allSets = [

	/* jp. Gokoh */ 					{ id: "5L",		key: "5L",		name: "Five Lights",					calculatePoints: (collection) => { return 15;	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isLight, 5); }},
	/* jp. Shikoh */ 					{ id: "4L",		key: "4L",		name: "Four Lights",					calculatePoints: (collection) => { return 8; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isLight, 4) && !containsCard(collection, "11-L") }},
	/* jp. Ame-Shikoh */ 				{ id: "4LR",	key: "4LR",		name: "Four Lights with Rain",			calculatePoints: (collection) => { return 7; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isLight, 4) &&  containsCard(collection, "11-L") }},
	/* jp. Sankoh */ 					{ id: "3L",		key: "3L",		name: "Three Lights",					calculatePoints: (collection) => { return 6; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isLight, 3) && !containsCard(collection, "11-L") }},
	/* jp. Tsukimi-Zake */ 				{ id: "MV",		key: "MV",		name: "Moon Viewing",					calculatePoints: (collection) => { return 5; 	},														meetsRequirement: (collection) => { return containsCard(collection, "9-S") && containsCard(collection, "8-L") }},
	/* jp. Hanami-Zake */ 				{ id: "CBV",	key: "CBV",		name: "Cherry Blossom Viewing",			calculatePoints: (collection) => { return 5; 	},														meetsRequirement: (collection) => { return containsCard(collection, "9-S") && containsCard(collection, "3-L") }},
	/* jp. Inoshikachoh */ 				{ id: "BDB",	key: "BDB",		name: "Boar Deer Butterflies",			calculatePoints: (collection) => { return 5; 	},														meetsRequirement: (collection) => { return containsCard(collection, "7-S") && containsCard(collection, "10-S") && containsCard(collection, "6-S") }},
	/* jp. Akatan Aotan no Choufuku */ 	{ id: "AAC",	key: "AAC",		name: "Red and Blue Poetry Slips",		calculatePoints: (collection) => { return 10; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isPoetry,	3) && containsAtLeast(collection, (card) => card.isBlue, 3); }},
	/* jp. Akatan */ 					{ id: "RP",		key: "RP",		name: "Red Poetry Slips",				calculatePoints: (collection) => { return 5; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isPoetry,	3);		}},
	/* jp. Aotan */ 					{ id: "BP",		key: "BP",		name: "Blue Poetry Slips",				calculatePoints: (collection) => { return 5; 	},														meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isBlue,	3);		}},
	/* jp. Tsukifuda */ //				{ id: "M",		key: "M",		name: "Month",							calculatePoints: (collection) => { return 4;	},														meetsRequirement: (collection) => { return containsFourOfAKind(collection)								}},
	/* jp. Tanzaku */ 					{ id: "P",		key: "P",		name: "Slips",							calculatePoints: (collection) => { return countCards(collection, (card) => card.isSlip)		- 4;	},	meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isSlip,	5);		}},
	/* jp. Tane */ 						{ id: "S",		key: "S",		name: "Seeds",							calculatePoints: (collection) => { return countCards(collection, (card) => card.isSeed)		- 4;	},	meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isSeed,	5);		}},
	/* jp. Kasu */ 						{ id: "C",		key: "C",		name: "Chaff",							calculatePoints: (collection) => { return countCards(collection, (card) => card.isChaff)	- 9;	},	meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isChaff,	10);	}},
];

/*
	There are two sets that can be completed just after dealing, before play begins.
	Being dealt all four cards of the same suit (jp. Teshi) awards 6 points and immediately ends the round.
	Being dealt four pairds of cards of matching suit (jp. Kuttsuki) awards 6 points and immediately ends the round.
	However, if the board is dealt either of these sets, the round ends in a stalemate.
	The winner becomes the dealer of the next round. In a stalemate, the dealer remains the same.
*/
const preRoundSets = [

	/* jp. Teshi */ 	{ id: "T",	key: "T",	name: "Four of a Kind",	calculatePoints: (collection) => { return 6;	},	meetsRequirement: (collection) => { return containsFourOfAKind(collection); }},
	/* jp. Kuttsuki */ 	{ id: "K",	key: "K",	name: "Four Pairs",		calculatePoints: (collection) => { return 6;	},	meetsRequirement: (collection) => { return containsFourPairs(collection); }},
];

/*
	This array assists functions in dealing with suits.
*/
const allMonths = [
	"January",	
	"February",	
	"March",		
	"April",		
	"May",		
	"June",		
	"July",		
	"August",	
	"September",
	"October",	
	"November",
	"December",
];

var isEmpty = function(obj) {
	return Object.keys(obj).length == 0;
}

var countCards = function(collection, predicate) {
	return collection.filter(predicate).length;
};							

var containsAtLeast = function(collection, predicate, numInstances) {
	return countCards(collection, predicate) >= numInstances;
};

var containsCard = function(collection, cardId) {
	return containsAtLeast(collection, (card) => card.id == cardId, 1);
};

var containsFourOfAKind = function(collection) {
	for (var month of allMonths) { 
		if (containsAtLeast(collection, (card) => card.month == month, 4)) {
			return true;
		}
	};

	return false;
};

var containsFourPairs = function(collection) {
	var pairs = 0;
	for (var month of allMonths) { 
		if (containsAtLeast(collection, (card) => card.month == month, 2)) {
			pairs += 1;
		}
	};

	return pairs == 4;
};

var shuffleDeck = function(deck) {

	// Fisher-Yates algorithm.
	for (let i = deck.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var t = deck[i];
		deck[i] = deck[j];
		deck[j] = t;
	}

	return deck;
};

/*
	This is the main React component. 

	I opted for a functional component with state hooks b/c it is newer and therefore less likely to be deprecated.
	However, React seems incredibly limiting - but not very protective - with regard to states.

	State variables are not updated until the next render, but nothing prevents youfrom accessing a state 
	before it's updated, steepening the learning curve, habitualizing the use of effect triggers, 
	and impacting readability with non-sequential code.

	Arrays/nested objects as states don't seem to respect functional updates (eg. (n => n + 1) instead of (n + 1)), 
	a limitation which requires that I use more state variables than I would like, increasing code complexity.

	So far React is not engendering a lot of love from me.
*/
function KoiKoiGame() {

	// Game states.
	const [gameStarted, setGameStarted]					= React.useState(false);

	// Round states.
	const [roundStarted, setRoundStarted]				= React.useState(false);
	const [roundNumber, setRoundNumber]					= React.useState(0);
	const [roundWinner, setRoundWinner]					= React.useState("");
	const [dealer, setDealer]							= React.useState("");
	const [scoreMultiplier, setScoreMultiplier]			= React.useState(0);

	// Turn/Player states.
	const [turnStarted, setTurnStarted]					= React.useState(false);
	const [whoseTurn, setWhoseTurn]						= React.useState("");
	const [koiKoiCaller, setKoiKoiCaller]				= React.useState("");
	const [selectedCard, setSelectedCard]				= React.useState({});
	const [availableMatches, setAvailableMatches]		= React.useState([]);
	const [playFromHand, setPlayFromHand]				= React.useState(false);
	const [playFromDeck, setPlayFromDeck]				= React.useState(false);

	// Opponent states.
	const [opponentHand, setOpponentHand]				= React.useState([]);
	const [opponentCollection, setOpponentCollection]	= React.useState([]);
	const [opponentScore, setOpponentScore]				= React.useState([]);
	const [opponentSets, setOpponentSets]				= React.useState([]);

	// Non-owned states.
	const [deck, setDeck]								= React.useState(shuffleDeck([...allCards]));
	const [board, setBoard]								= React.useState([]);

	// Your states.
	const [yourCollection, setYourCollection]			= React.useState([]);
	const [yourHand, setYourHand]						= React.useState([]);
	const [yourScore, setYourScore]						= React.useState([]);
	const [yourSets, setYourSets]						= React.useState([]);

	const startGame = () => {
		console.log("startGame");

		/*
			When the game begins, you determine the dealer by each player drawing a card from the deck.
			The player with the earlier month is the dealer (jp. Oya).
			If both players drew the same month, the one with the higher point value is the dealer.
			The dealer has the privilege of taking the first turn (jp. Oya-Ken). 
		*/
		var yourCard = deck[0];
		var opponentCard = deck[1];

		setYourHand([yourCard]);
		setOpponentHand([opponentCard]);

		if (allMonths.indexOf(yourCard.month) < allMonths.indexOf(opponentCard.month)) {
			setDealer("you");
		}
		else if (allMonths.indexOf(yourCard.month) > allMonths.indexOf(opponentCard.month)) {
			setDealer("opponent");
		}
		else {
			if (yourCard.points > opponentCard.points) {
				setDealer("you");
			}
			else if (yourCard.points < opponentCard.points) {
				setDealer("opponent");
			}
			else {
				setDealer("you"); // Just fail safe and give it to the human.
			}
		}

		setGameStarted(true);
	};

	const startRound = () => {
		console.log("startRound");

		var clone = shuffleDeck([...allCards]);
		var firstEight	= clone.slice(0, 8);
		var secondEight	= clone.slice(8, 16);
		var thirdEight	= clone.slice(16, 24);
		setDeck(clone.slice(24, 48));

		// Dealer doesn't change if this is the first round or the last round ended in stalemate.
		var firstPlayer = (roundWinner == "" || roundWinner == "stalemate") ? dealer : roundWinner;
		var endRoundEarly = false;
		setDealer(firstPlayer);
	
		// Cards are dealt in this order: 8 to the other player (jp. Ko), 8 to the board, 8 to the dealer.
		if (firstPlayer == "you") {
			setOpponentHand(firstEight);
			setBoard(secondEight);
			setYourHand(thirdEight);

			endRoundEarly = checkForPreRoundSets(thirdEight, secondEight, firstEight); // Remember to pass variables in the correct order.
		}
		else {
			setYourHand(firstEight);
			setBoard(secondEight);
			setOpponentHand(thirdEight);

			endRoundEarly = checkForPreRoundSets(firstEight, secondEight, thirdEight); // Remember to pass variables in the correct order.
		}

		if (endRoundEarly) {
			setRoundStarted(false);
		}
		else {
			setWhoseTurn(firstPlayer);
			setRoundWinner("");
			setScoreMultiplier(0);

			setYourSets([]);
			setOpponentSets([]);
		}

		setYourCollection([]);
		setOpponentCollection([]);

		setSelectedCard({});
		setAvailableMatches([]);	
		setKoiKoiCaller("");

		setRoundNumber(roundNumber + 1);	
	};

	const checkForPreRoundSets = (yourEight, boardsEight, opponentsEight) => {
		console.log("checkForPreRoundSets");

		// Check the board first.
		var boardPreSets = [...preRoundSets].filter(s => s.meetsRequirement(boardsEight));
		if (boardPreSets.length > 0) {

			setRoundWinner("stalemate");
			setScoreMultiplier(0);
			return true;
		}

		var yourPreSets = [...preRoundSets].filter(s => s.meetsRequirement(yourEight));
		if (yourPreSets.length > 0) {

			setYourSets([...yourPreSets]);
			setRoundWinner("you");
			setScoreMultiplier(1);
			return true;
		}

		var opponentPreSets = [...preRoundSets].filter(s => s.meetsRequirement(opponentsEight));
		if (opponentPreSets.length > 0) {

			setOpponentSets([...opponentPreSets]);
			setRoundWinner("opponent");
			setScoreMultiplier(1);
			return true;
		}

		return false; 
	};

	const startTurn = () => {
		console.log("startTurn");

		setPlayFromHand(true);
		setPlayFromDeck(true);
	}

	const captureMatchingCards = (firstCard, secondCard) => {
		console.log("captureMatchingCards");

		// If 3 cards of the same suit are on the board and you capture with the fourth, you capture them all.
		if (availableMatches.length == 3) {

			var remainingCards = availableMatches.filter(c => c.id !== secondCard.id);

			if (whoseTurn == "you") {
				setYourCollection([...yourCollection, firstCard, secondCard, remainingCards[0], remainingCards[1]]);
			}
			else {
				setOpponentCollection([...opponentCollection, firstCard, secondCard, remainingCards[0], remainingCards[1]]);
			}

			setBoard(board.filter(c => c.id !== secondCard.id && c.id !== remainingCards[0].id && c.id !== remainingCards[1].id));
		}
		else {

			if (whoseTurn == "you") {
				setYourCollection([...yourCollection, firstCard, secondCard]);
			}
			else {
				setOpponentCollection([...opponentCollection, firstCard, secondCard]);
			}

			setBoard(board.filter(c => c.id !== secondCard.id));
		}

		
		if (playFromHand) {
			if (whoseTurn == "you") {
				setYourHand(yourHand.filter(c => c.id !== firstCard.id));
			}
			else {
				setOpponentHand(opponentHand.filter(c => c.id !== firstCard.id));
			}

			setPlayFromHand(false);	
		}
		else if (playFromDeck) {
			setDeck(deck.filter(c => c.id !== firstCard.id));
			setPlayFromDeck(false);	
		}

		setSelectedCard({});
		setAvailableMatches([]);
	};

	const surrenderSelectedCard = (card) => {
		console.log("surrenderSelectedCard");

		setBoard([...board, card]);

		
		if (playFromHand) {
			if (whoseTurn == "you") {
				setYourHand(yourHand.filter(c => c.id !== card.id));
			}
			else {
				setOpponentHand(opponentHand.filter(c => c.id !== card.id));
			}

			setPlayFromHand(false);	
		}
		else if (playFromDeck) {
			setDeck(deck.filter(c => c.id !== card.id));
			setPlayFromDeck(false);	
		}

		setSelectedCard({});
		setAvailableMatches([]);
	};

	const revealTopDeck = () => {
		console.log("revealTopDeck");

		setSelectedCard(deck[0]);
		setAvailableMatches(board.filter(c => c.month == deck[0].month));
	};

	const checkForCompletedSets = () => {
		console.log("checkForCompletedSets");

		// We want to find sets you haven't already completed, except for those that calculate their points.
		var completedSets = [];
		if (whoseTurn == "you") {
			completedSets = [...allSets]
				.filter(s => s.meetsRequirement(yourCollection))
				.filter(s => !yourSets.map(y => y.id).includes(s.id) || ["P", "S", "C"].includes(s.id));
		}
		else {
			completedSets = [...allSets]
				.filter(s => s.meetsRequirement(opponentCollection))
				.filter(s => !opponentSets.map(o => o.id).includes(s.id) || ["P", "S", "C"].includes(s.id));
		}
		
		if (completedSets.length > 0) {

			var cardsToContinue = 0;
			if (whoseTurn == "you") {
				setYourSets([...yourSets, ...completedSets]);
				cardsToContinue = yourHand.length;
			}
			else {
				setOpponentSets([...opponentSets, ...completedSets]);
				cardsToContinue = opponentHand.length;
			}

			if (koiKoiCaller == "" && cardsToContinue > 0) {
				var calledKoiKoi = decideToKoiKoi(whoseTurn); // Do it you coward.

				if (!calledKoiKoi) {
					setRoundWinner(whoseTurn);
					setScoreMultiplier(1);
				} 
			}
			else {
				if (koiKoiCaller == whoseTurn) {
					setRoundWinner(whoseTurn);
					setScoreMultiplier(1);
				}
				else {
					setRoundWinner(whoseTurn);
					setScoreMultiplier(2);
				}
			}
		}
		else {
			if (yourHand.length == 0 && opponentHand.length == 0) {

				// A rare stalemate condition where nobody completes a single set before running out of cards in hand.
				setRoundWinner("stalemate");
				setScoreMultiplier(0);
			}
		}

		setTurnStarted(false);
	};

	const decideToKoiKoi = (caller) => {
		console.log("decideToKoiKoi");

		if (caller == "you") {
			if (confirm("Do you want to Koi Koi?")) {

				setKoiKoiCaller("you");
				return true;
			}
			else {
				return false;
			}
		}
		else {
			if (opponentHand.length > 3) {

				setKoiKoiCaller("opponent");
				return true;
			}
			else {
				return false;
			}
		}
	};

	const swapWhoseTurn = () => {
		console.log("swapWhoseTurn");

		setWhoseTurn(whoseTurn == "you" ? "opponent" : "you");
	};

	const endTurn = () => {
		console.log("endTurn");

		if (roundWinner == "") {
			swapWhoseTurn();
		}
		else {
			setRoundStarted(false);
		}
	};

	const endRound = () => {
		console.log("endRound");

		/*
			There are two opportunities for score multipliers.
			If you win the round after your opponent called Koi Koi, you double your score. (This is parameterized.)
			If you complete sets totalling 7 points or more, you double your score. (This is calculated here.)
			These effects can stack leading to a quadruple multiplier.
		*/
		var newScore = 0;
		if (roundWinner == "you") {
			yourSets.forEach(s => newScore += s.calculatePoints(yourCollection));

			newScore = newScore * scoreMultiplier * (newScore >= 7 ? 2 : 1);

			setYourScore([...yourScore, newScore]);
			setOpponentScore([...opponentScore, 0]);
		}
		else if (roundWinner == "opponent") {
			opponentSets.forEach(s => newScore += s.calculatePoints(opponentCollection));

			newScore = newScore * scoreMultiplier * (newScore >= 7 ? 2 : 1);

			setYourScore([...yourScore, 0]);
			setOpponentScore([...opponentScore, newScore]);
		}
		else {

			/*
				Don't forget possible stalemates, b/c of either a pre-round set on board, 
				or because no sets were made by either player. 
				In a stalemate, the dealer doesn't change.
			*/
			setYourScore([...yourScore, 0]);
			setOpponentScore([...opponentScore, 0]);
		}

		if (roundNumber == 12) {
			setGameStarted(false);
		}
	};

	const endGame = () => {
		console.log("endGame");

		var yourTotal = 0;
		var opponentTotal = 0;

		yourScore.forEach(s => yourTotal += s);
		opponentScore.forEach(s => opponentTotal += s);

		setYourScore([...yourScore, yourTotal]);
		setOpponentScore([...opponentScore, opponentTotal]);

		if (yourTotal > opponentTotal) {
			console.log("You win!")
		}
		else if (yourTotal < opponentTotal) {
			console.log("Opponent wins!")
		}
		else {
			console.log("Tie game!")
		}
	};

	// This effectively handles all user input.
	const handleClick = (card) => {
		console.log("handleClick");

		// Safety checks.
		if (!gameStarted ) {
			console.log("The game has not started.");
			return;
		}

		if (!roundStarted) {
			console.log("The round has not started.");
			return;
		}

		if (!turnStarted) {
			console.log("The turn has not started.");
			return;
		}

		if (whoseTurn !== "you") {
			console.log("It is not your turn.");
			return;
		}

		// Are we playing from the hand or from the deck?
		if (playFromHand) {

			// Is the card you clicked in your hand or on the board?
			if (containsCard(yourHand, card.id)) {

				// Have you clicked on the selected card?
				if (selectedCard.id == card.id) {

					// Are there available matches with this card?
					if (availableMatches.length == 0) {

						// Surrender the selected card.
						surrenderSelectedCard(card);
					}
					else {

						console.log("You cannot surrender a card with matches.");
					}
				}
				else {

					// Selected a new card.
					setSelectedCard(card);
					setAvailableMatches(board.filter(c => c.month == card.month));
				}	
			}
			else {

				// Is there already a selected card?
				if (selectedCard.id == null) {

					console.log("You have not selected a card yet.");
				}
				else {

					// Is your clicked card an available match?
					if (containsCard(availableMatches, card.id)) {

						// Capture the matching cards.
						captureMatchingCards(selectedCard, card);
					}
					else {

						console.log("You cannot capture cards that don't match.");
					}
				}
			}
		}
		else if (playFromDeck) {

			// Is the card you clicked in your hand or on the board?
			if (containsCard(yourHand, card.id)) {

				console.log("You cannot select cards when playing from the deck.");
			}
			else if (containsCard(board, card.id)) {

				// Is your clicked card an available match?
				if (containsCard(availableMatches, card.id)) {

					// Capture the matching cards.
					captureMatchingCards(selectedCard, card);
				}
				else {

					console.log("You cannot capture cards that don't match.");
				}
			}
			else {

				// Are there available matches with this card?
				if (availableMatches.length == 0) {

					// Surrender the top deck card.
					surrenderSelectedCard(selectedCard);
				}
				else {

					console.log("You cannot surrender a card with matches.");
				}
			}
		}
	};

	// This is a primitive opponent to play against. Its primary purpose is to make the state machine move as intended.
	const handleOpponent = () => {
		console.log("handleOpponent");

		var sortByPoints = function(x, y) { return x.points < y.points ? 1 : x.points > y.points ? -1 : 0; };
		var matches = [];

		if (playFromHand) {	
			var hand = opponentHand.sort(sortByPoints);
			for (var card of hand) {
				matches = board
					.filter(c => c.month == card.month)
					.sort(sortByPoints);
				if (matches.length > 0) {
					captureMatchingCards(card, matches[0]);
					break;
				} 
				else if (hand.indexOf(card) == hand.length - 1) {
					surrenderSelectedCard(card);
				}
			}
		}
		else if (playFromDeck) {
			var card = deck[0];
			matches = board
				.filter(c => c.month == card.month)
				.sort(sortByPoints);
			if (matches.length > 0) {
				captureMatchingCards(card, matches[0]);
			} 
			else {
				surrenderSelectedCard(card);
			}
		}
	};
	
	// UseEffect might be my least favorite part about React. Will look for better implementations of this.
	React.useEffect(() => {
		if (gameStarted) {
			startGame();
		}
		else if (roundNumber == 12) {
			endGame();
		}
	}, [gameStarted]);

	React.useEffect(() => {
		if (gameStarted) {
			if (roundStarted) {
				startRound();
			}
			else {
				endRound();
			}
		}
		else {
			setRoundStarted(false);
		}
	}, [roundStarted]);

	React.useEffect(() => {
		if (gameStarted && roundStarted) {
			if (turnStarted) {
				startTurn();
			}
			else {
				endTurn();
			}
		}
		else {
			setTurnStarted(false);
		}
	}, [turnStarted]);

	React.useEffect(() => {
		if (gameStarted && roundStarted && turnStarted) {	

			if (!playFromHand && !playFromDeck) {
				checkForCompletedSets();
			}
			else if (!playFromHand && playFromDeck) {
				revealTopDeck();
			}
		}
		else {
			setPlayFromHand(false);
			setPlayFromDeck(false);
		}
	}, [playFromHand, playFromDeck]);

	React.useEffect(() => {
		if (gameStarted && roundStarted && turnStarted) {
			if (whoseTurn == "opponent") {
				if (!playFromHand && playFromDeck) {
					handleOpponent();
				}
				else if (playFromHand && playFromDeck) {
					handleOpponent();
				}
			}
		}
	}, [playFromHand, playFromDeck]);

	React.useEffect(() => {
		if (gameStarted && roundStarted && !turnStarted) {	
			setTurnStarted(true);
		}
	}, [roundStarted, whoseTurn]);

	// The main render. The first element must be on the same line as return.
	return React.createElement("div", { className: "koikoigame" },
			React.createElement("div", null,
				React.createElement("span", null, "Round " + roundNumber + " / 12"),
				React.createElement("button", { onClick: () => setGameStarted(true), className: "button", style: { display: !gameStarted ?  "inline-block" : "none" }}, "Start a New Game"),
				React.createElement("button", { onClick: () => setRoundStarted(true), className: "button", style: { display: gameStarted && !roundStarted ?  "inline-block" : "none" }}, "Start a New Round")),
			
			React.createElement("h2", null, "Opponent's Hand"),
			React.createElement("div", { id: "opponenthand" }, 
				opponentHand.map((card) => 
					React.createElement("div", { style: { margin: 2, height: 150, width: 92, display: "inline-block", backgroundColor: "black"} }))),

			React.createElement("h2", null, "Opponent's Collection"),
			React.createElement("div", { id: "opponentcollection" }, 
				opponentCollection.map((card) => 
					React.createElement("div", { className: "hanafudacard", style: { height: 150, width: 92, margin: 2, display: "inline-block" }}, 
						React.createElement("img", { src: card.image })))),

			React.createElement("h2", null, "The Deck"),
			React.createElement("div", { id: "deck" }, 
				React.createElement("div", { style: { margin: 2, height: 150, width: 92, display: "inline-block", backgroundColor: "black"} }),
				React.createElement("div", { className: "hanafudacard", style: { margin: 2, height: 150, width: 92, display: !playFromHand && playFromDeck ? "inline-block" : "none" }}, 
						React.createElement("button", { onClick: () => handleClick(deck[0]), style: { height: "inherit", width: "inherit", padding: 0, border: "none", background: "none" }},
							React.createElement("img", { src: deck[0].image })))),

			React.createElement("h2", null, "The Board"),
			React.createElement("div", { id: "board" }, 
				board.map((card) => 
					React.createElement("div", { className: "hanafudacard", style: { height: 150, width: 92, margin: 2, display: "inline-block" }}, 
						React.createElement("button", { onClick: () => handleClick(card), style: { height: "inherit", width: "inherit", padding: 0, border: "none", background: "none" }},
							React.createElement("img", { src: card.image }))))),

			React.createElement("h2", null, "Your Collection"),
			React.createElement("div", { id: "yourcollection" }, 
				yourCollection.map((card) => 
					React.createElement("div", { className: "hanafudacard", style: { height: 150, width: 92, margin: 2, display: "inline-block" }}, 
						React.createElement("img", { src: card.image })))),

			React.createElement("h2", null, "Your Hand"),
			React.createElement("div", { id: "yourhand" }, 
				yourHand.map((card) => 
					React.createElement("div", { className: "hanafudacard", style: { height: 150, width: 92, margin: 2, display: "inline-block" }},
						React.createElement("button", { onClick: () => handleClick(card), style: { height: "inherit", width: "inherit", padding: 0, border: "none", background: "none" }},
							React.createElement("img", { src: card.image }))))),

			React.createElement("h2", null, "Scores"),
			React.createElement("div", { id: "scores" }, 
				React.createElement("table", null,
					React.createElement("tbody", null,
						React.createElement("tr", null,
							React.createElement("td", null, "You"),
							yourScore.map((score) => 
								React.createElement("td", null, score))),
						React.createElement("tr", null,
							React.createElement("td", null, "Opponent"),
							opponentScore.map((score) => 
								React.createElement("td", null, score)))))),

			React.createElement("h2", null),
			React.createElement("button", { onClick: () => {
				var d = document.getElementById("debug");
				d.style.display = d.style.display == "none" ? "block" : "none";
			}}, "Toggle Debug Mode"),
			React.createElement("div", { id: "debug", style: { display: "block" }},
				React.createElement("h2", null, "Debug Mode"),
				React.createElement("h3", null, "Game States"),
				React.createElement("div", null, "gameStarted: " 		+ gameStarted.toString()),
				React.createElement("h3", null, "Round States"),
				React.createElement("div", null, "roundStarted: " 		+ roundStarted.toString()),
				React.createElement("div", null, "roundNumber: " 		+ roundNumber),
				React.createElement("div", null, "roundWinner: "		+ roundWinner),
				React.createElement("div", null, "scoreMultiplier: "	+ scoreMultiplier),
				React.createElement("div", null, "dealer: " 			+ dealer),
				React.createElement("h3", null, "Turn/Player States"),
				React.createElement("div", null, "turnStarted: " 		+ turnStarted.toString()),
				React.createElement("div", null, "whoseTurn: " 			+ whoseTurn),
				React.createElement("div", null, "koiKoiCaller: " 		+ koiKoiCaller),
				React.createElement("div", null, "selectedCard: " 		+ (isEmpty(selectedCard) ? "none" : selectedCard.month + " " + selectedCard.name)),
				React.createElement("div", null, "availableMatches: " 	+ availableMatches.map(s => " " + s.month + " " + s.name)),
				React.createElement("div", null, "playFromHand: " 		+ playFromHand.toString()),
				React.createElement("div", null, "playFromDeck: " 		+ playFromDeck.toString()),
				React.createElement("h3", null, "Opponent States"),
				React.createElement("div", null, "opponentHand: " 		+ opponentHand.map(s => " " + s.month + " " + s.name)),
				React.createElement("div", null, "opponentCollection: " + opponentCollection.map(s => " " + s.month + " " + s.name)),
				React.createElement("div", null, "opponentScore: " 		+ opponentScore.map(s => " " + s)),
				React.createElement("div", null, "opponentSets: " 		+ opponentSets.map(s => " " + s.name)),
				React.createElement("h3", null, "Non-owned States"),
				React.createElement("div", null, "deck: " 				+ deck.length + " cards remaining"),
				React.createElement("div", null, "board: " 				+ board.map(s => " " + s.month + " " + s.name)),
				React.createElement("h3", null, "Your States"),
				React.createElement("div", null, "yourCollection: " 	+ yourCollection.map(s => " " + s.month + " " + s.name)),
				React.createElement("div", null, "yourHand: " 			+ yourHand.map(s => " " + s.month + " " + s.name)),
				React.createElement("div", null, "yourScore: " 			+ yourScore.map(s => " " + s)),
				React.createElement("div", null, "yourSets: " 			+ yourSets.map(s => " " + s.name)),
				),
	);
}
