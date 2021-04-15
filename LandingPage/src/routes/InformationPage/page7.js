import React, { useEffect, useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Button, Input, Form, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const validateMessages = {
  required: "${name} is required!",
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default connect(({ form, admin, loading }) => ({
  form,
  admin,
  loading: loading.global,
}))(function ({ back, next, dispatch, form, loading }) {
  const [preview, setPreview] = useState({
    title: "",
    image: "",
  });
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => {
    setVisible(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      image: file.url || file.preview,
      title: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
    setVisible(true);
  };
  const handleChange = ({ file, fileList }) => {
    console.log("---");
    console.log(file);
    // console.log(fileList);
    // setFileList(fileList);
  };

  const checkAndNext = () => {
    dispatch({
      type: "form/upload",
      payload: fileList,
      onComplete: next,
    });
  };
  console.log(form);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form validateMessages={validateMessages} onFinish={checkAndNext}>
      <div className={styles.main}>
        <div className={styles.text1}>Office Information</div>
        <div className={styles.text4}>Required</div>
        <div
          className={styles.row}
          style={{ justifyContent: "flex-start", marginTop: "1rem" }}
        >
          <div className={styles.text5}>
            Please upload photo of your office space{" "}
          </div>
          <div
            className={styles.text5}
            style={{ fontSize: "1rem", marginBottom: "1rem" }}
          >
            (Images will only be used internally or shared with potential
            tenants after your consent){" "}
          </div>
          <Upload
            className={styles.images}
            customRequest={({ file, onSuccess }) => {
              setTimeout(() => {
                onSuccess("ok");
              }, 0);
            }}
            listType="picture-card"
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={(file) => {
              setFileList([...fileList, file]);
              return false;
            }}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={visible}
            title={preview.title}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={preview.image} />
          </Modal>
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
          <Button size="large" loading={loading} onClick={checkAndNext}>
            {"Next >"}
          </Button>
        </div>
      </div>
    </Form>
  );
});
