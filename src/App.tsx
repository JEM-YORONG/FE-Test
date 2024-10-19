import React from "react";
import styles from "./App.module.css";
import Header from "./components/layout/header";
import Body from "./components/layout/Body";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.webView}>
        <p>Mobile View Only...</p>
      </div>
      <div className={styles.mobileView}>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
