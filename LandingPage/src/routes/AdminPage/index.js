import React, { useState } from "react";
import { connect } from "dva";
import { Menu, Input, Button, Form } from "antd";
import Users from "./users";
import Partners from "./partners";
import Contacts from "./contacts";
import styles from "./index.less";
import admin from "../../models/admin";

export default connect(({ loading, admin }) => ({
  admin,
  loading: loading.global,
}))(({ dispatch, admin, loading }) => {
  const [cur, setCur] = useState("signup");
  const onFinish = (v) => {
    dispatch({
      type: "admin/login",
      payload: v.pwd,
    });
  };
  return (
    <div className={styles.main}>
      {!admin.isLogin && (
        <div style={{ top: "40%", left: "40%", position: "absolute" }}>
          <Form onFinish={onFinish}>
            <Form.Item name="pwd">
              <Input
                type="password"
                size="large"
                style={{ width: "20rem" }}
                placeholder="Input admin password"
              />
            </Form.Item>
            <Form.Item>
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
      {admin.isLogin && (
        <>
          <div className={styles.menu}>
            <Menu
              mode="vertical"
              onClick={(e) => setCur(e.key)}
              selectedKeys={[cur]}
            >
              <Menu.Item key="signup">Signup Information</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
              <Menu.Item key="partner">Partner</Menu.Item>
            </Menu>
          </div>
          <div style={{ flex: 1, padding: "2rem" }}>
            {cur === "signup" && <Users />}
            {cur === "contact" && <Contacts />}
            {cur === "partner" && <Partners />}
          </div>
        </>
      )}
    </div>
  );
});
