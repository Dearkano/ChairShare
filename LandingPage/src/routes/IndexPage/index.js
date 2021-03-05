import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button } from "react-bootstrap";
import styles from "./IndexPage.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

function IndexPage({ dispatch }) {
  const texts = [
    "Companies that would like to sublease their existing excess office space",
    "Brokers, Landlords, Enterprise, Office utilization services",
    "Companies that would like to share/rent an office space with flexibility and competitive price",
  ];
  const [cur, setCur] = useState(0);
  const onPress = () => {
    console.log(111);
    dispatch(routerRedux.push("/survey"));
  };
  return (
    <div className={styles.normal}>
      <div className={styles.row}>
        <img className={styles.logo} src={logo1} />
        <img
          onMouseEnter={() => setCur(0)}
          className={styles.logo}
          style={{ opacity: cur === 0 ? 1 : 0.6 }}
          src={logo2}
        />
        <img
          onMouseEnter={() => setCur(1)}
          className={styles.logo}
          style={{ opacity: cur === 1 ? 1 : 0.6 }}
          src={logo3}
        />
        <img
          onMouseEnter={() => setCur(2)}
          className={styles.logo}
          style={{ opacity: cur === 2 ? 1 : 0.6 }}
          src={logo4}
        />
        <img className={styles.logo} src={logo5} />
      </div>
      <div className={styles.row}>{texts[cur]}</div>
      <div className={styles.row} style={{ marginTop: "1rem" }}>
        <Button onClick={onPress} variant="primary">
          Take The Survey
        </Button>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
