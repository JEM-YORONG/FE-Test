import styles from "../App.module.css";
import { ReactComponent as SugarRush } from "../svg/body/games/sugarRush.svg";
import { ReactComponent as BadWolf } from "../svg/body/games/badWolf.svg";
import { ReactComponent as DoomOfEgypt } from "../svg/body/games/egypt.svg";
import { ReactComponent as Pirate } from "../svg/body/games/pirate.svg";
import { ReactComponent as Beach } from "../svg/body/games/beach.svg";
import { ReactComponent as Xtreme } from "../svg/body/games/xTreme.svg";
import { ReactComponent as Azteca } from "../svg/body/games/azteca.svg";
import { ReactComponent as Inca } from "../svg/body/games/inca.svg";
import { ReactComponent as Maya } from "../svg/body/games/maya.svg";

function Games() {
  const gamesArray = [
    { name: "Sugar Rush", component: SugarRush },
    { name: "Bad Wolf", component: BadWolf },
    { name: "Doom of Egypt", component: DoomOfEgypt },
    { name: "Pirate", component: Pirate },
    { name: "Beach", component: Beach },
    { name: "Xtreme", component: Xtreme },
    { name: "Azteca", component: Azteca },
    { name: "Inca", component: Inca },
    { name: "Maya", component: Maya },
  ];
  return (
    <div className={styles.gamesContainer}>
      {gamesArray.map((game, index) => (
        <game.component key={index} className={styles.games} />
      ))}
    </div>
  );
}

export default Games;
