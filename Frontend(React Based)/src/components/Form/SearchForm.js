import React from 'react';
import { Button, Input, Form } from 'antd';



const SearchForm = (props) => {
  return (
    <Form onSubmit={props.getMember} layout="inline">
      <Form.Item>
      <Input
            type="text" 
            name="memberid" 
            placeholder="Please enter Membership Id"
            required />
      </Form.Item>
      <Form.Item>
      <Button icon="search" htmlType="submit" >Search</Button>
      </Form.Item>
    </Form>
  );
}

export default SearchForm;