import React from 'react';

import styled from 'styled-components';

import CodeBlock from '@components/pages/common/CodeBlock.component';
import JsonBlock from '@components/pages/common/JsonData.component';
import Button from '@components/UI/Button/Button';
import FetchService from '@services/fetch';

interface TryItProps {
  codeLines: string[]
  endpoint: string
}

const TryItWrapper = styled.div`
  width: 650px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const TryItButtonWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TryIt = ({ codeLines, endpoint }: TryItProps) => {
  const [data, setData] = React.useState<Array<any>>();

  const fetchData = async (option: string) => {
    if (option === 'Try it now') {
      const result = await FetchService.get(endpoint);
      setData(result);
    } else {
      setData([]);
    }
  };

  return (
    <TryItWrapper>
      <CodeBlock secondary={true} codeLines={codeLines} />

      <TryItButtonWrapper>
        <Button
          text={data?.length ? 'Hide' : 'Try it now'}
          onClick={() => fetchData(data?.length ? 'Hide' : 'Try it now')}
        />
      </TryItButtonWrapper>

      {data?.length ? (
        <JsonBlock data={JSON.stringify(data)} />
      ) : null}
    </TryItWrapper>
  );
};

export default TryIt;
