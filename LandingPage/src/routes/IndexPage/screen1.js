import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button } from "antd";
import styles from "./IndexPage.less";
import Image1 from "../../assets/h_Black-01.svg";
import ReactGA from "react-ga";
const ga = ReactGA.ga();
export default connect()(function ({ dispatch }) {
  const onPress = () => {
    const params = {
      eventCategory: "Button",
      eventAction: "Click",
      eventLabel: "Start Sign up",
      eventValue: 1,
    };
    ga("send", "event", params);
    dispatch(routerRedux.push("/signup"));
    //document.location.href = "https://forms.gle/hmaZnxa82Depc8dp7";
  };
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
          <Button onClick={onPress}>I want to find a shared office!</Button>
        </div>
      </div>
    </div>
  );
});
