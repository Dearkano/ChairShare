import { connect } from "dva";
import React, { useEffect } from "react";
import Top from "./top";
import styles from "./index.less";
import Image1 from "../../assets/h_Black-01.svg";

export default connect(({ matching, loading }) => ({
  matching,
  loading: loading.global,
}))(({ dispatch, matching, loading }) => {
  return (
    <div className={styles.column}>
      <div className={styles.bluearea}>
        <div className={styles.text}>You've got a match!</div>
      </div>

      <div
        className={styles.row}
        style={{
          height: "7rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <img className={styles.blackchair} src={Image1} />
        <div className={styles.text1}>
          Here are some information to get you to learn more about each other!
        </div>
        <div className={styles.text2}>{matching.type}</div>
        <div
          className={styles.column}
          style={{
            borderRight: "#63B1E2 solid 2px",
            height: "70%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div className={styles.text3}>{matching.name}</div>
          <div className={styles.text4}>{matching.companyName}</div>
        </div>
        <div className={styles.logo}>
          <img style={{ width: "12rem", height: "5rem" }} src={matching.logo} />
        </div>
      </div>
    </div>
  );
});
