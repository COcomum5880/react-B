import React, { Component } from "react";
import { Button, Tooltip, Alert, Table } from "antd";
import {
  PlusOutlined,
  FullscreenOutlined,
  ReloadOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./index.less";

export default class List extends Component {
    render() {
        return (
            <div className="chapter-list">
              <div className="chapter-list-header">
                  <h5>课程章节列表</h5>
                  <div>
                      <Button type="primary">
                          <PlusOutlined />
                          新增
                      </Button>
                      <Button type="danger">批量删除</Button>
                      <Tooltip title="全屏">
                         <FullscreenOutlined />
                      </Tooltip>
                      <Tooltip title="刷新">
                         <ReloadOutlined />
                      </Tooltip>
                      <Tooltip title="设置">
                         <SettingOutlined />
                      </Tooltip>
                  </div>
              </div>
              <Alert message="已选择 0 项" type="info" showIcon />
              <Table
              className="chapter-list-table"
                  columns={[]} // 决定列头
                  expandable={
                      {
                        // 内部默认会使用children作为展开的子菜单
                        // 也就是说，如果要展开的数据有children属性，才会有展开图标，就会作为子菜单展开~
                        // 负责展开行
                        // 展开哪些行？[行的key值, 行的key值...]
                        // [_id, _id]
                        // expandedRowKeys,
                        // 展开行触发的方法。
                        // 将展开的行[1, 2, 3]作为参数传入
                        // onExpandedRowsChange: this.handleExpandedRowsChange,
                      }
                  }
                  dataSource={[]} 
                  rowKey="_id" 
                  pagination={{
                      showQuickJumper: true, 
                      showSizeChanger: true,
                      pageSizeOptions: ["5", "10", "15", "20"],
                      defaultPageSize: 10,
                  }}
              />
          </div>
        );
    }
}
