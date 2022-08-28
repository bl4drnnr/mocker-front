import React from 'react';

import JsonData from '@components/pages/common/JsonData.component';
import { CodeSpanDocs, Text, Title } from '@styles/common/common.styles';
import EndpointDescription from "@components/pages/common/EndpointDescription.component";

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
      '    "title": "string",\n' +
      '    "completed": "boolean",\n' +
      '    "createdAt": "Date",\n' +
      '    "updatedAt": "Date"}'
    }/>

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/todo/list?dates={dates}`}
      requestUrl={`${url}/todo/list`}
      description={'Resource allows to get list of all todos'}
      params={
        <span>
          <CodeSpanDocs>dates</CodeSpanDocs>- optional parameter that allows to get records without
          <CodeSpanDocs>createdAt</CodeSpanDocs>and<CodeSpanDocs>updatedAt</CodeSpanDocs>fields.
        </span>
      }
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>Array&#60;Todo&#62;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/todo/list\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Todos.displayName = 'Todos';

export default Todos;
