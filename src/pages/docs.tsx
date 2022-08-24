import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Title, Text } from '@styles/common/common.styles';
import { ContentSidebar, SidebarLink, Wrapper } from '@styles/pages/docs.styles';
import classNames from "classnames";


const Docs = () => {
  const { t } = useTranslation();

  const myRefs = React.useRef<React.MutableRefObject<any>[]>([]);
  const [sections, setSections] = React.useState([{
    refValue: 'intro', title: 'Introduction'
  }, {
    refValue: 'post', title: 'Posts'
  }, {
    refValue: 'todos', title: 'Todos'
  }, {
    refValue: 'users', title: 'Users'
  }]);

  const executeScroll = (ref: number) => {
    myRefs.current[ref].current.scrollIntoView();
  };

  React.useEffect(() => {
    myRefs.current = sections.map((element, i) => myRefs.current[i] ?? React.createRef());
  }, []);

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        colorChangePx: 0
      }}
    >
      <>
        <ContentSidebar>
          {sections.map((section, i) => (
            <SidebarLink
              className={classNames({ active: true })}
              key={section.title}
              onClick={() => executeScroll(i)}
            >{section.title}
            </SidebarLink>
          ))}
        </ContentSidebar>
        <Wrapper>
          <Title ref={myRefs.current[0]}>Introduction</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Title ref={myRefs.current[1]}>Posts</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Title ref={myRefs.current[2]}>Todos</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Title ref={myRefs.current[3]}>Users</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        </Wrapper>
      </>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['pages', 'components'])),
  },
});

export default Docs;
