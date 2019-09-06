import React from 'react';
import { List, Icon, Row, Col } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;


 // eslint-disable-next-line 
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
         

const ResultLayout = (props) => {
     return(
       <div>
         {/* <h3 className="text-center"> Election Result </h3> */}
      <List
      grid={{ 
        gutter: 16,
         column: 4}}
      dataSource={props.result}
      renderItem={item => (
        <List.Item style={{ padding: 0, margin:10 }}>
            {/* if height problem then set card height to 
            style={{ width: 260, height: 350, padding: 0, margin:0 }}  */}
            <Card
              hoverable
              style={{ width: 260, height: 350, padding: 0, margin:0 }}
              cover={<img alt="example" src= {item.url} style={{ height: 150 }} />}
            >
             <Meta
                description = {<div><h6 className=" text-success">{item.name}</h6> <p className="font-weight-bold" >{"Id: " + item.membershipId}</p></div>} 
                title =  {item.count ?
                                      <Row >
                                        <Col xs={12}>Total Vote Count:</Col>
                                        <Col xs = {20} className="text-right display-4 text-danger" ><div style={{ marginTop: 0, padding:0 }}>{item.count}</div></Col>
                                      </Row> 
                                    :
                                    <Row >
                                        <Col xs={12}>Total Vote Count:</Col>
                                        <Col xs = {20} className="text-right display-4 text-danger" ><div style={{ marginTop: 0, padding: 0 }}>{item.count}</div></Col>
                                      </Row> 
                                    } 
            
              /> 
            </Card>
        </List.Item>
      )}
    />
    </div>
     )
 }

export default ResultLayout;