import React from "react";

import CardMe from "../../components/CardMe";
import Experience from "../../components/Home/experience";
import Projects from "../../components/Home/projects";

import styles from "./styles.module.css";

export default function Home() {
	return (
		<div>
			<div className={styles["container"]}>
				<div className={styles["aside"]}>
					<CardMe />
					<div className={styles["stacks-container"]}>
						<h4>Stacks</h4>
						<div className={styles["stacks"]}>
							#java #javascript #react
							#vue #typescript #html
							#node #sass #css
							#python #django #scss
							#php #postgres #ux
							#figma #ui
						</div>
					</div>
				</div>
				<div className={styles["about"]}>
					<div className={styles["description"]}>
						<h1>Construindo experiências digitais por meio de código e design.</h1>
						<p>
							Sou especialista em integrar engenharia de software e design para criar experiências digitais intuitivas e elegantes. Com
							sólida experiência em desenvolvimento e design visual, foco na construção de soluções que sejam não apenas funcionais e
							eficientes, mas também visualmente atraentes — transformando ideias em experiências perfeitas e envolventes
						</p>
					</div>
					<Experience />
					<Projects />
				</div>
			</div>
		</div>
	);
}
