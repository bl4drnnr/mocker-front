import React from 'react';

import classNames from 'classnames';

import { Code, CodeLine } from '@styles/common/common.styles';

interface CodeBlockProps {
  codeLines: string[]
  secondary?: boolean
}

const CodeBlock = ({
 codeLines,
 secondary
}: CodeBlockProps) => {
  return (
    <Code className={classNames({ secondary })}>
      {codeLines.map((item, i) => (
        <CodeLine key={i}>{item}</CodeLine>
      ))}
    </Code>
  );
};

export default CodeBlock;
