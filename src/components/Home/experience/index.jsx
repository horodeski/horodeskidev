import React from "react";

import Card from "./card";

import styles from "./styles.module.css";

export default function Experience() {
	return (
		<div className={styles["experience"]}>
			<div className={styles["title"]}>
				<i class="ph ph-briefcase"></i>
				<h3>Experiência</h3>
			</div>
			<div className={styles["cards"]}>
				<Card
					imageSrc="/images/soft.png"
					title="Software Engineer"
					time="2023 - Atualmente"
					subtitle="SoftExpert - Software for Excellence"
					description="Contribuí ativamente para a criação de novos produtos, trabalhando tanto no desenvolvimento frontend quanto no backend. Ajudei a projetar e construir soluções escaláveis e focadas no usuário usando React, Java, PHP e PostgreSQL, garantindo alto desempenho e capacidade de manutenção em todos os sistemas."
				/>
				<Card
					imageSrc="/images/c3.png"
					title="Product and Brand Designer & Front-End Developer"
					time="2023 - 2025"
					subtitle="C3Labs"
					description="#mudar Como Designer de Produto e Marca, fui responsável por projetar os produtos da empresa, criar logotipos e desenvolver a identidade visual geral. Trabalhei em estreita colaboração com as equipes para garantir uma presença de marca coesa e envolvente, alinhando o design com os objetivos de negócios e as necessidades do usuário."
				/>
				<Card
					imageSrc="/images/fabrica.svg"
					title="Front-End Developer"
					time="2022 - 2023"
					subtitle="Fábrica de Software - IFC Araquari"
					description="Trabalhei como desenvolvedor front-end, especializado em Vue.js, com forte foco em melhorar a experiência do usuário. Minha função envolvia criar interfaces intuitivas, responsivas e acessíveis que se alinhassem com os objetivos do produto e melhorassem a usabilidade geral."
				/>
			</div>
		</div>
	);
}
