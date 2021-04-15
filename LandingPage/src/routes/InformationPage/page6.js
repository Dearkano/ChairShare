import React, { useState, useRef, useEffect } from "react";
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
  Tag,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const Option = Select.Option;
const { CheckableTag } = Tag;

const validateMessages = {
  required: "${name} is required!",
};

const options = [
  "Home-like office",
  "Office in industrial style",
  "Modern, hi-tech and futuristic office",
  "Modern and creative office based on biophilic design",
  "Minimalist office in Scandinavian style",
  "Traditional office",
];

export default connect(({ form }) => ({ form }))(function ({
  back,
  go,
  dispatch,
  form,
}) {
  const [tags, setTags] = useState(form.amenties);
  const [tagsData, setTagsData] = useState([
    "Wifi",
    "Furniture",
    "Kitchen",
    "Conference Room",
    "Pet Friendly",
    "Parking",
    "Bicycle Storage",
    "Coffee Shop",
    "Lounge Area",
    "Gym",
    "24h Hour Access",
    "Sunlight Window",
  ]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const checkAndNext = (v) => {
    if (tags.length === 0) {
      alert("Please choose your desired/included amenties!");
      return;
    }
    console.log(v);
    v.amenties = tags;
    dispatch({
      type: "form/update",
      payload: v,
    });
    if (v.type === "sublessor") {
      go(7);
    } else {
      go(8);
    }
  };
  console.log(form);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...tags, tag]
      : tags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setTags(nextSelectedTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  useEffect(() => {
    if (inputRef.current && inputVisible) {
      inputRef.current.focus();
    }
  }, [inputVisible]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tagsData.indexOf(inputValue) === -1) {
      setTagsData([...tagsData, inputValue]);
      setTags([...tags, inputValue]);
    }
    console.log(tagsData);
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <Form validateMessages={validateMessages} onFinish={checkAndNext}>
      <div className={styles.main}>
        <div className={styles.text1}>Office Information</div>
        <div className={styles.text4}>Required</div>
        <div className={styles.text5_required} style={{ width: "100%" }}>
          Amenities desired/included
        </div>
        <div
          className={styles.row}
          style={{ justifyContent: "flex-start", marginTop: "1rem" }}
        >
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={tags.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
          {inputVisible && (
            <Input
              ref={inputRef}
              type="text"
              size="small"
              className={styles.tagInput}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}

          {!inputVisible && (
            <Tag className={styles.siteTagPlus} onClick={showInput}>
              <PlusOutlined
                style={{ height: "100%", verticalAlign: "middle" }}
              />{" "}
              New Tag
            </Tag>
          )}
        </div>

        <div
          className={styles.row}
          style={{ justifyContent: "flex-start", marginTop: "-1rem" }}
        >
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Office Styles</div>
            <Form.Item name="officeStyles" initialValue={form.officeStyles}>
              <Select style={{ width: "25rem" }}>
                {options.map((text) => (
                  <Option key={text}>{text}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        <div
          className={styles.row}
          style={{ justifyContent: "flex-start", marginTop: "-1rem" }}
        >
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Rules/Nonnegotiables</div>
            <Form.Item name={"rules"} initialValue={form.rules}>
              <Input.TextArea style={{ width: "50rem" }} allowClear rows={3} />
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
