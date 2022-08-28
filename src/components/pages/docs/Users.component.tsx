import React from 'react';

import EndpointDescription from '@components/pages/common/EndpointDescription.component';
import { Text, Title } from '@styles/common/common.styles';

interface UsersTodos {
  usersRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
}

const Users = React.forwardRef(({
  usersRef,
  title,
  url,
  description
}: UsersTodos, ref) => (
  <>
    <Title ref={usersRef}>Users</Title>
    <Text><strong>Users</strong>{title}</Text>
    <Text>{description}</Text>

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/user/list`}
      optionalParams={'?dates=true - allows to get records with createdAt and updatedAt fields'}
      description={'Resource allows to get list of all users.'}
      quantityOfRecords={20}
      responseType={'Array<{ id: number, firstName: string, lastName: string, createdAt?: Date, updatedAt?: Date }>'}
    />
  </>
));

Users.displayName = 'Users';

export default Users;
