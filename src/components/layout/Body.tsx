import styles from "../../App.module.css";
import { ReactComponent as MainImg } from "../../svg/body/pic1.svg";

function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <MainImg className={styles.mainImg} />
        <div className={styles.announcement}>
          <p>Announcement</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
