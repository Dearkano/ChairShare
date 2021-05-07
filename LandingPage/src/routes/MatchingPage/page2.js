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

export default connect(({ matching, loading }) => ({
  matching,
  loading: loading.global,
}))(({ dispatch, matching, loading, next, back }) => {
  return (
    <>
      <div
        className={styles.row}
        style={{ alignItems: "flex-start", justifyContent: "center" }}
      >
        <div className={styles.column} style={{ width: "55%" }}>
          <div className={styles.text5} style={{ marginBottom: "2rem" }}>
            Office Photos
          </div>
          <div
            className={styles.row}
            style={{
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Image.PreviewGroup style={{ width: "100%" }}>
              {matching.photos.map((url) => (
                <div style={{ marginRight: "2rem", marginBottom: "2rem" }}>
                  <Image width={300} src={url} />
                </div>
              ))}
            </Image.PreviewGroup>
          </div>
        </div>

        <div className={styles.column} style={{ width: "35%" }}>
          <div className={styles.text5} style={{ marginBottom: "2rem" }}>
            Amenties
          </div>
          <div className={styles.row} style={{ flexWrap: "wrap" }}>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Parking} />
              </div>
              <div className={styles.text10}>Parking</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={h24} />
              </div>
              <div className={styles.text10}>24 Hour Access</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Kitchen} />
              </div>
              <div className={styles.text10}>Kitchen</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Meeting} />
              </div>
              <div className={styles.text10}>Conference Room</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Gym} />
              </div>
              <div className={styles.text10}>Gym</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Wheelchair} />
              </div>
              <div className={styles.text10}>Wheelchair Accessible</div>
            </div>
            <div
              className={styles.column}
              style={{ width: "6rem", height: "6rem", marginRight: "1rem" }}
            >
              <div>
                <img style={{ width: "3rem" }} src={Elevator} />
              </div>
              <div className={styles.text10}>Elevator</div>
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
              <Button
                size="large"
                onClick={back}
                style={{ marginRight: "2rem" }}
              >
                {"< Back"}
              </Button>
            </div>
            <div className={styles.btn2}>
              <Button size="large" onClick={next}>
                {"Next >"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
