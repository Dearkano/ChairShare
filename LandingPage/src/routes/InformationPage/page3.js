import React, { useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Form, Button, Input, Select, AutoComplete } from "antd";

const validateMessages = {
  required: "${name} is required!",
};

export default connect(({ form }) => ({ form }))(function ({
  back,
  next,
  form,
  dispatch,
}) {
  const checkAndNext = (v) => {
    if (!v.officeCulture || !v.description) {
      if (!form.officeCulture || !form.description) return;
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
        <div className={styles.text1}>Company Information</div>
        <div className={styles.text4}>Required</div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.wideInputBlock}>
            <div className={styles.text5_required}>
              Please use one word/sentence to represent your office culture
            </div>
            <Form.Item
              name={"officeCulture"}
              rules={[{ required: true }]}
              initialValue={form.officeCulture}
            >
              <Input
                style={{ width: "50rem" }}
                allowClear
                placeholder="summary of office culture..."
              />
            </Form.Item>
          </div>
        </div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.wideInputBlock}>
            <div className={styles.text5_required}>
              Brief description of your company
            </div>
            <Form.Item
              name={"description"}
              rules={[{ required: true }]}
              initialValue={form.description}
            >
              <Input.TextArea
                style={{ width: "50rem" }}
                allowClear
                rows={3}
                placeholder="office sharers want to know more about your company..."
              />
            </Form.Item>
          </div>
        </div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.wideInputBlock}>
            <div className={styles.text5}>
              Preferences of office sharer industry
            </div>
            <Form.Item name={"preference"} initialValue={form.preference}>
              <Input
                style={{ width: "50rem" }}
                allowClear
                placeholder="specific industry, office culture, or no preference "
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
