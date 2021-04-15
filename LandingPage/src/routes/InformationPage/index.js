import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Timeline } from "antd";
import styles from "./index.less";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";

function Page({ dispatch }) {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      {page !== 0 && page !== 8 && (
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
              color={page === 2 || page === 3 ? "blue" : "gray"}
            >
              2. Company Info
            </Timeline.Item>
            <Timeline.Item
              className={styles.item}
              color={
                page === 4 || page === 5 || page === 6 || page === 7
                  ? "blue"
                  : "gray"
              }
            >
              3. Office Info
            </Timeline.Item>
            <Timeline.Item className={styles.item} color={"gray"}>
              4. Submit Form
            </Timeline.Item>
          </Timeline>
        </div>
      )}
      {page === 0 && (
        <div className={styles.survey} style={{ width: "100%" }}>
          <Page0 next={() => setPage(page + 1)} />
        </div>
      )}
      {page === 1 && (
        <div className={styles.survey}>
          <Page1 next={() => setPage(page + 1)} go={(v) => setPage(v)} />
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
          <Page4
            back={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
          />
        </div>
      )}
      {page === 5 && (
        <div className={styles.survey}>
          <Page5
            back={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
          />
        </div>
      )}
      {page === 6 && (
        <div className={styles.survey}>
          <Page6 back={() => setPage(page - 1)} go={(v) => setPage(v)} />
        </div>
      )}
      {page === 7 && (
        <div className={styles.survey}>
          <Page7
            back={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
          />
        </div>
      )}
      {page === 8 && (
        <div className={styles.survey}>
          <Page8
            back={() => setPage(page - 1)}
            next={() => setPage(page + 1)}
          />
        </div>
      )}
    </div>
  );
}

export default connect()(Page);
