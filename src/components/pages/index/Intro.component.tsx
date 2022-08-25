import React from 'react';

import classNames from 'classnames';

import { Link, Text, Title } from '@styles/common/common.styles';
import { Content, IntroTitle } from '@styles/pages/index.styles';

interface IntroComponentProps {
  title: string
  introText: string
  linkTo: string
  description1: string
  description2: string
  docs: string
}

const Intro = ({
  title,
  introText,
  linkTo,
  description1,
  description2,
  docs,
}: IntroComponentProps) => {
  return (
    <>
      <Title className={classNames({ contentTitle: true })}>
        {title}
      </Title>

      <IntroTitle><strong>Mocker - </strong>{introText}</IntroTitle>
      <Content>
        <Text>{linkTo} - <Link>https://data.mockerdistibutor.org</Link></Text>
        <Text>{description1}</Text>
        <Text>{description2} <Link>{docs}.</Link></Text>
      </Content>
    </>
  );
};

export default Intro;
