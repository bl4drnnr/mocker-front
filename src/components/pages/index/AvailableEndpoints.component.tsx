import React from 'react';

import classNames from 'classnames';

import EndpointTable from '@components/pages/index/EndpointTable.component';
import { Text, Title } from '@styles/common/common.styles';
import { Content } from '@styles/pages/index.styles';

interface AvailableEndpointsProps {
  title: string
  availableEndpoints: string
  relation: string
  quantity: string
  endpoints: Array<{ endpoint: string, count: number }>
}

const AvailableEndpoints = ({
  title,
  availableEndpoints,
  relation,
  quantity,
  endpoints
}: AvailableEndpointsProps) => {
  return (
    <>
      <Title className={classNames({ contentTitle: true })}>
        {title}
      </Title>

      <Content>
        <Text>{availableEndpoints}</Text>
        <Text>{relation}</Text>

        <EndpointTable
          quantity={quantity}
          endpoints={endpoints}
        />
      </Content>
    </>
  );
};

export default AvailableEndpoints;
