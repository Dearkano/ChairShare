import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Timeline } from "antd";
import styles from "./index.less";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

function Page({ dispatch }) {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      (
      <div className={styles.timeline}>
        <Timeline>
          <Timeline.Item
            className={styles.item}
            color={page === 1 ? "blue" : "gray"}
          >
            1. Start
          </Timeline.Item>
          <Timeline.Item
            className={styles.item}
            color={page === 2 ? "blue" : "gray"}
          >
            2. Office information
          </Timeline.Item>
          <Timeline.Item
            className={styles.item}
            color={page === 3 ? "blue" : "gray"}
          >
            3. Rent savings calculator
          </Timeline.Item>
          <Timeline.Item
            className={styles.item}
            color={page === 4 ? "blue" : "gray"}
          >
            4. Optimize your office
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
      {page === 3 && (
        <div className={styles.survey}>
          <Page3
            next={() => setPage(page + 1)}
            back={() => setPage(page - 1)}
          />
        </div>
      )}
      {page === 4 && (
        <div className={styles.survey}>
          <Page4 back={() => setPage(page - 1)} />
        </div>
      )}
    </div>
  );
}

export default connect()(Page);
