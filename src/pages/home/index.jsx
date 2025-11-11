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
						<h1>Construindo experiências digitais por meio de código e design.</h1>
						<p>
							Apaixonada por transformar ideias em produtos, sou desenvolvedora full stack com foco em unir tecnologia e experiência do
							usuário. Gosto de aprender, explorar novas soluções e enfrentar desafios que me tirem da zona de conforto. Acredito que
							cada linha de código pode impactar positivamente a vida das pessoas.
						</p>
						<p>
							Minha experiência passa por diferentes etapas do desenvolvimento, da ideia ao produto final, sempre com o propósito de
							criar soluções que facilitem o dia a dia das pessoas. Encaro cada projeto como uma oportunidade de aprender algo novo,
							colaborar com outras mentes criativas e deixar um impacto positivo através da tecnologia.
						</p>
					</div>
					<Experience />
					<Projects />
				</div>
			</div>
		</div>
	);
}
