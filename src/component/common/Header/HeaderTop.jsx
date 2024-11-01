import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a href="/">درباره ما</a>,
    key: '0',
  },
  {
    label: <a href="/Connect">ارتباط با ما</a>,
    key: '1',
  },
  {
    type: 'ارتباط با ما',
  },
  {
    label: <a href="/Connect"> سوالات متداول</a> ,
    key: '3',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className='text-lg font-sans text-black dark:text-white'>
        لینک های مفید
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;