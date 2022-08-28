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

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/todo/:id`}
      requestUrl={`${url}/todo/5`}
      description={'Resource allows to get one record - todo - by id.'}
      params={'None.'}
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>Todo</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/todo/1\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/todo?skip={skip}&take={take}&count={count}`}
      requestUrl={`${url}/todo?skip=3&take=2&count=true`}
      description={'Resource allows to get list of todos with pagination.'}
      params={
        <span>
          Params of<CodeSpanDocs>skip</CodeSpanDocs>and<CodeSpanDocs>take
          </CodeSpanDocs>must be provided together or not provided at all. Param<CodeSpanDocs>count
          </CodeSpanDocs>is optional.
        </span>
      }
      paramsTypes={
        <span>
          <CodeSpanDocs>skip?: number</CodeSpanDocs>
          <CodeSpanDocs>take?: number</CodeSpanDocs>
          <CodeSpanDocs>count?: boolean</CodeSpanDocs>
        </span>
      }
      quantityOfRecords={'-'}
      responseType={<CodeSpanDocs>Array&#60;Todo&#62; | &#123;rows: Array&#60;Todo&#62;, count: number&#125;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/todo?skip=3&take=2\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Todos.displayName = 'Todos';

export default Todos;
