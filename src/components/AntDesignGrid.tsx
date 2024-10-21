import React from 'react';
import { Table } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
}

interface AntDesignGridProps {
  data: DataType[];
  onChange: (pagination: any, filters: any, sorter: any) => void;
}

const AntDesignGrid: React.FC<AntDesignGridProps> = ({ data, onChange }) => {
  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Возраст',
      dataIndex: 'age',
      sorter: true,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default AntDesignGrid;
