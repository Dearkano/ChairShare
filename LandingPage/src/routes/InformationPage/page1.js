import React, { useState } from "react";
import { connect } from "dva";
import { Button } from "antd";
import styles from "./index.less";
import { routerRedux } from "dva/router";

export default connect(({ form }) => ({ form }))(
  ({ next, go, dispatch, form }) => {
    const checkAndNext = (v) => {
      next();
    };
    const back = () => {
      dispatch(routerRedux.push("/signup"));
    };
    console.log(form);
    return (
      <div className={styles.main}>
        <div className={styles.text1}>Matchmaking Questionaire</div>
        <div
          className={styles.text2}
          style={{ paddingRight: "5rem", width: "100%" }}
        >
          In order to find you a desired office partner, we would need more
          information about your company, and office information.
        </div>
        <div
          className={styles.text2}
          style={{ paddingRight: "5rem", color: "#63b1e2", width: "100%" }}
        >
          All information submitted will NOT be disclosed without your consent.
        </div>

        <div className={styles.text3} style={{ fontSize: "1.5rem" }}>
          The following questionaire will take you about 5 minutes.
        </div>
        <div className={styles.btns}>
          <Button
            size="large"
            style={{ width: "25rem" }}
            onClick={() => next()}
          >
            Let's begin!
          </Button>
          <Button
            size="large"
            type="primary"
            style={{
              width: "15rem",
              backgroundColor: "#e5e5e5",
              borderColor: "#e5e5e5",
            }}
            onClick={() => go(0)}
          >
            I'll fill it out later!
          </Button>
        </div>
        <div
          className={styles.row}
          style={{
            paddingRight: "5rem",
            justifyContent: "flex-end",
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <Button size="large" onClick={back} style={{ marginRight: "2rem" }}>
            {"< Back"}
          </Button>
        </div>
      </div>
    );
  }
);
