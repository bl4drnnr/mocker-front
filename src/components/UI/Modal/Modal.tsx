import React from 'react';

import { ModalProps } from '@components/UI/Modal/Modal.interface';
import { ModalContainer, ModalWrapper } from '@components/UI/Modal/Modal.styles';

const Modal = ({ onClose }: ModalProps) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
