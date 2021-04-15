import React, { useState } from "react";
import { connect } from "dva";
import { Button } from "antd";
import styles from "./index.less";

export default connect(({ form }) => ({ form }))(({ next, dispatch, form }) => {
  const checkAndNext = (v) => {
    dispatch({
      type: "form/update",
      payload: { type: v },
    });
    next();
  };
  console.log(form);
  return (
    <div className={styles.main}>
      <div className={styles.text1}>Chairshare Office Sharer Sign up</div>
      <div className={styles.text2} style={{ paddingRight: "5rem" }}>
        We want the focus of office sharing to be the culture and character of
        the companies. In order for meaningful relationships to form within
        their industry, companies will get to learn more about their products
        and services before they decide if they want to be matched and
        potentially collaborate as partners.
      </div>

      <div className={styles.text3}>You are the...?</div>
      <div className={styles.btns}>
        <Button size="large" onClick={() => checkAndNext("sublessor")}>
          Sublessor
        </Button>
        <Button size="large" onClick={() => checkAndNext("subtenant")}>
          Subtenant
        </Button>
      </div>
    </div>
  );
});
