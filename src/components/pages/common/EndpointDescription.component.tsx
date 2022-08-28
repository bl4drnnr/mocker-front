import React from 'react';

import TryIt from '@components/pages/common/TryIt.component';
import { Text, Link } from '@styles/common/common.styles';

interface EndpointDescriptionProps {
  method: string
  endpoint: string
  requestUrl: string
  description: string
  params: React.ReactElement | string
  paramsTypes?: React.ReactElement | string
  quantityOfRecords: number | string
  responseType: React.ReactElement | string
  codeLines: string[]
}

const EndpointDescription = ({
  endpoint,
  requestUrl,
  description,
  params,
  quantityOfRecords,
  paramsTypes,
  responseType,
  method,
  codeLines
}: EndpointDescriptionProps) => {

  const handleEndpoint = async () => {
    window.open(requestUrl, '_blank');
  };

  return (
    <div>
      <Text><strong>Method: </strong>{method}</Text>
      <Text onClick={() => handleEndpoint()}>
        <strong>Endpoint: </strong>
        <Link>{endpoint.split('api')[1]}</Link>
      </Text>
      <Text><strong>Description: </strong>{description}</Text>
      <Text><strong>Quantity of all records: </strong>{quantityOfRecords}</Text>
      <Text><strong>Query parameters: </strong>{params}</Text>
      {paramsTypes ? (
        <Text><strong>Query parameters types: </strong>{paramsTypes}</Text>
      ) : null}
      <Text><strong>Response type: </strong> {responseType}</Text>
      <TryIt codeLines={codeLines} endpoint={requestUrl}/>
    </div>
  );
};

export default EndpointDescription;
