import styles from "../../App.module.css";
import { ReactComponent as Logo } from "../../svg/logo.svg";
import { ReactComponent as Vector } from "../../svg/vector.svg";
import { ReactComponent as Wallet } from "../../svg/wallet.svg";
import { ReactComponent as Line } from "../../svg/line.svg";
import { ReactComponent as Person } from "../../svg/person.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.group1}>
        <Vector className={styles.vector} />
        <Logo className={styles.logo} />
      </div>
      <div className={styles.group2}>
        <Wallet className={styles.wallet} />
        <p className={styles.balance}>$1990.6</p>
        <Line className={styles.line} />
        <Person className={styles.person} />
      </div>
    </header>
  );
}

export default Header;
