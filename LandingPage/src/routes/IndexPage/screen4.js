import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux, withRouter } from "dva/router";
import { Button } from "antd";
import styles from "./IndexPage.less";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
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
      style={{
        height: "100vh",
        justifyContent: "flex-start",
      }}
    >
      <div
        className={styles.row}
        style={{ width: "100%", justifyContent: "center" }}
      >
        <div className={styles.block}>
          <img className={styles.icon} src={icon1} />
          <div className={styles.iconText}>
            Sign up as a sublessor or a subtenant{" "}
          </div>
        </div>
        <div className={styles.block}>
          <img className={styles.icon} src={icon2} />
          <div className={styles.iconText}>
            Receive follow-up matchmaking questionaire for our matching
            algorithm{" "}
          </div>
        </div>
        <div className={styles.block}>
          <img className={styles.icon} src={icon3} />
          <div className={styles.iconText}>
            Get notified when we find a match{" "}
          </div>
        </div>
        <div className={styles.block}>
          <img className={styles.icon} src={icon4} />
          <div className={styles.iconText}>
            Communicate with your prospective office partner and negotiate terms{" "}
          </div>
        </div>
        <div className={styles.block}>
          <img className={styles.icon} src={icon5} />
          <div className={styles.iconText}>Office tour / Move in! </div>
        </div>
      </div>

      <div className={styles.row} style={{ width: "100%" }}>
        <div
          className={styles.column}
          style={{
            alignSelf: "flex-start",
            alignItems: "flex-start",
            marginRight: "-40rem",
            marginTop: "12rem",
            marginLeft: "2rem",
            zIndex: 999,
            width: "100%",
          }}
        >
          <div className={styles.text7} style={{ marginRight: "-10rem" }}>
            The Profit-share agreements takes a portion of the rental revenue as
            commission
          </div>
          <div className={styles.text7} style={{ marginRight: "-10rem" }}>
            to help you get matched and manage the logistics of sharing an
            office.
          </div>
          <div
            className={styles.btn}
            style={{
              marginTop: "1rem",
              alignSelf: "flex-start",
              paddingLeft: "0rem",
            }}
          >
            <Button onClick={onPress}>Sign up right now!</Button>
          </div>
        </div>

        <div
          className={styles.column}
          style={{
            alignSelf: "flex-end",
            alignItems: "flex-end",
            paddingRight: "5vw",
            marginTop: "10rem",
          }}
        >
          <div className={styles.backblue}></div>
          <div
            className={styles.text5}
            style={{ marginTop: "15.1rem", marginRight: "-2px" }}
          >
            Management Agreement
          </div>
          <div className={styles.text6}>
            *We are currently launching our BETA version and will offer the free
            service{" "}
          </div>
          <div className={styles.text6}>for a limited period of time.</div>
        </div>
      </div>
    </div>
  );
});
