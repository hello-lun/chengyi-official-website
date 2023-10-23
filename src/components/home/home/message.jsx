import { message, Button, Drawer, Form, Input } from 'antd';
import React, { useState, useRef, useContext } from "react";
import http from '../../../utils/http';
import { MyContext } from '../../../store';

const { TextArea } = Input;

const Message = () => {
  const [msg, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { storeData, setStoreData } = useContext(MyContext);

  const onClose = () => {
    setStoreData({
      ...storeData,
      messageOpen: false,
    });
    formRef.current.resetFields();
  }
  const onFinish = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      await http({
        method: 'post',
        url: '/message/email',
        data: {
          html: `<div>
            <h3>Name: ${data.name}</h3>
            <h4>Contact information: ${data.information}</h4>
            <p style="margin-top: 30px; font-size: 20px; color: orange;">${data.message || '✔官网邮件发送测试'}</p>
          </div>`,
          subject: 'chengyi（成益）跨境贸易公司',
          to: storeData.email,
        }
      });
      message.success('send message success') 
    } catch(e) {
      message.error('send message error') 
    } finally {
      setLoading(false);
    }
  }
  const onFinishFailed = () => {}

  return <Drawer
    title="Send Message"
    placement="right"
    onClose={onClose}
    open={storeData.messageOpen}
    width={400}
  >
    <Form
      ref={formRef}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact information"
        name="information"
        rules={[{ required: true, message: 'Please input Contact information!' }]}
      >
        <Input placeholder="example: whatsapp 123456789 / tel 888888" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <TextArea rows={4} placeholder="Please input your message" maxLength={2000} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading} style={{backgroundColor: 'var(--tp-theme-secondary)'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Drawer>
}

export default Message;