import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  LanguagesList,
  PickedLanguage,
  ChangeLanguageContainer,
  LanguageItem
} from '@components/UI/ChangeLanguage/ChangeLanguage.styles';

interface ChangeLanguageProps {
  defaultLanguage: string
}

const ChangeLanguage = ({ defaultLanguage }: ChangeLanguageProps) => {
  const { asPath } = useRouter();

  const [showLanguages, setShowLanguages] = React.useState(false);
  const [pickedLanguage, setPickedLanguage] = React.useState('');
  const [languages, ] = React.useState([{
    language: 'Polish',
    flag: '🇵🇱',
    prefix: 'pl'
  }, {
    language: 'Russian',
    flag: '🇷🇺',
    prefix: 'ru'
  }, {
    language: 'English',
    flag: '🇬🇧',
    prefix: 'en'
  }]);

  const changeLanguage = async (language: string) => {
    for (const lang of languages) {
      if (lang.language === language) {
        setPickedLanguage(lang.flag);
        setShowLanguages(false);
      }
    }
  };

  React.useEffect(() => {
    switch (defaultLanguage) {
      case 'en':
        setPickedLanguage('🇬🇧');
        break;
      case 'ru':
        setPickedLanguage('🇷🇺');
        break;
      case 'pl':
        setPickedLanguage('🇵🇱');
        break;
      default:
        setPickedLanguage('🇬🇧');
        break;
    }
  }, []);

  return (
    <>
      <PickedLanguage
        onClick={() => setShowLanguages(!showLanguages)}
      >{pickedLanguage}</PickedLanguage>
      <ChangeLanguageContainer>
        {showLanguages ? (
          <LanguagesList>
            {languages.map(item => (
              <Link
                key={item.language}
                href={asPath}
                locale={item.prefix}
              >
                <LanguageItem>
                  {item.flag} {item.language}
                </LanguageItem>
              </Link>
            ))}
          </LanguagesList>
        ):  null}
      </ChangeLanguageContainer>
    </>
  );
};

export default ChangeLanguage;
