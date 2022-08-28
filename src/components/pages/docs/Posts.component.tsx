import React from 'react';

import JsonData from '@components/pages/common/JsonData.component';
import { CodeSpanDocs, Text, Title } from '@styles/common/common.styles';
import EndpointDescription from "@components/pages/common/EndpointDescription.component";

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
      '    "title": "string",\n' +
      '    "content": "string",\n' +
      '    "preview": "string",\n' +
      '    "createdAt": "Date",\n' +
      '    "updatedAt": "Date"}'
    }/>

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/post/list?dates={dates}`}
      requestUrl={`${url}/post/list`}
      params={
        <span>
          <CodeSpanDocs>dates</CodeSpanDocs>- optional parameter that allows to get records without
          <CodeSpanDocs>createdAt</CodeSpanDocs>and<CodeSpanDocs>updatedAt</CodeSpanDocs>fields.
        </span>
      }
      paramsTypes={<span><CodeSpanDocs>dates?: boolean</CodeSpanDocs></span>}
      description={'Resource allows to get list of all posts.'}
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>Array&#60;Post&#62;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/post/list\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Posts.displayName = 'Posts';

export default Posts;
