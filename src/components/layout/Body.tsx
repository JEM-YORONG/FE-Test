import styles from "../../App.module.css";
import { ReactComponent as MainImg } from "../../svg/body/pic1.svg";

function Body() {
  return (
    <div className={styles.body}>
      <MainImg className={styles.mainImg} />
    </div>
  );
}

export default Body;
