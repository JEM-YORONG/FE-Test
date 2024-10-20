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

function Games({ category }: { category: string }) {
  const gamesArray = [
    { name: "Sugar Rush", component: SugarRush, category: "new" },
    { name: "Bad Wolf", component: BadWolf, category: "new" },
    { name: "Doom of Egypt", component: DoomOfEgypt, category: "slots" },
    { name: "Pirate", component: Pirate, category: "live" },
    { name: "Beach", component: Beach, category: "jackpots" },
    { name: "Xtreme", component: Xtreme, category: "tableGames" },
    { name: "Azteca", component: Azteca, category: "bingo" },
    { name: "Inca", component: Inca, category: "new" },
    { name: "Maya", component: Maya, category: "other" },
  ];

  return (
    <div className={styles.gamesContainer}>
      {gamesArray
        .filter(game => category === "start" || category === "" || game.category === category)
        .map((game, index) => (
          <game.component key={index} className={styles.games} />
        ))}
    </div>
  );
}

export default Games;
