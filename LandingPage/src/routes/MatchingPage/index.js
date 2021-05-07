import { connect } from "dva";
import React, { useEffect, useState } from "react";
import Top from "./top";
import styles from "./index.less";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { Spin } from "antd";

export default connect(({ matching, loading }) => ({
  matching,
  loading: loading.global,
}))(({ dispatch, matching, loading, match }) => {
  useEffect(() => {
    dispatch({
      type: "matching/getMatching",
      payload: {
        id: match.params.matchingId,
      },
    });
  }, []);
  const [page, setPage] = useState(3);
  if (loading) {
    return <Spin size="large" />;
  }
  return (
    <div className={styles.container}>
      <Top />
      {page === 1 && <Page1 next={() => setPage(2)} />}
      {page === 2 && <Page2 back={() => setPage(1)} next={() => setPage(3)} />}
      {page === 3 && <Page3 back={() => setPage(2)} />}
    </div>
  );
});
