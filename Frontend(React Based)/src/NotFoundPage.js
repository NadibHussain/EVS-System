import React, { Component } from 'react'
import { Empty } from 'antd';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
          <br />
          <br />
        <Empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" 
                description={
                    <span>
                        No data Found
                    </span>
                  }
        />
      </div>
    )
  }
}
