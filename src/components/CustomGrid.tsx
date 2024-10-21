import React, { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
}

interface CustomGridProps {
  data: DataType[];
}

const CustomGrid: React.FC<CustomGridProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleSort = (key: keyof DataType) => {
    data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  };

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Имя</th>
            <th onClick={() => handleSort('age')}>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Предыдущая</button>
      <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / pageSize)))}>Следуюшщая</button>
    </div>
  );
};

export default CustomGrid;
