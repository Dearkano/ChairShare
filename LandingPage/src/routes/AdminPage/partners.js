import React, { useState, useEffect } from "react";
import { connect } from "dva";
import { List, Card, Descriptions } from "antd";

export default connect(({ admin, loading }) => ({
  admin,
  loading: loading.global,
}))(({ admin, loading, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: "admin/getPartners",
    });
  }, []);
  return (
    <List
      dataSource={admin.partners}
      loading={loading}
      pagination={{
        pageSize: 10,
      }}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={`${item.firstName} ${item.lastName}`}
            extra={item.role}
            style={{ width: "100%" }}
          >
            <Descriptions>
              <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{item.phone}</Descriptions.Item>
              <Descriptions.Item label="Company Name">
                {item.companyName}
              </Descriptions.Item>
              <Descriptions.Item label="Message">
                {item.message}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </List.Item>
      )}
    ></List>
  );
});
