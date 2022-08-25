import React from 'react';

import { Text, Title } from '@styles/common/common.styles';

interface PostsProps {
  postRef: React.RefObject<HTMLParagraphElement>
}

const Posts = React.forwardRef(({ postRef }: PostsProps, ref) => (
  <>
    <Title ref={postRef}>Posts</Title>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
  </>
));

Posts.displayName = 'Posts';

export default Posts;
