import React, { useState } from "react";
import { connect } from "dva";
import { Button } from "antd";
import styles from "./index.less";
import { routerRedux } from "dva/router";

export default connect(({ form }) => ({ form }))(({ next, dispatch, form }) => {
  const back = () => {
    dispatch(routerRedux.push("/signup"));
  };
  console.log(form);
  return (
    <div className={styles.main}>
      <div className={styles.text7} style={{ marginTop: "8rem" }}>
        We are excited for your office sharing experience!
      </div>
      <div className={styles.area}>
        <div
          className={styles.text7}
          style={{ color: "#fff", marginTop: "2rem" }}
        >
          Thank you for completing the sign up.
        </div>
        <div className={styles.text7} style={{ color: "#fff" }}>
          We will reach out to you shortly for a link to the matching
          questionnaire.
        </div>
        <div
          className={styles.row}
          style={{
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <div className={styles.backBtn} style={{ marginRight: "3rem" }}>
            <Button size="large" onClick={back}>
              {"< Back"}
            </Button>
          </div>
          <div className={styles.submitBtn}>
            <Button
              size="large"
              onClick={() => dispatch(routerRedux.push("/"))}
            >
              {"Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
