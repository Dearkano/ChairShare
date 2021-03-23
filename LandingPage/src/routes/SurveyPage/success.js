import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Result, Button } from "antd";
export default connect()(({ dispatch }) => (
  <Result
    status="success"
    title="Successfully submitted!"
    subTitle="We will contact you in a short time."
    extra={[
      <Button
        type="primary"
        key="console"
        onClick={() => dispatch(routerRedux.push("/"))}
      >
        Go to homepage
      </Button>,
    ]}
  />
));
