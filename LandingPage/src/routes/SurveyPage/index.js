import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Timeline } from "antd";
import styles from "./index.css";
import Page1 from "./page1";

function Page({ dispatch }) {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <Timeline>
          <Timeline.Item className={styles.item} color="blue">
            1. Start
          </Timeline.Item>
          <Timeline.Item className={styles.item} color="gray">
            2. Office information
          </Timeline.Item>
          <Timeline.Item className={styles.item} color="gray">
            3. Rent savings calculator
          </Timeline.Item>
          <Timeline.Item className={styles.item} color="gray">
            4. Optimize your office
          </Timeline.Item>
        </Timeline>
      </div>
      <div className={styles.survey}>
        <Page1 />
      </div>
    </div>
  );
}

export default connect()(Page);
