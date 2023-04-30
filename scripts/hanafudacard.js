function HanafudaCard({ id, name, month, flower, image, points, isLight, isSeed, isSlip, isPoetry, isBlue, isChaff }) {

	return React.createElement(
		"div", {
			style: {
				height: 204,
				width: 121,
			},
			id: id,
			name: name,
			month: month,
			flower: flower,
			points: points,
			isLight: isLight,
			isSeed: isSeed,
			isSlip: isSlip,
			isPoetry: isPoetry,
			isBlue: isBlue,
			isChaff: isChaff,
		},
		React.createElement("img", { src: image })
	);
}