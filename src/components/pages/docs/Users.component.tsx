import React from 'react';

import EndpointDescription from '@components/pages/common/EndpointDescription.component';
import { Text, Title } from '@styles/common/common.styles';

interface UsersTodos {
  usersRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
  quantityOfRecords: number
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
      endpoint={`${url}/user/list`}
      requestUrl={`${url}/user/list`}
      optionalParams={'?dates=true - allows to get records with createdAt and updatedAt fields.'}
      description={'Resource allows to get list of all users.'}
      quantityOfRecords={quantityOfRecords}
      responseType={'Array<{ id: number, firstName: string, lastName: string, createdAt?: Date, updatedAt?: Date }>'}
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
      optionalParams={'None.'}
      quantityOfRecords={quantityOfRecords}
      responseType={'{ id: number, firstName: string, lastName: string, createdAt: Date, updatedAt: Date }'}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/user/1\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Users.displayName = 'Users';

export default Users;
