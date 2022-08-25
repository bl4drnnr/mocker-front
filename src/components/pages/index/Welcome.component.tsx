import React, { useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import Button from '@components/UI/Button/Button';
import Search from '@public/img/search.svg';
import { Title } from '@styles/common/common.styles';
import {
  ButtonContainer,
  ButtonWrapper,
  InputSearchBox,
  QuickSearchInput,
  SearchIcon,
  WelcomeContainer,
  WelcomeWrapper
} from '@styles/pages/index.styles';

interface WelcomeComponentProps {
  title: string
  startButton: string
  search: string
  handleRedirect: (path: string) => void|never
  showModal: () => void|never
}

const WelcomeComponent = ({
  title,
  search,
  startButton,
  handleRedirect,
  showModal
}: WelcomeComponentProps) => {
  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <Title>MOCKER</Title>
        <Title className={classNames({ subtitle: true })}>{title}</Title>

        <ButtonWrapper>
          <ButtonContainer>

            <Button
              text={startButton}
              onClick={() => handleRedirect('/docs')}
            />

            <InputSearchBox>
              <SearchIcon><Image src={Search} width={20} height={20} alt={'Search'} /></SearchIcon>
              <QuickSearchInput onClick={() => showModal()}>
                {search}
              </QuickSearchInput>
            </InputSearchBox>

          </ButtonContainer>
        </ButtonWrapper>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomeComponent;
