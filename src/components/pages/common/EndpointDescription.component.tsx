import React from 'react';

import TryIt from '@components/pages/common/TryIt.component';
import { Text, Link } from '@styles/common/common.styles';

interface EndpointDescriptionProps {
  method: string
  endpoint: string
  description: string
  optionalParams: string
  quantityOfRecords: number
  responseType: string
}

const EndpointDescription = ({
  endpoint,
  description,
  optionalParams,
  quantityOfRecords,
  responseType,
  method
}: EndpointDescriptionProps) => {

  const handleEndpoint = async () => {
    window.open(endpoint, '_blank');
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
      <TryIt codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/user/list\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
        ]}
       endpoint={endpoint}
      />
    </div>
  );
};

export default EndpointDescription;
