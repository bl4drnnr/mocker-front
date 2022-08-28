import React from 'react';

import TryIt from '@components/pages/common/TryIt.component';
import { Text, Link } from '@styles/common/common.styles';

interface EndpointDescriptionProps {
  method: string
  endpoint: string
  requestUrl: string
  description: string
  optionalParams: string
  quantityOfRecords: number | string
  responseType: string
  codeLines: string[]
}

const EndpointDescription = ({
  endpoint,
  requestUrl,
  description,
  optionalParams,
  quantityOfRecords,
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
      <Text><strong>Optional query parameters: </strong>{optionalParams}</Text>
      <Text><strong>Response type: </strong> {responseType}</Text>
      <TryIt codeLines={codeLines} endpoint={requestUrl}/>
    </div>
  );
};

export default EndpointDescription;
