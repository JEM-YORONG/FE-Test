import styles from "../../App.module.css";
import React, { useState } from "react";
import { ReactComponent as MainImg } from "../../svg/body/pic1.svg";
import { ReactComponent as Bell } from "../../svg/body/bell.svg";
import { ReactComponent as Line } from "../../svg/body/line.svg";
import { ReactComponent as Others } from "../../svg/body/nav/others.svg";
import { ReactComponent as Bingo } from "../../svg/body/nav/bingo.svg";
import { ReactComponent as TableGames } from "../../svg/body/nav/tablegames.svg";
import { ReactComponent as Live } from "../../svg/body/nav/live.svg";
import { ReactComponent as Jackpots } from "../../svg/body/nav/jackpots.svg";
import { ReactComponent as New } from "../../svg/body/nav/new.svg";
import { ReactComponent as Fire } from "../../svg/body/nav/fire.svg";
import { ReactComponent as Slots } from "../../svg/body/nav/slots.svg";
import { ReactComponent as Search } from "../../svg/body/nav/search.svg";
import Games from "../games";

function Body() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSelectedCategory("");
  };

  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <div className={styles.divImg}>
          <MainImg className={styles.mainImg} />
        </div>
        <div className={styles.announcement}>
          <Bell className={styles.bell} />
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.groupC} onClick={toggleSearch}>
            <Search className={styles.searchIcon} />
            <p>SEARCH</p>
          </div>
          <Line className={styles.lineC} />
          <div className={styles.category}>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("start")}
            >
              <Fire className={styles.fIcon} />
              <p>START</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("new")}
            >
              <New className={styles.fIcon} />
              <p>NEW</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("slots")}
            >
              <Slots className={styles.fIcon} />
              <p>SLOTS</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("live")}
            >
              <Live className={styles.fIcon} />
              <p>LIVE</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("jackpots")}
            >
              <Jackpots className={styles.fIcon} />
              <p>JACKPOTS</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("tableGames")}
            >
              <TableGames className={styles.fIcon} />
              <p>TABLE GAMES</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("bingo")}
            >
              <Bingo className={styles.fIcon} />
              <p>BINGO</p>
            </div>
            <div
              className={styles.groupC}
              onClick={() => handleCategoryClick("other")}
            >
              <Others className={styles.fIcon} />
              <p>OTHERS</p>
            </div>
          </div>
        </div>
        {showSearch && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search games..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        <Games category={selectedCategory} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Body;
