import { connect } from "dva";
import React, { useEffect } from "react";
import styles from "./index.less";
import dayjs from "dayjs";
import { Button, Spin } from "antd";

export default connect(({ matching, loading }) => ({
  matching,
  loading: loading.global,
}))(({ dispatch, matching, loading, next }) => {
  return (
    <>
      <div
        className={styles.row}
        style={{ alignItems: "flex-start", justifyContent: "center" }}
      >
        <div
          className={styles.column}
          style={{ width: "40%", marginRight: "2rem" }}
        >
          <div className={styles.text5}>Company Information</div>
          <div
            className={styles.column}
            style={{
              backgroundColor: "#f2f2f2",
              width: "100%",
              paddingBottom: "0.5rem",
              paddingLeft: "0.5rem",
            }}
          >
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Location</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.address}</div>
            </div>
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Website</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>
                <a href={matching.website}>{matching.website}</a>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>No. of Employee</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.employeeNumber}</div>
            </div>
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Industry</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.industry}</div>
            </div>
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Bried Description of Company</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.description}</div>
            </div>
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Office Culture</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.officeCulture}</div>
            </div>
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Preferred Industry</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.preference}</div>
            </div>
          </div>
        </div>
        <div className={styles.column} style={{ width: "40%" }}>
          <div className={styles.text5}>Office Information</div>
          <div
            className={styles.row}
            style={{
              backgroundColor: "#63B1E2",
              width: "100%",
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
            }}
          >
            <div className={styles.column} style={{ width: "25%" }}>
              <div className={styles.text8}>No. of Renters</div>
              <div className={styles.text9}>{matching.renter}</div>
            </div>
            <div className={styles.column} style={{ width: "45%" }}>
              <div className={styles.text8}>Price ($/month per person)</div>
              <div className={styles.text9}>{matching.price}</div>
            </div>
            <div className={styles.column} style={{ width: "30%" }}>
              <div className={styles.text8}>Privacy Level (0-5)</div>
              <div className={styles.text9}>{matching.level}</div>
            </div>
          </div>
          <div
            className={styles.column}
            style={{
              backgroundColor: "#f2f2f2",
              width: "100%",
              paddingBottom: "0.5rem",
              paddingLeft: "0.5rem",
            }}
          >
            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Length of lease</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.leaseLength}</div>
            </div>

            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Move in date</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>
                {dayjs(matching.moveinDate).format("YYYY/MM/DD")}
              </div>
            </div>

            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Type of Office</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.officeType}</div>
            </div>

            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Office Style</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.officeStyles}</div>
            </div>

            <div
              className={styles.row}
              style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }}
            >
              <div className={styles.text6}>Rules/ Nonnegotiables</div>
              <div className={styles.divider}></div>
              <div className={styles.text7}>{matching.rules}</div>
            </div>
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
        <div className={styles.btn2}>
          <Button onClick={next} size="large">
            {"Next >"}
          </Button>
        </div>
      </div>
    </>
  );
});
