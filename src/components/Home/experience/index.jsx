import React from "react";
import Card from "./card";
import styles from "./styles.module.css";

export default function Experience() {
	return (
		<div className={styles["experience"]}>
			<div className={styles["title"]}>
				<i className="ph ph-briefcase"></i>
				<h3>Experiência</h3>
			</div>

			<div className={styles["cards"]}>
				<Card
					imageSrc="/images/soft.png"
					title="Engenheira de Software"
					time="dez de 2023 - o momento · 2 anos"
					isExpandedCard={true}
					subtitle="SoftExpert - Software for Excellence"
					description="Atuo no desenvolvimento de soluções de fluxogramas, automações e formulários no SoftExpert Suite, com foco em performance, usabilidade e inovação. Participei da concepção de produtos, criação de protótipos em React e pesquisa técnica, aplicando conceitos de UX, gamificação e visualização de dados."
					positions={[
						{
							title: "Engenheira de Software II",
							subtitle: "SoftExpert - Software for Excellence",
							time: "ago de 2025 - o momento · 4 meses",
							description:
								"Atuei no desenvolvimento de soluções de fluxogramas e automações no SoftExpert Suite, contribuindo com pesquisa técnica, concepção de produto e padronização de código. Participei de projetos externos, desenvolvi protótipos interativos em React e colaborei em iniciativas de inovação, aplicando conceitos de UX, gamificação e visualização de dados.",
						},
						{
							title: "Engenheira de Software I",
							subtitle: "SoftExpert - Software for Excellence",
							time: "mar de 2025 - ago de 2025 · 6 meses",
							description:
								"Atuei no desenvolvimento de soluções de fluxogramas e automações no SoftExpert Suite, contribuindo com pesquisa técnica, concepção de produto e padronização de código. Participei de projetos externos, desenvolvi protótipos interativos em React e colaborei em iniciativas de inovação, aplicando conceitos de UX, gamificação e visualização de dados.",
						},
						{
							title: "Desenvolvedora de Software",
							subtitle: "SoftExpert - Software for Excellence",
							time: "fev de 2024 - mar de 2025 · 1 ano 2 meses",
							description:
								"Contribuí para a evolução dos produtos de Formulários e BPM, trabalhando com Java, PHP e React em melhorias de performance e usabilidade. Atuei de forma autônoma na criação de soluções visuais com React Flow, integrando frontend e backend para aprimorar a experiência do usuário e a consistência técnica dos módulos.",
						},
						{
							title: "Desenvolvedora Front-End (Estágio)",
							subtitle: "SoftExpert - Software for Excellence",
							time: "dez de 2023 - fev de 2024 · 3 meses",
							description:
								"Durante o estágio, desenvolvi interfaces em React, React Flow e Redux, incluindo uma ferramenta de mapa estratégico. Fui responsável por componentes reutilizáveis, versionamento e refinamento de tarefas em equipe, destacando-me pelo alto número de contribuições e foco em performance e experiência do usuário.",
						},
					]}
				/>
				<Card
					imageSrc="/images/c3.png"
					title="Product and Brand Designer & Front-End Developer"
					time="2023 - 2025"
					subtitle="C3Labs"
					description="Como membro fundadora da C3 Labs, empresa criada para desenvolver soluções de software personalizadas para empresas, atuei de forma multidisciplinar no planejamento, design e desenvolvimento de produtos digitais. Fui responsável pela criação de identidades visuais completas, incluindo logotipos, logomarcas e interfaces, além do design de landing pages e telas voltadas à melhor experiência do usuário, tanto no ambiente web quanto mobile."
				/>
				<Card
					imageSrc="/images/fabrica.svg"
					title="Front-End Developer"
					time="2022 - 2023"
					subtitle="Fábrica de Software - IFC Araquari"
					description="Atuei no design e desenvolvimento de interfaces digitais com foco em usabilidade e performance. Criei protótipos interativos no Figma, desenvolvi interfaces responsivas em Vue.js e participei de pesquisas e testes de usabilidade para aprimorar continuamente a experiência do usuário."
				/>
			</div>
		</div>
	);
}
