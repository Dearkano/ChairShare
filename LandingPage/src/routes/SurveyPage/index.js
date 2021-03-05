import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Timeline } from "antd";
import styles from "./index.less";
import Page1 from "./page1";
import Page5 from "./page5";

function Page({ dispatch }) {
  const [page, setPage] = useState(2);
  return (
    <div className={styles.container}>
      {page === 2 && <Page5 />}
      {page !== 2 && (
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
      )}
      {page !== 2 && (
        <div className={styles.survey}>
          <Page1 next={() => setPage(page + 1)} />
        </div>
      )}
    </div>
  );
}

export default connect()(Page);
