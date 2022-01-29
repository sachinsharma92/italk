import { Col, Row } from 'antd';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const HeaderPrimary = () => {
  function callback(key) {
    console.log(key);
  }

  return <div>
    <Row>
      <Col sm={6}>
        Logo
      </Col>
      <Col sm={12}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Col>
      <Col sm={6}>
        Others
      </Col>
    </Row>
  </div>;
};

export default HeaderPrimary;
