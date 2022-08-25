import React from 'react';

import classNames from 'classnames';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Title, Text } from '@styles/common/common.styles';
import { ContentSidebar, SidebarLink, Wrapper } from '@styles/pages/docs.styles';

const Docs = () => {
  const { t } = useTranslation();

  const [sections, setSections] = React.useState([
    { value: 'Introduction', active: false },
    { value: 'Posts', active: false },
    { value: 'Todos', active: false },
    { value: 'Users', active: false },
  ]);
  const introRef = React.useRef<HTMLParagraphElement>(null);
  const postsRef = React.useRef<HTMLParagraphElement>(null);
  const todosRef = React.useRef<HTMLParagraphElement>(null);
  const usersRef = React.useRef<HTMLParagraphElement>(null);
  const observer = React.useRef<IntersectionObserver | null>(null);
  const refs = [introRef, postsRef, todosRef, usersRef];

  const executeScroll = (ref: string) => {
    refs.forEach(item => {
      if (item.current?.outerText === ref) {
        item.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  React.useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const newSections = sections.map(item => ({ ...item, active: false }));
      sections.forEach((item, idx) => {
        newSections[idx].active = item.value === entries[0].target.innerHTML;
      });
      setSections(newSections);
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(introRef.current as Element);
    observer.current.observe(postsRef.current as Element);
    observer.current.observe(todosRef.current as Element);
    observer.current.observe(usersRef.current as Element);
  }, []);

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        colorChangePx: 0
      }}
    >
      <ContentSidebar>
        {sections.map((section) => (
          <SidebarLink
            className={classNames({ active: section.active })}
            key={section.value}
            onClick={() => executeScroll(section.value)}
          >{section.value}
          </SidebarLink>
        ))}
      </ContentSidebar>
      <Wrapper>
        <Title ref={introRef}>Introduction</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Title ref={postsRef}>Posts</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Title ref={todosRef}>Todos</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Title ref={usersRef}>Users</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cum cumque, dolore eligendi eveniet in incidunt iste quaerat quidem, quis quo sit tempora tempore totam velit voluptatem voluptates? Amet animi illum nulla odio. Aperiam at cumque dolorum eos, harum ipsum nostrum officiis! Aliquam consequuntur libero nihil nobis vel. A consequatur eaque explicabo laudantium officia quae! Asperiores aspernatur autem cumque delectus deleniti ducimus earum excepturi facilis, id illum impedit in inventore ipsum iusto laboriosam libero, minima minus neque nisi nobis officiis pariatur quia quos repellat sit unde vel voluptatem! A dignissimos ducimus eaque eveniet exercitationem expedita, id mollitia soluta veritatis.</Text>
      </Wrapper>
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
