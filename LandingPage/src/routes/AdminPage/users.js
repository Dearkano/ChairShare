import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { List, Card, Descriptions } from "antd";
import styles from "./index.less";

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
                {item.city}, {item.state}, {item.country}
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
                {item.price[0] * 100} - {item.price[1] * 100}
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
            </Descriptions>
          </Card>
        </List.Item>
      )}
    ></List>
  );
});
