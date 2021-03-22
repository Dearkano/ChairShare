import React, { useState } from "react";
import { Button } from "antd";
import styles from "./IndexPage.less";
import Image1 from "../../assets/h_Black-01.svg";
export default function () {
  return (
    <div className={styles.main}>
      <img className={styles.blackh} src={Image1} />
      <div
        className={styles.column}
        style={{
          alignSelf: "flex-end",
          alignItems: "flex-end",
          paddingRight: "5vw",
        }}
      >
        <div className={styles.backblue}></div>
        <div className={styles.text1}>Do you want to share</div>
        <div className={styles.text1}>your office?</div>
        <div className={styles.text2} style={{ marginTop: "9.3rem" }}>
          We will find your ideal
        </div>
        <div className={styles.text2}>office partners!</div>
        <div className={styles.btn} style={{ marginTop: "3rem" }}>
          <Button>I want to find a shared office!</Button>
        </div>
      </div>
    </div>
  );
}
