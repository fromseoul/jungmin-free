import React, { useMemo, Suspense } from 'react';
import { Avatar, Button, Image, Input, Select, Space, Table, theme, Typography } from 'antd';
import type { ColumnsType, TableProps as AntdTableProps } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useBoardsQuery } from '@/pages/FreeBoards/hooks/useBoardsQuery';
import dayjs from 'dayjs';
import { Link, Route, Routes } from 'react-router-dom';
import FreeBoards from '@/pages/FreeBoards';
import FreeBoardDetail from '@/pages/FreeBoards/FreeBoardDetail';

const { Search } = Input;

function App() {
  return (
    <Suspense fallback={<div style={{ fontSize: 200 }}>test</div>}>
      <Routes>
        <Route path="/" element={<FreeBoards />} />
        <Route path=":id" element={<FreeBoardDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
