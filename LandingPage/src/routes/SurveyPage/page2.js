import React, { useState } from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Form, Button, Input, Select, AutoComplete } from "antd";

const { Option } = Select;
const optionsText = [
  "Accounting",
  "Airlines / Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel / Fashion",
  "Architecture / Planning",
  "Arts / Crafts",
  "Automotive",
  "Aviation / Aerospace",
  "Banking / Mortgage",
  "Biotechnology / Greentech",
  "Broadcast Media",
  "Building Materials",
  "Business Supplies / Equipment",
  "Capital Markets / Hedge Fund / Private Equity",
  "Chemicals",
  "Civic / Social Organization",
  "Civil Engineering",
  "Commercial Real Estate",
  "Computer Games",
  "Computer Hardware",
  "Computer Networking",
  "Computer Software / Engineering",
  "Computer / Network Security",
  "Construction",
  "Consumer Electronics",
  "Consumer Goods",
  "Consumer Services",
  "Cosmetics",
  "Dairy",
  "Defense / Space",
  "Design",
  "E - Learning",
  "Education Management",
  "Electrical / Electronic Manufacturing",
  "Entertainment / Movie Production",
  "Environmental Services",
  "Events Services",
  "Executive Office",
  "Facilities Services",
  "Farming",
  "Financial Services",
  "Fine Art",
  "Fishery",
  "Food Production",
  "Food / Beverages",
  "Fundraising",
  "Furniture",
  "Gambling / Casinos",
  "Glass / Ceramics / Concrete",
  "Government Administration",
  "Government Relations",
  "Graphic Design / Web Design",
  "Health / Fitness",
  "Higher Education / Acadamia",
  "Hospital / Health Care",
  "Hospitality",
  "Human Resources / HR",
  "Import / Export",
  "Individual / Family Services",
  "Industrial Automation",
  "Information Services",
  "Information Technology / IT",
  "Insurance",
  "International Affairs",
  "International Trade / Development",
  "Internet",
  "Investment Banking / Venture",
  "Investment Management / Hedge Fund / Private Equity",
  "Judiciary",
  "Law Enforcement",
  "Law Practice / Law Firms",
  "Legal Services",
  "Legislative Office",
  "Leisure / Travel",
  "Library",
  "Logistics / Procurement",
  "Luxury Goods / Jewelry",
  "Machinery",
  "Management Consulting",
  "Maritime",
  "Market Research",
  "Marketing / Advertising / Sales",
  "Mechanical or Industrial Engineering",
  "Media Production",
  "Medical Equipment",
  "Medical Practice",
  "Mental Health Care",
  "Military Industry",
  "Mining / Metals",
  "Motion Pictures / Film",
  "Museums / Institutions",
  "Music",
  "Nanotechnology",
  "Newspapers / Journalism",
  "Non - Profit / Volunteering",
  "Oil / Energy / Solar / Greentech",
  "Online Publishing",
  "Other Industry",
  "Outsourcing / Offshoring",
  "Package / Freight Delivery",
  "Packaging / Containers",
  "Paper / Forest Products",
  "Performing Arts",
  "Pharmaceuticals",
  "Philanthropy",
  "Photography",
  "Plastics",
  "Political Organization",
  "Primary / Secondary Education",
  "Printing",
  "Professional Training",
  "Program Development",
  "Public Relations / PR",
  "Public Safety",
  "Publishing Industry",
  "Railroad Manufacture",
  "Ranching",
  "Real Estate / Mortgage",
  "Recreational Facilities / Services",
  "Religious Institutions",
  "Renewables / Environment",
  "Research Industry",
  "Restaurants",
  "Retail Industry",
  "Security / Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing / Recruiting",
  "Supermarkets",
  "Telecommunications",
  "Textiles",
  "Think Tanks",
  "Tobacco",
  "Translation / Localization",
  "Transportation",
  "Utilities",
  "Venture Capital / VC",
  "Veterinary",
  "Warehousing",
  "Wholesale",
  "Wine / Spirits",
  "Wireless",
  "Writing / Editing",
];

const options = optionsText.map((text) => {
  return { value: text };
});
export default connect()(function ({ back, next }) {
  const onIndustrySelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <Form>
      <div className={styles.main}>
        <div className={styles.text1}>Company Information</div>
        <div className={styles.text4}>Required</div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Company name</div>
            <Input
              style={{ width: "25rem" }}
              size="large"
              allowClear
              placeholder="your company name here"
            />
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Company Website</div>
            <Input
              style={{ width: "25rem" }}
              size="large"
              allowClear
              placeholder="your company website here"
            />
          </div>
        </div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Industry</div>
            <AutoComplete
              size="large"
              options={options}
              style={{ width: "25rem" }}
              onSelect={onIndustrySelect}
              placeholder="input your industry here"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </div>
          <div className={styles.inputBlock}>
            <div className={styles.text5_required}>Number of Employees</div>
            <Select
              placeholder="select your number of employees"
              size="large"
              style={{ width: "25rem" }}
            >
              <Option value="1-10">1 - 10</Option>
              <Option value="11-50">11 - 50</Option>
              <Option value="51-200">51 - 200</Option>
              <Option value="201-1000">201 - 1000</Option>
              <Option value="1001-5000">1001 - 5000</Option>
              <Option value="5001+">5001+</Option>
            </Select>
          </div>
        </div>
        <div className={styles.row} style={{ justifyContent: "flex-start" }}>
          <div className={styles.inputBlock}>
            <div className={styles.text5}>Sub-industry</div>
            <Input
              size="large"
              style={{ width: "25rem" }}
              placeholder="your sub industry here"
            />
          </div>
        </div>
        <div
          className={styles.row}
          style={{
            paddingRight: "5rem",
            justifyContent: "flex-end",
            marginTop: "5rem",
          }}
        >
          <Button size="large" onClick={back} style={{ marginRight: "2rem" }}>
            {"< Back"}
          </Button>
          <Button size="large" onClick={next}>
            {"Next >"}
          </Button>
        </div>
      </div>
    </Form>
  );
});
