import React from 'react';

import EndpointDescription from '@components/pages/common/EndpointDescription.component';
import JsonData from '@components/pages/common/JsonData.component';
import { Text, Title, CodeSpanDocs } from '@styles/common/common.styles';

interface UsersTodos {
  usersRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
  entity: string
  quantityOfRecords: number | string
}

const Users = React.forwardRef(({
  usersRef,
  title,
  url,
  description,
  entity,
  quantityOfRecords
}: UsersTodos, ref) => (
  <>
    <Title ref={usersRef}>Users</Title>
    <Text><strong>Users </strong>{title}</Text>
    <Text>{description}</Text>
    <Text><CodeSpanDocs>User</CodeSpanDocs>{entity}</Text>
    <JsonData data={'' +
      '    {"id": "number",\n' +
      '    "firstName": "string",\n' +
      '    "lastName": "string",\n' +
      '    "createdAt": "Date",\n' +
      '    "updatedAt": "Date"}'
    }/>

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/user/list?dates={dates}`}
      requestUrl={`${url}/user/list`}
      params={
        <span>
          <CodeSpanDocs>dates</CodeSpanDocs>- optional parameter that allows to get records without
          <CodeSpanDocs>createdAt</CodeSpanDocs>and<CodeSpanDocs>updatedAt</CodeSpanDocs>fields.
        </span>
      }
      paramsTypes={<span><CodeSpanDocs>dates?: boolean</CodeSpanDocs></span>}
      description={'Resource allows to get list of all users.'}
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>Array&#60;User&#62;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/user/list\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/user/:id`}
      requestUrl={`${url}/user/1`}
      description={'Resource allows to get one record - user - by id.'}
      params={'None.'}
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>User</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/user/1\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/user?skip={skip}&take={take}&count={count}`}
      requestUrl={`${url}/user?skip=3&take=2&count=true`}
      description={'Resource allows to get list of users with pagination.'}
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
      responseType={<CodeSpanDocs>Array&#60;User&#62; | &#123;rows: Array&#60;User&#62;, count: number&#125;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/user?skip=3&take=2\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Users.displayName = 'Users';

export default Users;
