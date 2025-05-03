import styles from '../styles.module.css';

const Card = ({ imageSrc, title, subtitle, time, description }) => {
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
};

export default Card;
