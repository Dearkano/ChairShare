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

export default connect()(function ({ dispatch }) {
  const texts = [
    "",
    "Companies that would like to rent an office space or excess desks with flexibility and competitive price",
    "Brokers, Landlords, Enterprise, Office utilization services",
    "Companies that would like to share/rent an office space with flexibility and competitive price",
  ];
  const roles = ["", "Sublessor", "Partners", "Subtenent"];
  const [cur, setCur] = useState(0);
  const onPress = () => {
    dispatch(routerRedux.push("/survey"));
    //document.location.href = "https://forms.gle/hmaZnxa82Depc8dp7";
  };
  return (
    <div className={styles.main} style={{ height: "100vh" }}>
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

      <div
        className={styles.row}
        style={{
          paddingLeft: "2rem",
          paddingTop: "1rem",
          fontSize: "1.3rem",
          fontWeight: 400,
        }}
      >
        Hover on the above logo to learn more
      </div>

      <div className={styles.container1}>
        {[1, 2, 3].map((id) => (
          <div
            className={styles.area}
            style={id === cur ? {} : { backgroundColor: "#ccc" }}
          >
            <div
              className={styles.row}
              style={{
                fontWeight: 500,
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {roles[id]}
            </div>
            <div
              className={styles.row}
              style={{
                fontSize: "1rem",
                textAlign: "center",
                lineHeight: "1.5rem",
                fontWeight: 300,
              }}
            >
              {texts[id]}
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.btn} style={{ marginTop: "1rem" }}>
        <Button onClick={onPress}>Get matched right now!</Button>
      </div> */}
    </div>
  );
});
