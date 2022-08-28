import React from 'react';

import TryIt from '@components/pages/common/TryIt.component';
import { Text, Title } from '@styles/common/common.styles';

interface IntroductionProps {
  introRef: React.RefObject<HTMLParagraphElement>
  url: string
  title: string
  description: string
  endpointDefault: string
}

const Introduction = React.forwardRef(({
 introRef,
 title,
 description,
 endpointDefault,
 url
}: IntroductionProps, ref) => (
  <>
    <Title ref={introRef}>Introduction</Title>
    <Text><strong>Mocker</strong> - {title}</Text>
    <Text>{description}</Text>
    <Text>{endpointDefault}</Text>

    <TryIt
      codeLines={[
        'fetch(\'https://data.mockerdistibutor.org/todo/list\')',
        '.then(response ={\'>\'} response.json())',
        '.then(json ={\'>\'} console.log(json))'
      ]}
      endpoint={`${url}/todo/list`}
    />
  </>
));

Introduction.displayName = 'Introduction';

export default Introduction;
