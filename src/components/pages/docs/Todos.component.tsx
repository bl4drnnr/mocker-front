import React from 'react';

import { Text, Title } from '@styles/common/common.styles';

interface TodoProps {
  todoRef: React.RefObject<HTMLParagraphElement>
}

const Todos = React.forwardRef(({ todoRef }: TodoProps, ref) => (
  <>
    <Title ref={todoRef}>Todos</Title>
  </>
));

Todos.displayName = 'Todos';

export default Todos;
