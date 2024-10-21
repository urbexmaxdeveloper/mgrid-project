import React, { useState } from 'react';
import AntDesignGrid from './AntDesignGrid';
import CustomGrid from './CustomGrid';
import { data } from '../utils/data';
import { useCustomGrid } from '../utils/configGrid';

const GridSwitcher: React.FC = () => {
  
  return (
    <div>     
      {/* относительно значения переменной выбираем что рендерить */}
      {!useCustomGrid() ? (
        <AntDesignGrid data={data} onChange={() => {}} />
      ) : (
        <CustomGrid data={data} />
      )}
    </div>
  );
};

export default GridSwitcher;
