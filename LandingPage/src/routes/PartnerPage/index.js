import React, { useState } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Button, Form, Input, Select } from "antd";
import styles from "./index.less";
import Image1 from "../../assets/h-h_Black.svg";

const { Option } = Select;
const validateMessages = {
  required: "${name} is required!",
};
export default connect()(({ dispatch }) => {
  const onFinish = async (values) => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.companyName ||
      !values.email ||
      !values.message ||
      !values.role
    )
      return;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const res = await fetch("http://localhost:7001/partner", {
      method: "post",
      headers: headers,
      body: JSON.stringify(values),
    });
    if (res.status === 200) {
      dispatch(routerRedux.push("/success"));
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.text1}>
          Do you want to be one of our partners?{" "}
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={styles.column}
          style={{
            width: "50%",
            height: "40rem",
            justifyContent: "flex-start",
          }}
        >
          <div className={styles.row}>
            <img style={{ width: "25rem" }} src={Image1} />
          </div>
          <div className={styles.row}>
            <div
              className={styles.text2}
              style={{ width: "25rem", marginTop: "15rem" }}
            >
              Are you a landlord? Or a real estate broker that is interested in
              the subleasing industry? Contact us to be one of our trusted
              partners to discuss possibilities in the future.
            </div>
          </div>
        </div>
        <div className={styles.column} style={{ width: "50%" }}>
          <div className={styles.area}>
            <div
              className={styles.column}
              style={{ justifyContent: "flex-start", height: "100%" }}
            >
              <div className={styles.text3}>First Name</div>
              <div className={styles.text3}>Lasr Name</div>
              <div className={styles.text3}>Company Name</div>
              <div className={styles.text3}>Your Role</div>
              <div className={styles.text4}>Phone No.</div>
              <div className={styles.text3}>Email</div>
              <div className={styles.text3}>Message</div>
            </div>
            <div className={styles.column}>
              <Form validateMessages={validateMessages} onFinish={onFinish}>
                <Form.Item
                  style={{ height: "2.5rem" }}
                  name={"firstName"}
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    placeholder="your first name"
                  />
                </Form.Item>
                <Form.Item
                  style={{ height: "2.5rem" }}
                  name={"lastName"}
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    placeholder="your last name"
                  />
                </Form.Item>
                <Form.Item
                  style={{ height: "2.5rem" }}
                  name={"companyName"}
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    placeholder="your company name"
                  />
                </Form.Item>
                <Form.Item
                  style={{ height: "2.5rem" }}
                  name={"role"}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="your role here"
                    size="large"
                    style={{ width: "20rem" }}
                  >
                    <Option value="landlord">landlord</Option>
                    <Option value="broker">real estate broker</Option>
                  </Select>
                </Form.Item>
                <Form.Item style={{ height: "2.5rem" }} name={"phone"}>
                  <Input
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    type="tel"
                    placeholder="(xxx)xxx-xxxx"
                  />
                </Form.Item>
                <Form.Item
                  style={{ height: "2.5rem" }}
                  name={"email"}
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    type="email"
                    placeholder="xxxxx@xxx.com"
                  />
                </Form.Item>
                <Form.Item name={"message"} rules={[{ required: true }]}>
                  <Input.TextArea
                    style={{ width: "20rem" }}
                    size="large"
                    allowClear
                    rows={4}
                    placeholder="your message..."
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
