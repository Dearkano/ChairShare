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

const Page = ({ dispatch, loading }) => {
  const onFinish = (values) => {
    dispatch({
      type: "contact/update",
      payload: values,
    });
    dispatch({
      type: "contact/submit",
    });
    console.log("Success:", values);
  };
  return (
    <div className={styles.main}>
      <div className={styles.page5}>
        <div className={styles.text}>
          We would love to talk more and answer your questions!
        </div>
        <div className={styles.text}>
          Please fill out the form and we will get back to you as soon as
          possible.
        </div>
        <Form onFinish={onFinish}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Form.Item
                label="Name"
                name="name"
                style={{ width: "25rem" }}
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  style={{ width: "15rem" }}
                  placeholder="your name here"
                />
              </Form.Item>
              <Form.Item
                label="Company"
                name="company"
                style={{ width: "25rem" }}
                rules={[
                  { required: true, message: "Please input your company!" },
                ]}
              >
                <Input
                  style={{ width: "15rem" }}
                  placeholder="your company here"
                />
              </Form.Item>
            </div>
            <div className={styles.column}>
              <Form.Item
                label="Email"
                style={{ width: "25rem" }}
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                type="email"
              >
                <Input style={{ width: "15rem" }} placeholder="xxxx@xxx.com" />
              </Form.Item>
              <Form.Item
                label="Phone No."
                name="phone"
                type="number"
                style={{ width: "25rem" }}
              >
                <Input style={{ width: "15rem" }} placeholder="(xxx)xxx-xxxx" />
              </Form.Item>
            </div>
          </div>
          <div className={styles.row} style={{ marginBottom: "2rem" }}>
            <Form.Item
              label="Message"
              style={{ width: "40rem" }}
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea
                placeholder="We'd like to hear more from you"
                style={{ width: "30rem" }}
                rows={4}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ contact, loading }) => ({
  contact,
  loading: loading.global,
}))(Page);
