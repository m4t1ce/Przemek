export const Offerie = (props) => {
	return (
		<div className="Offerie" key={props.title}>
			<h3 className="OfferieHead">{props.title}</h3>
			<p className="OfferieDesc">{props.desc}</p>
		</div>
	);
};
