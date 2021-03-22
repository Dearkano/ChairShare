import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button } from "react-bootstrap";
import styles from "./index.css";
import logo from "../assets/logo.png";

function Header({ dispatch }) {
  return (
    <div className={styles.container}>
      <img
        onClick={() => dispatch(routerRedux.push("/"))}
        className={styles.logo}
        src={logo}
      />
      <div className={styles.row} style={{ marginRight: "6vw" }}>
        <div className={styles.text}>Sign up</div>
        <div className={styles.text}>Partners</div>
        <div className={styles.text} style={{ paddingRight: 0 }}>
          Contact us
        </div>
      </div>
    </div>
  );
}

export default connect()(Header);
