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

const Page = ({ dispatch, survey }) => {
  const onFinish = (values) => {
    dispatch({
      type: "survey/updateContact",
      payload: values,
    });
    console.log("Success:", values);
  };
  return (
    <div className={styles.page5}>
      <div className={styles.text}>
        Thank you for completing the questionnaire!
      </div>
      <div className={styles.text}>
        Please provide your contact if you’d like us to get back to you.{" "}
      </div>
      <Form onFinish={onFinish}>
        <div className={styles.row}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            rules={[{ required: true, message: "Please input your company!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className={styles.row} style={{ marginBottom: "2rem" }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            type="email"
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone No." name="phone" type="number">
            <Input />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ survey }) => ({ survey }))(Page);
