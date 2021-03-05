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
      <div className={styles.row}>
        <div className={styles.text}>Service</div>
        <div className={styles.text}>Resource</div>
        <div className={styles.text}>About</div>
      </div>
    </div>
  );
}

export default connect()(Header);
