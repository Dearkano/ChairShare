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
import { Header } from "antd/lib/layout/layout";
const validateMessages = {
  required: "${name} is required!",
};
const Page = ({ dispatch, back, form, loading }) => {
  const checkAndNext = async (v) => {
    if (!v.name || !v.email) {
      if (!form.name || !form.email) return;
    }
    dispatch({
      type: "form/update",
      payload: v,
    });
    console.log(form);
    dispatch({
      type: "form/submit",
    });
  };
  console.log(form);
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
            <Form.Item
              name={"name"}
              rules={[{ required: true }]}
              initialValue={form.name}
            >
              <Input
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="Your name here"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Position</div>
            <Form.Item name={"position"} initialValue={form.position}>
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
            <Form.Item
              name={"email"}
              rules={[{ required: true }]}
              initialValue={form.email}
            >
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
            <div className={styles.text5}>Phone No</div>
            <Form.Item name={"phone"} initialValue={form.phone}>
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
          <Button size="large" htmlType="submit" loading={loading}>
            {"Submit"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default connect(({ form, loading }) => ({
  form,
  loading: loading.global,
}))(Page);
