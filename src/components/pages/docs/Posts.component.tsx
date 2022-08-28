import React from 'react';

import { Text, Title } from '@styles/common/common.styles';

interface PostsProps {
  postRef: React.RefObject<HTMLParagraphElement>
  quantityOfRecords: number
  title: string
  description: string
  url: string
}

const Posts = React.forwardRef(({ postRef }: PostsProps, ref) => (
  <>
    <Title ref={postRef}>Posts</Title>
  </>
));

Posts.displayName = 'Posts';

export default Posts;
