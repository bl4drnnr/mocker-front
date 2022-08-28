import React from 'react';

import EndpointDescription from '@components/pages/common/EndpointDescription.component';
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

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/post/:id`}
      requestUrl={`${url}/post/3`}
      description={'Resource allows to get one record - post - by id.'}
      params={'None.'}
      quantityOfRecords={quantityOfRecords}
      responseType={<CodeSpanDocs>Post</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/post/3\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />

    <EndpointDescription
      method={'GET'}
      endpoint={`${url}/post?skip={skip}&take={take}&count={count}`}
      requestUrl={`${url}/post?skip=3&take=2&count=true`}
      description={'Resource allows to get list of posts with pagination.'}
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
      responseType={<CodeSpanDocs>Array&#60;Post&#62; | &#123;rows: Array&#60;Post&#62;, count: number&#125;</CodeSpanDocs>}
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/post?skip=3&take=2\')',
        '.then(response => response.json())',
        '.then(json => console.log(json))'
      ]}
    />
  </>
));

Posts.displayName = 'Posts';

export default Posts;
