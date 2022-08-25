import React from 'react';

import classNames from 'classnames';

import { LinkTd } from '@styles/common/common.styles';
import { Table } from '@styles/pages/index.styles';

interface EndpointTableProps {
  quantity: string
  endpoints: Array<{ endpoint: string, count: number }>
}

const EndpointTable = ({
  quantity,
  endpoints
}: EndpointTableProps ) => {
  return (
    <Table>
      <thead>
      <tr>
        <th>Endpoint</th>
        <th>{quantity}</th>
      </tr>
      </thead>
      <tbody>
      {endpoints.map(item => (
        <tr key={item.endpoint}>
          <LinkTd className={classNames({ tableLink: true })}>/{item.endpoint}</LinkTd>
          <td>{item.count}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
};

export default EndpointTable;
