import React from 'react';

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
  const router = useRouter();

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
        await router.push(lang.prefix);
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
              <LanguageItem
                key={item.language}
                onClick={() => changeLanguage(item.language)}
              >{item.flag} {item.language}</LanguageItem>
            ))}
          </LanguagesList>
        ):  null}
      </ChangeLanguageContainer>
    </>
  );
};

export default ChangeLanguage;
