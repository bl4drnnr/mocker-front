import React from 'react';

import { Code, CodeLine } from '@styles/common/common.styles';

interface CodeBlockProps {
  codeLines: string[]
}

const CodeBlock = ({
 codeLines
}: CodeBlockProps) => {
  return (
    <Code>
      {codeLines.map((item, i) => (
        <CodeLine key={i}>{item}</CodeLine>
      ))}
    </Code>
  );
};

export default CodeBlock;
