import React from 'react';
import { useParams } from 'react-router-dom';
import { useBoardDetailQuery } from './hooks/userBoardDetailQuery';
import { Avatar, Button, Form, Image, Input, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Typography } from 'antd';
import dayjs from 'dayjs';

const { Title } = Typography;

function FreeBoardDetail() {
  const { id } = useParams();

  const [form] = useForm();

  const { data, isLoading } = useBoardDetailQuery(id!);

  console.log(data);

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Form form={form}>
        <Form.Item name="title">
          <Title level={2}>{data.title}</Title>
        </Form.Item>
        <Form.Item name="user-info">
          <Avatar style={{ marginRight: '8px' }} icon={<Image src={data.user.avatar_url} />} />
          <span style={{ marginRight: '8px' }}>{data.user.login}</span>
          <span>{dayjs(data.created_at).format('YYYY-MM-DD HH:mm:ss')}</span>
        </Form.Item>
        <Form.Item name="body">
          <Input.TextArea maxLength={10} value={data.body} autoSize={{ minRows: 3, maxRows: 5 }} />
          {/*<div dangerouslySetInnerHTML={{ __html: data.body }} />*/}
        </Form.Item>
      </Form>
      <Input.TextArea maxLength={10} value={data.body} autoSize={{ minRows: 20 }} />

      <Space style={{ marginTop: '8px' }}>
        <Button type="primary">수정</Button>
        <Button>삭제</Button>
      </Space>
    </>
  );
}

export default FreeBoardDetail;
