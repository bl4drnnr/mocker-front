import React from 'react';

import classNames from 'classnames';

import { ContentSidebar, SidebarLink } from '@styles/pages/docs.styles';

interface SidebarProps {
  sections: Array<{ value: string, active: boolean }>
  executeScroll: (section: string) => void|never
}

const Sidebar = ({
   sections,
   executeScroll
 }: SidebarProps) => {
  return (
    <ContentSidebar>
      {sections.map((section) => (
        <SidebarLink
          className={classNames({ active: section.active })}
          key={section.value}
          onClick={() => executeScroll(section.value)}
        >{section.value}
        </SidebarLink>
      ))}
    </ContentSidebar>
  );
};

export default Sidebar;
