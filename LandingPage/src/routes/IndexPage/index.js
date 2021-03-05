import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button } from "antd";
import styles from "./IndexPage.less";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import image1 from "../../assets/image1.png";

function IndexPage({ dispatch }) {
  const texts = [
    "",
    "Companies that would like to sublease their existing excess office space",
    "Brokers, Landlords, Enterprise, Office utilization services",
    "Companies that would like to share/rent an office space with flexibility and competitive price",
  ];
  const roles = ["", "Sublessor", "Partners", "Subtenent"];
  const [cur, setCur] = useState(0);
  const onPress = () => {
    // dispatch(routerRedux.push("/survey"));
    document.location.href = "https://forms.gle/hmaZnxa82Depc8dp7";
  };
  return (
    <div className={styles.normal}>
      <div className={styles.main}>
        <div className={styles.row}>
          <img
            className={styles.logo}
            style={{ opacity: cur === 0 ? 1 : 0.1 }}
            src={logo1}
          />
          <img
            onMouseEnter={() => setCur(1)}
            onMouseLeave={() => setCur(0)}
            className={styles.logo}
            style={{ opacity: cur === 0 || cur === 1 ? 1 : 0.1 }}
            src={logo2}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {" "}
            <img
              onMouseEnter={() => setCur(2)}
              onMouseLeave={() => setCur(0)}
              className={styles.logo}
              style={{
                opacity: cur === 0 || cur === 2 ? 1 : 0.1,
                marginBottom: "-12rem",
              }}
              src={logo4}
            />
            <img
              onMouseEnter={() => setCur(2)}
              onMouseLeave={() => setCur(0)}
              className={styles.logo}
              style={{ opacity: cur === 0 ? 1 : 0.1 }}
              src={logo3}
            />
          </div>

          <img
            onMouseEnter={() => setCur(3)}
            onMouseLeave={() => setCur(0)}
            className={styles.logo}
            style={{ opacity: cur === 0 || cur === 3 ? 1 : 0.1 }}
            src={logo5}
          />
          <img
            className={styles.logo}
            style={{ opacity: cur === 0 ? 1 : 0.1 }}
            src={logo6}
          />
        </div>
        {cur === 0 && (
          <>
            <div className={styles.subtitle}>
              We match{" "}
              <span style={{ color: "#63B1E2" }}>
                existing excess office spaces
              </span>{" "}
              with companies to form
            </div>
            <div className={styles.subtitle}>
              <span style={{ color: "#63B1E2" }}>meaningful relationships</span>{" "}
              within industries.
            </div>
            <div
              className={styles.row}
              style={{ paddingLeft: "2rem", paddingTop: "1rem" }}
            >
              <Button type="primary">
                Hover on the above logo to learn more
              </Button>
            </div>
          </>
        )}
        {cur !== 0 && (
          <div className={styles.container1}>
            <div className={styles.area}>
              <div
                className={styles.row}
                style={{ fontWeight: "bolder", fontSize: "1.7rem" }}
              >
                {roles[cur]}
              </div>
              <div
                className={styles.row}
                style={{ fontSize: "1.25rem", textAlign: "left" }}
              >
                {texts[cur]}
              </div>
            </div>
          </div>
        )}
        <div className={styles.btn} style={{ marginTop: "1rem" }}>
          <Button onClick={onPress}>Get matched right now!</Button>
        </div>
      </div>
      <img className={styles.image1} src={image1} />
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
