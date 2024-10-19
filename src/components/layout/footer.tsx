import styles from "../../App.module.css";
import { ReactComponent as Cashier } from "../../svg/cashier.svg";
import { ReactComponent as Ball } from "../../svg/ball.svg";
import { ReactComponent as Casino } from "../../svg/casino.svg";
import { ReactComponent as Invite } from "../../svg/invite.svg";
import { ReactComponent as Star } from "../../svg/star.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.groupf1}>
        <Ball className={styles.fIcon} />
        <p>SPORTS</p>
      </div>
      <div className={styles.groupf1}>
        <Star className={styles.fIcon} />
        <p>FAVORITES</p>
      </div>
      <div className={styles.groupf1}>
        <Invite className={styles.fIcon} />
        <p>INVITE</p>
      </div>
      <div className={styles.groupf1}>
        <Casino className={styles.fIcon} />
        <p>CASINO LIVE</p>
      </div>
      <div className={styles.groupf1}>
        <Cashier className={styles.fIcon} />
        <p>CASHIER</p>
      </div>
    </footer>
  );
}

export default Footer;
