import React, { useState, useMemo } from "react";
import styles from "./styles.module.css";

import classNames from "classnames";

const Button = ({
	icon,
	text,
	defaultStyle,
	onClick,
  type,
	disabled,
}) => {
	const btnClass = classNames(styles["button"], {
		[styles["primary"]]: type === "primary",
	});

	return (
			<button disabled={disabled} className={btnClass}>
				<div className={styles.content}>
					{text && <span>{text}</span>}
          <i className={icon}></i>
				</div>
			</button>
	);
};

export default Button;
