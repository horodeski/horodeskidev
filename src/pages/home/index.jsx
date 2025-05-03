import React from "react";

import CardMe from "../../components/CardMe";
import Experience from "../../components/Home/experience";
import Projects from "../../components/Home/projects";

import styles from "./styles.module.css";

export default function Home() {
	return (
		<div>
			<div className={styles["container"]}>
				<CardMe />
				<div className={styles["about"]}>
					<div className={styles["description"]}>
						<h1>Building digital experiences through code and design.</h1>
						<p>
							I specialize in blending software engineering and design to create clean, user-friendly digital experiences. With a strong
							background in both development and visual design, I focus on building solutions that are not only functional and efficient
							but also visually engaging — turning ideas into seamless, intuitive experiences.
						</p>
					</div>
					<Experience />
					<Projects />
				</div>
			</div>
		</div>
	);
}
