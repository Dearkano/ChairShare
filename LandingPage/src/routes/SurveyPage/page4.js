import React, { useState } from "react";
import { connect } from "dva";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import styles from "./index.less";
const validateMessages = {
  required: "${name} is required!",
};
const Page = ({ dispatch, next, back }) => {
  const checkAndNext = (v) => {
    if (!v.name || !v.email) return;
    next();
  };
  return (
    <Form validateMessages={validateMessages} onFinish={checkAndNext}>
      <div className={styles.main}>
        <div className={styles.text6} style={{ width: "100%" }}>
          We are excited for your office sharing experience!
        </div>
        <div
          className={styles.text2}
          style={{ width: "100%", fontWeight: 500 }}
        >
          Thank you for signing up to be part of chairshare
        </div>
        <div
          className={styles.text2}
          style={{ width: "100%", fontWeight: 500 }}
        >
          Please provide your contact and we will notify you once you get a
          match!
        </div>
        <div className={styles.text4}>Required</div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Name</div>
            <Form.Item name={"name"} rules={[{ required: true }]}>
              <Input
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="Your name here"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Position</div>
            <Form.Item name={"position"}>
              <Input
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="your position here"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Email</div>
            <Form.Item name={"email"} rules={[{ required: true }]}>
              <Input
                style={{ width: "20rem" }}
                type="email"
                size="large"
                allowClear
                placeholder="xxxxx@xxx.com"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Phone No</div>
            <Form.Item name={"phone"}>
              <Input
                style={{ width: "20rem" }}
                type="tel"
                size="large"
                allowClear
                placeholder="(xxx)xxx-xxxx"
              />
            </Form.Item>
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
          <Button size="large" onClick={back} style={{ marginRight: "2rem" }}>
            {"< Back"}
          </Button>
          <Button size="large" htmlType="submit">
            {"Submit"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default connect(({ survey }) => ({ survey }))(Page);
