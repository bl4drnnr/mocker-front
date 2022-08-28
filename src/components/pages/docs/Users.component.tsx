import React from 'react';

import classNames from 'classnames';

import EndpointDescription from '@components/pages/common/EndpointDescription.component';
import { Text, Title, CodeSpan } from '@styles/common/common.styles';

interface UsersTodos {
  usersRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
  quantityOfRecords: number | string
}

const Users = React.forwardRef(({
  usersRef,
  title,
  url,
  description,
  quantityOfRecords
}: UsersTodos, ref) => (
  <>
    <Title ref={usersRef}>Users</Title>
    <Text><strong>Users</strong>{title}</Text>
    <Text>{description}</Text>

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/user/list?dates={dates}`}
      requestUrl={`${url}/user/list`}
      params={
        <span>
          <CodeSpan className={classNames({ secondary: true })}
          >dates</CodeSpan>- optional parameter that allows to get records without<CodeSpan className={classNames({ secondary: true })}
          >createdAt</CodeSpan>and<CodeSpan className={classNames({ secondary: true })}
          >updatedAt</CodeSpan> fields.
        </span>
      }
      paramsTypes={
        <span><CodeSpan className={classNames({ secondary: true })}>dates?: boolean</CodeSpan></span>
      }
      description={'Resource allows to get list of all users.'}
      quantityOfRecords={quantityOfRecords}
      responseType={
        <CodeSpan className={classNames({ secondary: true })}
          >Array&#60;&#123;id: number, firstName: string, lastName: string, createdAt?: Date, updatedAt?: Date&#125;&#62;
        </CodeSpan>
      }
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
      responseType={
        <CodeSpan className={classNames({ secondary: true })}
          >&#123;id: number, firstName: string, lastName: string, createdAt: Date, updatedAt: Date&#125;
        </CodeSpan>
      }
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
          Params of<CodeSpan className={classNames({ secondary: true })}>skip
          </CodeSpan>and<CodeSpan className={classNames({ secondary: true })}>take
          </CodeSpan>must be provided together or not provided at all. Param<CodeSpan className={classNames({ secondary: true })}>count
          </CodeSpan>is optional.
        </span>
      }
      paramsTypes={
        <span>
          <CodeSpan className={classNames({ secondary: true })}>skip?: number</CodeSpan>
          <CodeSpan className={classNames({ secondary: true })}>take?: number</CodeSpan>
          <CodeSpan className={classNames({ secondary: true })}>count?: boolean</CodeSpan>
        </span>
      }
      quantityOfRecords={'-'}
      responseType={''}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/post?skip=3&take=2\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Users.displayName = 'Users';

export default Users;
