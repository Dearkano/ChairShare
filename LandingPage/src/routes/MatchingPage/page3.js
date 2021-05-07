import { connect } from "dva";
import React, { useEffect } from "react";
import styles from "./index.less";
import { Button, Image } from "antd";
import Parking from "../../assets/car.png";
import Kitchen from "../../assets/kitchen.png";
import Gym from "../../assets/gym.png";
import Wheelchair from "../../assets/wheelchair.png";
import Meeting from "../../assets/meeting.png";
import h24 from "../../assets/24h.png";
import Elevator from "../../assets/elevator.png";
import { routerRedux } from "dva/router";

export default connect(({ matching, loading }) => ({
  matching,
  loading: loading.global,
}))(({ dispatch, matching, loading, back }) => {
  const click = () => dispatch(routerRedux.push("/"));
  return (
    <div className={styles.column}>
      <div className={styles.text11}>
        Would you like to become office partners
      </div>
      <div className={styles.bluearea1}>
        <div className={styles.text12}>
          We will reach out to you shortly if you accept the match, if you do
          not, we will continue to search one for you!
        </div>
        <div
          className={styles.row}
          style={{ justifyContent: "center", marginTop: "2rem" }}
        >
          <div className={styles.btn4} style={{ marginRight: "2rem" }}>
            <Button onClick={click}>No thanks, please keep searching</Button>
          </div>
          <div className={styles.btn3}>
            <Button onClick={click}>Yes, Sign me up!</Button>
          </div>
        </div>
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
        <div className={styles.btn1}>
          <Button size="large" onClick={back} style={{ marginRight: "2rem" }}>
            {"< Back"}
          </Button>
        </div>
      </div>
    </div>
  );
});
