import React, { useMemo } from 'react';
import { Avatar, Button, Image, Input, Select, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useBoardsQuery } from './hooks/useBoardsQuery';
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';

const { Search } = Input;

function App() {
  const { data, isLoading } = useBoardsQuery();

  console.log(data);

  const navigate = useNavigate();

  const onTitleClick = (url: string) => () => {
    const id = url.split('/').pop();
    navigate(`${id}`);
  };

  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'number',
      width: 100,
      defaultSortOrder: 'descend',
    },
    {
      title: '제목',
      dataIndex: 'title',
      // render: (title: string, record: any) => <Link to={`/${record.url}`}>{title}</Link>,
      render: (title: string, record: any) => (
        <Button type="link" onClick={onTitleClick(record.url)}>
          {title}
        </Button>
      ),
    },
    {
      title: '작성자',
      dataIndex: 'user',
      render: (user: any) => (
        <>
          <Avatar style={{ marginRight: '8px' }} icon={<Image src={user.avatar_url} />} />
          <span>{user.login}</span>
        </>
      ),
    },
    {
      title: '작성일',
      dataIndex: 'created_at',
      render: (created_at: string) => dayjs(created_at).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];

  const onSearch = () => {};

  const onCreate = () => {};

  return (
    <>
      <StyledSpace>
        <Space>
          <Select
            // defaultValue={searchParams.get('activated')}
            // value={searchParams.get('activated')}
            style={{ width: 100 }}
            options={[
              { value: 'title', label: '제목' },
              { value: 'content', label: '내용' },
            ]}
          />
          <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
          <Button type="primary">검색</Button>
        </Space>
        <Button onClick={onCreate} icon={<PlusOutlined />}>
          글쓰기
        </Button>
      </StyledSpace>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
      />
    </>
  );
}

export default App;

const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
