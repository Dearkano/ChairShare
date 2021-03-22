import React, { useState } from "react";
import { connect } from "dva";
import styles from "./IndexPage.less";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

function IndexPage({ dispatch }) {
  return (
    <div className={styles.normal}>
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
