import React, { useState } from 'react';

import Input from '@components/UI/Input/Input';
import { ModalProps } from '@components/UI/Modal/Modal.interface';
import { ModalContainer, ModalWrapper } from '@components/UI/Modal/Modal.styles';

const Modal = ({ onClose }: ModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Input
          value={searchQuery}
          placeholder={'Search...'}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
