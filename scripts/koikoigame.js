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
	/* jp. Tsukifuda */ 				{ id: "M",		key: "M",		name: "Month",							calculatePoints: (collection) => { return 4;	},														meetsRequirement: (collection) => { return containsFourOfAKind(collection)								}},
	/* jp. Tanzaku */ 					{ id: "P",		key: "5P",		name: "Slips",							calculatePoints: (collection) => { return countCards(collection, (card) => card.isSlip)		- 4;	},	meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isSlip,	5);		}},
	/* jp. Tane */ 						{ id: "S",		key: "5S",		name: "Seeds",							calculatePoints: (collection) => { return countCards(collection, (card) => card.isSeed)		- 4;	},	meetsRequirement: (collection) => { return containsAtLeast(collection, (card) => card.isSeed,	5);		}},
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
	This array assists functions determining cards belonging to a suit.
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

	const [opponentHand, setOpponentHand]				= React.useState([]);
	const [opponentCollection, setOpponentCollection]	= React.useState([]);
	const [opponentScore, setOpponentScore]				= React.useState([]);
	const [opponentSets, setOpponentSets]				= React.useState([]);
	const [deck, setDeck]								= React.useState(shuffleDeck([...allCards]));
	const [board, setBoard]								= React.useState([]);
	const [yourCollection, setYourCollection]			= React.useState([]);
	const [yourHand, setYourHand]						= React.useState([]);
	const [yourScore, setYourScore]						= React.useState([]);
	const [yourSets, setYourSets]						= React.useState([]);
	const [dealer, setDealer]							= React.useState("");
	const [round, setRound]								= React.useState(0);
	const [selectedCard, setSelectedCard]				= React.useState({});
	const [availableMatches, setAvailableMatches]		= React.useState([]);
	const [isTopDeck, setIsTopDeck]						= React.useState(false);
	const [koiKoi, setKoiKoi]							= React.useState("");

	const startGame = () => {
		console.log("startGame");
	};

	const determineDealer = () => {
		console.log("determineDealer");

		/*
			When the game begins, you determine the dealer by each player drawing a card from the deck.
			The player with the earlier month is the dealer (jp. Oya).
			If both players drew the same month, the one with the higher point value is the dealer.
			The dealer has the privilege of taking the first turn (jp. Oya-Ken). 
		*/
	};

	const startRound = () => {
		console.log("startRound");

		// Cards are dealt in this order: 8 to the other player (jp. Ko), 8 to the board, 8 to the dealer.
		var clone = shuffleDeck([...allCards]);
		setOpponentHand(clone.slice(0, 8));
		setBoard(clone.slice(8, 16));
		setYourHand(clone.slice(16, 24));
		setDeck(clone.slice(24, 48));

		setYourCollection([]);
		setYourSets([]);

		setOpponentCollection([]);
		setOpponentSets([]);

		setSelectedCard({});
		setAvailableMatches([]);	
		setKoiKoi("");

		setRound(round + 1);
	};

	const checkForPreRoundSets = () => {
		console.log("checkForPreRoundSets");

		// Check the board first.
		var boardPreSets = [...preRoundSets].filter(s => s.meetsRequirement(board));
		if (boardPreSets.length > 0) {

			endRound("");
		}

		var yourPreSets = [...preRoundSets].filter(s => s.meetsRequirement(yourHand));
		if (yourPreSets.length > 0) {

			setYourSets([...yourPreSets]);
			endRound("you");
		}

		var opponentPreSets = [...preRoundSets].filter(s => s.meetsRequirement(opponentHand));
		if (opponentPreSets.length > 0) {

			setOpponentSets([...opponentPreSets]);
			endRound("opponent");
		}
	};

	const selectCardFromHand = (card) => {
		console.log("selectCardFromHand");

		setSelectedCard(card);
	};

	const evaluateMatches = (card) => {
		console.log("evaluateMatches");

		return board.filter(c => c.month == card.month); // I don't like how this works. See selectCardFromHand.
	};

	const captureMatchingCards = (firstCard, secondCard) => {
		console.log("captureMatchingCards");

		// If 3 cards of the same suit are on the board and you capture with the fourth, you capture them all.
		if (availableMatches.length == 3) {

			var remainingCards = availableMatches.filter(c => c.id !== secondCard.id);

			setYourCollection([...yourCollection, firstCard, secondCard, remainingCards[0], remainingCards[1]]);
			setBoard(board.filter(c => c.id !== secondCard.id && c.id !== remainingCards[0].id && c.id !== remainingCards[1].id));
		}
		else {

			setYourCollection([...yourCollection, firstCard, secondCard]);
			setBoard(board.filter(c => c.id !== secondCard.id));
		}

		/*
			I filter both your hand and the deck, in case you captured with a top deck.
			Filtering a card from a collection that doesn't contain it, predictably, just returns the original collection.
		*/
		setYourHand(yourHand.filter(c => c.id !== firstCard.id));		
		setDeck(deck.filter(c => c.id !== firstCard.id));

		setSelectedCard({});
		setAvailableMatches([]);

		setIsTopDeck(!isTopDeck); // See the useEffect for isTopDeck.

	};

	const surrenderSelectedCard = (card) => {
		console.log("surrenderSelectedCard");

		setBoard([...board, card]);
		setYourHand(yourHand.filter(c => c.id !== card.id));

		setSelectedCard({});
		setAvailableMatches([]);

		setIsTopDeck(!isTopDeck); // See the useEffect for isTopDeck.
	};

	const revealTopDeck = () => {
		console.log("revealTopDeck");

		// I save these variables locally because the state will not update with the new values until the next render.
		var card = deck[0];
		var matches = evaluateMatches(card);
		setSelectedCard(card);
		setAvailableMatches(matches);

		// If there are no matches for the top deck, it is automatically placed on the board.
		if (matches.length == 0) {

			setBoard([...board, card]);
			setDeck(deck.filter(c => c.id !== card.id));

			setSelectedCard({});
			setAvailableMatches([]);

			setIsTopDeck(false);
		}
	};

	const checkForCompletedSets = () => {
		console.log("checkForCompletedSets");

		// We want to find sets you haven't already completed, except for those that calculate their points.
		var completedSets = [...allSets]
			.filter(s => s.meetsRequirement(yourCollection))
			.filter(s => !yourSets.map(y => y.id).includes(s.id) || ["P", "S", "C"].includes(s.id));

		if (completedSets.length > 0) {

			setYourSets([...completedSets]);

			if (koiKoi) {

				endRound("you");
			}
			else {

				callKoiKoi("you");
			}
		}
	};

	const callKoiKoi = (caller) => {
		console.log("callKoiKoi");

		setKoiKoi("you");
	};

	const endRound = (winner) => {
		console.log("endRound");

		var newScore = 0;
		yourSets.forEach(s => newScore += s.calculatePoints(yourCollection));

		setYourScore([...yourScore, newScore]);
		setOpponentScore([...opponentScore, 0]);

		setDealer(winner);
	};

	const endGame = (winner) => {
		console.log("endGame");
	};

	const handleClick = (card) => {
		console.log("handleClick");

		// Is this the top card of the deck?
		if (isTopDeck) {

			// Is the card you clicked in your hand or on the board?
			if (containsCard(yourHand, card.id)) {

				console.log("You cannot select cards in your hand when the selected card is the top deck.");
			}
			else {

				// Is your clicked card an available match?
				if (containsCard(availableMatches, card.id)) {

					// Capture the matching cards.
					captureMatchingCards(selectedCard, card);
				}
				else {

					console.log("Your selected card and clicked card don't match.");
				}
			}
		}
		else {

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

						console.log("Either select a matching card from the board or select another card in hand.");
					}
				}
				else {

					// Selected a new card.
					selectCardFromHand(card);
					setAvailableMatches(evaluateMatches(card));
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

						console.log("Your selected card and clicked card don't match.");
					}
				}
			}
		}
	};

	/*
		Conceptually, there are two major events in every turn: you play from your hand, and you play the top card of the deck.
		After you play from your hand, regardless of its outcome, you must play the top card of the deck.
		After you play from the deck, regardless of its outcome, we check from completed sets, and then the turn ends.

		Altering isTopDeck allows us to trigger the next phase of the turn. 

		UseEffect might be my least favorite part about React. Will look for better implementations of this.
	*/
	React.useEffect(() => {
		if (isTopDeck) {
			revealTopDeck();
		}
		else {
			checkForCompletedSets();
		}
	}, [isTopDeck]);

	// The main render. The first element must be on the same line as return.
	return React.createElement("div", { className: "koikoigame" },
		React.createElement("div", null,
			React.createElement("button", { onClick: startRound }, "Start a round")),
		React.createElement("div",  null,
			React.createElement("span", null, "Round " + round + " / 12")),
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
			React.createElement("div", { className: "hanafudacard", style: { margin: 2, height: 150, width: 92, display: isTopDeck ? "inline-block" : "none" }}, 
						React.createElement("img", { src: deck[0].image }))),

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
						yourScore.map((score) => {
							React.createElement("td", null, score)})),
					React.createElement("tr", null,
						React.createElement("td", null, "Opponent"),
						opponentScore.map((score) => {
							React.createElement("td", null, score)}))))),
	);
}