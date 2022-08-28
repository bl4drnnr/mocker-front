import React from 'react';

import classNames from 'classnames';

import { Code, JsonBlock } from '@styles/common/common.styles';

interface JsonDataProps {
  data: string
}

const JsonData = ({ data }: JsonDataProps) => {
  return (
    <Code className={classNames({ secondary: true })}>
      <JsonBlock>{JSON.stringify(JSON.parse(data), null, 2)}</JsonBlock>
    </Code>
  );
};

export default JsonData;
