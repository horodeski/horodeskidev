import React from "react";

import Card from "./card";

import styles from "./styles.module.css";

export default function Experience() {
	return (
		<div className={styles["experience"]}>
			<div className={styles["title"]}>
				<i class="ph ph-briefcase"></i>
				<h3>Experience</h3>
			</div>
			<div className={styles["cards"]}>
				<Card
					imageSrc="/images/soft.png"
					title="Software Engineer"
					time="2023 - Present"
					subtitle="SoftExpert - Software for Excellence"
					description="I actively contributed to the creation of new products, working on both frontend and backend development. I helped design and build scalable, user-focused solutions using React, Java, PHP, and PostgreSQL, ensuring high performance and maintainability across the systems."
				/>
				<Card
					imageSrc="../../../../public/images/c3.png"
					title="Front-End Developer"
					time="2024 - Present"
					subtitle="C3Labs"
					description="I worked as a Frontend Developer, specializing in Vue.js, with a strong focus on enhancing user experience. My role involved creating intuitive, responsive, and accessible interfaces that aligned with product goals and improved overall usability."
					/>
				<Card
					imageSrc="/public/images/c3.png"
					title="Product and Brand Designer"
					time="2023 - Present"
					subtitle="C3Labs"
					description="As a Product and Brand Designer, I was responsible for designing the company's products, creating logos, and developing the overall visual identity. I worked closely with teams to ensure a cohesive and engaging brand presence, aligning design with business goals and user needs."
				/>
			</div>
		</div>
	);
}
