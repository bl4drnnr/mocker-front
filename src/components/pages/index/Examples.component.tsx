import React from 'react';

import classNames from 'classnames';

import CodeBlock from '@components/pages/index/CodeBlock.component';
import Button from '@components/UI/Button/Button';
import { CodeSpan, Text, Title } from '@styles/common/common.styles';
import { Content, TryButtonWrapper } from '@styles/pages/index.styles';

interface ExamplesProps {
  title: string
  fetchData: (path: string) => void|never
  intro: string
  allRecords1: string
  allRecords2: string
  specificRecord1: string
  specificRecord2: string
  pagination1: string
  pagination2: string
  and: string
  params: string
}

const Examples = ({
  title,
  fetchData,
  intro,
  allRecords1,
  allRecords2,
  specificRecord1,
  specificRecord2,
  pagination1,
  pagination2,
  and,
  params
}: ExamplesProps) => {
  return (
    <>
      <Title className={classNames({ contentTitle: true })}>
        {title}
      </Title>

      <Content>
        <Text>{intro}</Text>
        <Text>{allRecords1}<CodeSpan>/list</CodeSpan>{allRecords2}</Text>
        <CodeBlock codeLines={[
          'fetch(\'https://data.mockerdistibutor.org/todo/list\')',
          '.then(response ={\'>\'} response.json())',
          '.then(json ={\'>\'} console.log(json))'
        ]} />
        <TryButtonWrapper>
          <Button
            text={'Try it now!'}
            onClick={() => fetchData('/todo/list')}
          />
        </TryButtonWrapper>
      </Content>

      <Content>
        <Text>{specificRecord1}<CodeSpan>id</CodeSpan>{specificRecord2}</Text>
        <CodeBlock codeLines={[
          'fetch(\'https://data.mockerdistibutor.org/post/1\')',
          '.then(response ={\'>\'} response.json())',
          '.then(json ={\'>\'} console.log(json))'
        ]} />
        <TryButtonWrapper>
          <Button
            text={'Try it now!'}
            onClick={() => fetchData('/post/1')}
          />
        </TryButtonWrapper>
      </Content>

      <Content>
        <Text>{pagination1}<CodeSpan>count</CodeSpan>{pagination2}<CodeSpan>take</CodeSpan> {and} <CodeSpan>skip</CodeSpan> {params}.</Text>
        <CodeBlock codeLines={[
          'fetch(\'https://data.mockerdistibutor.org/post?skip=3&take=2\')',
          '.then(response ={\'>\'} response.json())',
          '.then(json ={\'>\'} console.log(json))'
        ]} />
        <TryButtonWrapper>
          <Button
            text={'Try it now!'}
            onClick={() => fetchData('/post?skip=3&take=2')}
          />
        </TryButtonWrapper>
      </Content>
    </>
  );
};

export default Examples;
