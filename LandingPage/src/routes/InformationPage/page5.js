import React, { useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import {
  Button,
  Input,
  Form,
  Slider,
  InputNumber,
  Select,
  DatePicker,
} from "antd";
const Option = Select.Option;

const validateMessages = {
  required: "${name} is required!",
};

export default connect(({ form }) => ({ form }))(function ({
  back,
  next,
  dispatch,
  form,
}) {
  const [officeType, setOfficeType] = useState(form.officeType);
  const checkAndNext = (v) => {
    if (!officeType) {
      alert("Please choose an office space type!");
      return;
    }
    console.log(v);
    if (!v.leaseLength || !v.moveinDate) {
      if (!form.leaseLength || !form.moveinDate) return;
    }
    v.officeType = officeType;
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
          className={styles.row}
          style={{ justifyContent: "flex-start", marginTop: "1rem" }}
        >
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Square footage required/desired</div>
            <Form.Item name="renter" initialValue={form.squarefootage}>
              <InputNumber style={{ width: "10rem" }} min={1} />
            </Form.Item>
          </div>
        </div>

        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock} style={{ width: "20rem" }}>
            <div className={styles.text5_required}>Length of sublease</div>
            <Form.Item
              name="leaseLength"
              initialValue={form.leaseLength}
              rules={[{ required: true }]}
            >
              <Select style={{ width: "20rem" }}>
                <Option value="1-2 months">1 - 2 months</Option>
                <Option value="2-6 months">2 - 6 months</Option>
                <Option value="6-12 months">6 - 12 months</Option>
                <Option value="1-2 years">1 - 2 years</Option>
                <Option value="2 years+">2 years+</Option>
              </Select>
            </Form.Item>
          </div>
          <div className={styles.inputBlock} style={{ marginLeft: "5rem" }}>
            <div className={styles.text5_required}>
              How soon can you move in?{" "}
            </div>
            <Form.Item
              name="moveinDate"
              initialValue={form.moveinDate}
              rules={[{ required: true }]}
            >
              <DatePicker
                style={{ width: "20rem" }}
                placeholder="MM/DD/YYYY"
                format="MM/DD/YYYY"
              />
            </Form.Item>
          </div>
        </div>

        <div
          className={styles.column}
          style={{ alignItems: "flex-start", width: "100%", marginTop: "2rem" }}
        >
          <div className={styles.text5_required}>Type of office space </div>
          <div
            className={styles.row}
            style={{ width: "100%", justifyContent: "flex-start" }}
          >
            <div
              className={
                officeType === "Open Workspace"
                  ? styles.office_type_btn_active
                  : styles.office_type_btn
              }
            >
              <Button
                size="large"
                onClick={() => setOfficeType("Open Workspace")}
              >
                Open Workspace
              </Button>
            </div>
            <div
              className={
                officeType === "Private Offices"
                  ? styles.office_type_btn_active
                  : styles.office_type_btn
              }
              style={{ marginLeft: "3rem" }}
            >
              <Button
                size="large"
                onClick={() => setOfficeType("Private Offices")}
              >
                Private Offices
              </Button>
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
