import { useState } from "react";
import styles from "../styles.module.css";

function DefaultCard({ imageSrc, title, subtitle, time, description }) {
	return (
		<div className={styles["card"]}>
			<div className={styles["header"]}>
				<div className={styles["left"]}>
					<img src={imageSrc} alt={title} />
					<div>
						<h4>{title}</h4>
						<span>{subtitle}</span>
					</div>
				</div>
				<div className={styles["time"]}>
					<span>{time}</span>
				</div>
			</div>
			<p>{description}</p>
		</div>
	);
}

const Card = ({ imageSrc, title, subtitle, time, description, isExpandedCard = false, positions = [] }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<DefaultCard imageSrc={imageSrc} title={title} subtitle={subtitle} time={time} description={description} />
			{isExpandedCard && (
				<>
					<div className={styles["expanded-space"]} onClick={() => setIsExpanded(!isExpanded)}>
						<span>{isExpanded ? "Ocultar cargos" : `Ver evolução profissional na ${subtitle}`}</span>
            <i className={`ph ${isExpanded ? "ph-caret-up" : "ph-caret-down"}`}></i>
					</div>
					{isExpanded && (
						<div className={styles["expanded-content"]}>
							{positions.map((pos, index) => (
								<DefaultCard
									key={index}
									imageSrc={imageSrc}
									title={pos.title}
									subtitle={pos.subtitle}
									time={pos.time}
									description={pos.description}
								/>
							))}
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Card;
