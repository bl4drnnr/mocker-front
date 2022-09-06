import React, { useState } from 'react';

import { useRouter } from 'next/router';

import Input from '@components/UI/Input/Input';
import { ModalProps } from '@components/UI/Modal/Modal.interface';
import {
  ModalContainer,
  ModalWrapper, 
  SearchContainer,
  SearchItem
} from '@components/UI/Modal/Modal.styles';
import { useSearchService } from '@services/searchService/search.service';
import { Text } from '@styles/common/common.styles';

const Modal = ({ onClose, locale }: ModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const { search } = useSearchService();

  const router = useRouter();

  const handleRedirect = async () => {
    await router.push(`/${locale}/docs`);
  };

  const fetchSearch = async () => {
    const data = await search({ searchQuery });
    setSearchResult(data);
  };

  React.useEffect(() => {
    if (searchQuery.length) {
      fetchSearch().then();
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Input
          value={searchQuery}
          placeholder={'/post/list'}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchResult?.length ? (
          <SearchContainer>
            <Text>Found endpoints:</Text>
            {searchResult.map((item: any) => (
              <SearchItem
                key={item.name}
                onClick={() => handleRedirect()}
              >
                {item.name}
              </SearchItem>
            ))}
          </SearchContainer>
        ): null}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
