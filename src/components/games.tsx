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

function Games({ category, searchTerm }: { category: string, searchTerm: string }) {
  const gamesArray = [
    { name: "Sugar Rush", component: SugarRush, category: "new" },
    { name: "Big Bad Wolf", component: BadWolf, category: "new" },
    { name: "Book of Egypt", component: DoomOfEgypt, category: "slots" },
    { name: "Pirates Power", component: Pirate, category: "live" },
    { name: "Beach Life", component: Beach, category: "jackpots" },
    { name: "Crocodile Blitz Xtreme FB", component: Xtreme, category: "tableGames" },
    { name: "Azteca", component: Azteca, category: "bingo" },
    { name: "Inca Jackpot", component: Inca, category: "new" },
    { name: "Maya Jackpot", component: Maya, category: "other" },
  ];

  return (
    <div className={styles.gamesContainer}>
      {gamesArray
        .filter(game => 
          (category === "start" || category === "" || game.category === category) &&
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((game, index) => (
          <game.component key={index} className={styles.games} />
        ))}
    </div>
  );
}

export default Games;
