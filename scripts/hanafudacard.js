function HanafudaCard({ id, name, month, flower, image, points, isLight, isSeed, isSlip, isPoetry, isBlue, isChaff }) {

	return React.createElement(
		"div", {
			id: id,
			key: id,
			className: "hanafudacard",
			style: {
				height: 204,
				width: 121,
				margin: 2, 
				display: "inline-block"
			},
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