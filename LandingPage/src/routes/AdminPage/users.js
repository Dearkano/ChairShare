import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { List, Card, Descriptions } from "antd";
import styles from "./index.less";
import dayjs from "dayjs";
export default connect(({ admin, loading }) => ({
  admin,
  loading: loading.global,
}))(({ admin, loading, dispatch }) => {
  const [cur, setCur] = useState(1);
  useEffect(() => {
    dispatch({
      type: "admin/getUsers",
    });
  }, []);
  return (
    <List
      dataSource={admin.users}
      loading={loading}
      pagination={{
        pageSize: 10,
      }}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={item.name}
            extra={<div>{item.type}</div>}
            style={{ width: "100%" }}
          >
            <Descriptions>
              <Descriptions.Item label="Location">
                {item.address}, {item.city}, {item.state}, {item.country},{" "}
                {item.zip}
              </Descriptions.Item>
              <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
              <Descriptions.Item label="Position">
                {item.position}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">{item.phone}</Descriptions.Item>
              <Descriptions.Item label="Company Name">
                {item.companyName}
              </Descriptions.Item>
              <Descriptions.Item label="Industry">
                {item.industry}
              </Descriptions.Item>
              <Descriptions.Item label="Sub Industry">
                {item.subIndustry}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                {Number(item.price[0]) * 100} - {Number(item.price[1]) * 100}
              </Descriptions.Item>
              <Descriptions.Item label="Privacy Level">
                {Math.round(item.level / 10)}
              </Descriptions.Item>
              <Descriptions.Item label="Website">
                {item.website}
              </Descriptions.Item>
              <Descriptions.Item label="Renter Number">
                {item.renter}
              </Descriptions.Item>
              <Descriptions.Item label="Employee Number">
                {item.employeeNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Office Culture">
                {item.officeCulture}
              </Descriptions.Item>
              <Descriptions.Item label="Company Description">
                {item.description}
              </Descriptions.Item>
              <Descriptions.Item label="Preference">
                {item.preference}
              </Descriptions.Item>
              <Descriptions.Item label="Squarefootage">
                {item.squarefoot}
              </Descriptions.Item>
              <Descriptions.Item label="Lease Length">
                {item.leaseLength}
              </Descriptions.Item>
              <Descriptions.Item label="Move in Date">
                {dayjs(item.moveinDate).format("YYYY-MM-DD hh:mm:ss")}
              </Descriptions.Item>
              <Descriptions.Item label="Office Type">
                {item.officeType}
              </Descriptions.Item>
              <Descriptions.Item label="Amenties">
                {item.amenties ? item.amenties.join(", ") : ""}
              </Descriptions.Item>
              <Descriptions.Item label="Rules">{item.rules}</Descriptions.Item>
              <Descriptions.Item label="Office Styles">
                {item.officeStyles}
              </Descriptions.Item>
              <Descriptions.Item label="Photo Urls">
                {item.photos
                  ? item.photos.map((url, index) => (
                      <a
                        style={{ marginRight: "1rem" }}
                        href={`https://mychairshare.s3-ap-northeast-1.amazonaws.com/${url}`}
                      >{`photo${index + 1}`}</a>
                    ))
                  : ""}
              </Descriptions.Item>
              <Descriptions.Item label="Signup Time">
                {dayjs(item.signupTime).format("YYYY-MM-DD hh:mm:ss")}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </List.Item>
      )}
    ></List>
  );
});
