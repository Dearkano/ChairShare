import React, { useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Button, Input, Form, Slider, InputNumber } from "antd";
const validateMessages = {
  required: "${name} is required!",
};
export default connect(({ form }) => ({ form }))(function ({
  back,
  next,
  dispatch,
  form,
}) {
  const checkAndNext = (v) => {
    if (!v.city || !v.state || !v.country) {
      if (!form.country || !form.state || !form.city) return;
    }
    dispatch({
      type: "form/update",
      payload: v,
    });
    next();
  };
  console.log(form);
  return (
    <Form validateMessages={validateMessages} onFinish={checkAndNext}>
      <div className={styles.main}>
        <div className={styles.text1}>Office Information</div>
        <div className={styles.text4}>Required</div>
        <div
          className={styles.text5_required}
          style={{ alignSelf: "flex-start" }}
        >
          Location of office
        </div>
        <div className={styles.column} style={{ alignItems: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>City</div>
            <Form.Item name={"city"} rules={[{ required: true }]}>
              <Input
                initialValue={form.city}
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="City"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>State</div>
            <Form.Item name={"state"} rules={[{ required: true }]}>
              <Input
                initialValue={form.state}
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="State"
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Country</div>
            <Form.Item name={"country"} rules={[{ required: true }]}>
              <Input
                initialValue={form.country}
                style={{ width: "20rem" }}
                size="large"
                allowClear
                placeholder="Country"
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Estimated price/month (USD)</div>
            <Form.Item name="price">
              <Slider
                initialValue={form.price}
                tipFormatter={(v) => `$${v * 100}`}
                marks={{
                  0: "$0",
                  20: "$2000",
                  40: "$4000",
                  60: "$6000",
                  80: "$8000",
                  100: "$10000",
                }}
              />
            </Form.Item>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Level of privacy required</div>
            <Form.Item name="level">
              <Slider
                initialValue={form.level}
                tipFormatter={(v) => Math.round(v / 20)}
                marks={{
                  0: "Low",
                  100: "High",
                }}
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Expected number of renters</div>
            <Form.Item name="renter" initialValue={form.renter}>
              <InputNumber
                style={{ width: "10rem" }}
                size="large"
                initialValue={10}
                min={1}
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
            {"Next >"}
          </Button>
        </div>
      </div>
    </Form>
  );
});
