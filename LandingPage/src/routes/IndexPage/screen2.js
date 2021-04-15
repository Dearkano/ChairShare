import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button } from "antd";
import styles from "./IndexPage.less";
import Image1 from "../../assets/h-h_Black.svg";
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
    <div
      className={styles.main}
      style={{ justifyContent: "flex-start", height: "70vh" }}
    >
      <div className={styles.hh2}>
        <img className={styles.blackhh} src={Image1} />
      </div>
      <div
        className={styles.column}
        style={{
          alignSelf: "flex-start",
          alignItems: "flex-start",
          justifySelf: "flex-start",
          paddingLeft: "3vw",
          width: "100%",
        }}
      >
        <div
          className={styles.backblue}
          style={{
            marginBottom: "-12vh",
            marginLeft: "5vw",
          }}
        ></div>
        <div className={styles.text3}>
          We match <span style={{ color: "#fff" }}>existing excess office</span>{" "}
          spaces with companies to form{" "}
        </div>
        <div className={styles.text3}>
          <span style={{ color: "#fff" }}>meaningful relationships</span> within
          industries.
        </div>
        <div
          className={styles.row}
          style={{
            width: "100%",
            justifyContent: "space-between",
            paddingLeft: "3vw",
            paddingRight: "8vw",
            marginTop: "10vh",
          }}
        >
          <div
            className={styles.btn}
            style={{ marginTop: "1rem", alignSelf: "flex-end" }}
          >
            <Button onClick={onPress}>Get matched right now!</Button>
          </div>
          <div className={styles.column} style={{ justifySelf: "flex-end" }}>
            <div className={styles.text4}>
              Transition to{" "}
              <span style={{ fontWeight: 500 }}>remote working</span> left many
              office spaces unused.{" "}
            </div>
            <div className={styles.text4}>
              We aim to create{" "}
              <span style={{ fontWeight: 500 }}>flexible monthly terms</span>{" "}
              for enterprises to{" "}
            </div>
            <div className={styles.text4}>
              share office spaces to
              <span style={{ fontWeight: 500 }}>
                alliviate financial burdens
              </span>{" "}
              and <span style={{ fontWeight: 500 }}>create</span>{" "}
            </div>
            <div className={styles.text4}>
              <span style={{ fontWeight: 500 }}>
                collaboration opportunities.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
