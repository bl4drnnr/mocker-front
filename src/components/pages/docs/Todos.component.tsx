import React from 'react';

import JsonData from '@components/pages/common/JsonData.component';
import { CodeSpanDocs, Text, Title } from '@styles/common/common.styles';

interface TodoProps {
  todoRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
  entity: string
  quantityOfRecords: number | string
}

const Todos = React.forwardRef(({
  todoRef,
  title,
  url,
  description,
  entity,
  quantityOfRecords
}: TodoProps, ref) => (
  <>
    <Title ref={todoRef}>Todos</Title>
    <Text><strong>Todos </strong>{title}</Text>
    <Text>{description}</Text>
    <Text><CodeSpanDocs>Todo</CodeSpanDocs>{entity}</Text>
    <JsonData data={'' +
      '    {"id": "number",\n' +
      '    "firstName": "string",\n' +
      '    "lastName": "string",\n' +
      '    "createdAt": "Date",\n' +
      '    "updatedAt": "Date"}'
    }/>
  </>
));

Todos.displayName = 'Todos';

export default Todos;
