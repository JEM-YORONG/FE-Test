import styles from "../../App.module.css";
import { ReactComponent as MainImg } from "../../svg/body/pic1.svg";
import { ReactComponent as Bell } from "../../svg/body/bell.svg";
import { ReactComponent as Ball } from "../../svg/ball.svg";
import { ReactComponent as Line } from "../../svg/body/line.svg";

function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <MainImg className={styles.mainImg} />
        <div className={styles.announcement}>
          <Bell className={styles.bell} />
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.groupC}>
            <Ball className={styles.fIcon} />
            <p>SEARCH</p>
          </div>
          <Line className={styles.lineC} />
          <div className={styles.category}>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>START</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>NEW</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>SLOTS</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>LIVE</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>JACKPOTS</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>TABLE GAMES</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>BINGO</p>
            </div>
            <div className={styles.groupC}>
              <Ball className={styles.fIcon} />
              <p>OTHERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
