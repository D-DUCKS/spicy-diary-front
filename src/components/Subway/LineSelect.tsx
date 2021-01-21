import React from 'react';
import { Select } from 'antd';

interface Props {
  onChange: (e: string) => void;
}

const LineSelect: React.FC<Props> = ({ onChange }: Props) => {
  const { Option } = Select;

  return (
    <Select
      showSearch
      style={{ width: 200, cursor: 'pointer' }}
      bordered={false}
      placeholder="호선을 선택하세요"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      defaultValue={'1'}
    >
      <Option value="1">1호선</Option>
      <Option value="2">2호선</Option>
      <Option value="3">3호선</Option>
      <Option value="4">4호선</Option>
      <Option value="5">5호선</Option>
      <Option value="6">6호선</Option>
      <Option value="7">7호선</Option>
      <Option value="8">8호선</Option>
      <Option value="9">9호선</Option>
      <Option value="B">분당선</Option>
      <Option value="S">신분당선</Option>
    </Select>
  );
};

export default LineSelect;
