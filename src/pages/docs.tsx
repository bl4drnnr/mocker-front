import React from 'react';

import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Introduction from '@components/pages/docs/Introduction.component';
import Posts from '@components/pages/docs/Posts.component';
import Sidebar from '@components/pages/docs/Sidebar.component';
import Todos from '@components/pages/docs/Todos.component';
import Users from '@components/pages/docs/Users.component';
import Default from '@layouts/Default';
import { Wrapper } from '@styles/pages/docs.styles';

interface DocsProps {
  url: string
  locale: string
  endpoints: Array<{ endpoint: string, count: number }>
}

const Docs: NextPage<DocsProps> = ({ url, endpoints, locale }) => {
  const { t } = useTranslation();

  const [sections, setSections] = React.useState([
    { value: 'Introduction', active: false },
    { value: 'Users', active: false },
    { value: 'Posts', active: false },
    { value: 'Todos', active: false },
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
        defaultLanguage: locale,
        colorChangePx: 0
      }}
      footer={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        rights: t('common:right')
      }}
    >
      <Sidebar
        sections={sections}
        executeScroll={executeScroll}
      />
      <Wrapper>
        <Introduction
          introRef={introRef}
          title={t('pages:docs.introduction.title')}
          description={t('pages:docs.introduction.description')}
          endpointDefault={t('pages:docs.introduction.endpointDefault')}
          docsReference={t('pages:docs.introduction.docsReference')}
          generics={t('pages:docs.introduction.generics')}
          url={url}
        />
        <Users
          usersRef={usersRef}
          quantityOfRecords={endpoints[0].count}
          title={t('pages:docs.users.title')}
          description={t('pages:docs.users.description')}
          entity={t('pages:docs.users.entity')}
          url={url}
          relations={t('pages:docs.users.relations')}
        />
        <Posts
          postRef={postsRef}
          quantityOfRecords={endpoints[1].count}
          title={t('pages:docs.posts.title')}
          description={t('pages:docs.posts.description')}
          entity={t('pages:docs.posts.entity')}
          url={url}
        />
        <Todos
          todoRef={todosRef}
          quantityOfRecords={endpoints[2].count}
          title={t('pages:docs.todos.title')}
          description={t('pages:docs.todos.description')}
          entity={t('pages:docs.todos.entity')}
          url={url}
        />
      </Wrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => {
  const isProd = process.env.NODE_ENV === 'production';
  const url = isProd ? process.env.PRODUCTION_DATA_API_URL : process.env.LOCAL_DATA_API_URL;

  const availableEndpoints = ['user', 'post', 'todo'];

  const endpoints = await Promise.all(
    availableEndpoints.map(async (item) => {
      const res = await fetch(`${url}/${item}?count=true`);
      const data = await res.json();
      return { count: data.count, endpoint: item };
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['pages', 'components', 'common'])),
      endpoints,
      locale,
      url
    }
  };
};

export default Docs;
