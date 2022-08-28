import React from 'react';

import JsonData from '@components/pages/common/JsonData.component';
import { CodeSpanDocs, Text, Title } from '@styles/common/common.styles';

interface PostsProps {
  postRef: React.RefObject<HTMLParagraphElement>
  title: string
  url: string
  description: string
  entity: string
  quantityOfRecords: number | string
}

const Posts = React.forwardRef(({
  postRef,
  title,
  url,
  description,
  entity,
  quantityOfRecords
}: PostsProps, ref) => (
  <>
    <Title ref={postRef}>Posts</Title>
    <Text><strong>Posts </strong>{title}</Text>
    <Text>{description}</Text>
    <Text><CodeSpanDocs>Post</CodeSpanDocs>{entity}</Text>
    <JsonData data={'' +
      '    {"id": "number",\n' +
      '    "firstName": "string",\n' +
      '    "lastName": "string",\n' +
      '    "createdAt": "Date",\n' +
      '    "updatedAt": "Date"}'
    }/>
  </>
));

Posts.displayName = 'Posts';

export default Posts;
