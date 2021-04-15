import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Timeline } from "antd";
import styles from "./index.less";
import Page1 from "./page1";
import Page2 from "./page2";

function Page({ dispatch }) {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <Timeline>
          <Timeline.Item className={styles.item} color={"blue"}>
            1. Start
          </Timeline.Item>
          <Timeline.Item className={styles.item} color={"gray"}>
            2. Company Info
          </Timeline.Item>
          <Timeline.Item className={styles.item} color={"gray"}>
            3. Office Info
          </Timeline.Item>
          <Timeline.Item className={styles.item} color={"gray"}>
            4. Submit Form
          </Timeline.Item>
        </Timeline>
      </div>
      {page === 1 && (
        <div className={styles.survey}>
          <Page1 next={() => setPage(page + 1)} />
        </div>
      )}
      {page === 2 && (
        <div className={styles.survey}>
          <Page2
            next={() => setPage(page + 1)}
            back={() => setPage(page - 1)}
          />
        </div>
      )}
    </div>
  );
}

export default connect()(Page);
