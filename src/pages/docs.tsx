import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Introduction from '@components/pages/docs/Introduction.component';
import Posts from '@components/pages/docs/Posts.component';
import Sidebar from '@components/pages/docs/Sidebar.component';
import Todos from '@components/pages/docs/Todos.component';
import Users from '@components/pages/docs/Users.component';
import Default from '@layouts/Default';
import { Wrapper } from '@styles/pages/docs.styles';

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
      <Sidebar
        sections={sections}
        executeScroll={executeScroll}
      />
      <Wrapper>
        <Introduction introRef={introRef}/>
        <Posts postRef={postsRef} />
        <Todos todoRef={todosRef} />
        <Users usersRef={usersRef} />
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
