'use client';

import { Tabs, Tab, Chip } from '@nextui-org/react';
import UserIcon from './icons/user-icon';
import BookSquareIcon from './icons/book-square-icon';

export default function CustomTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            'gap-6 w-full relative rounded-none p-0 border-b border-divider',
          cursor: 'w-full bg-[#22d3ee]',
          tab: 'max-w-fit px-0 h-12',
          tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
        }}
      >
        <Tab
          key="posts"
          title={
            <div className="flex items-center space-x-2">
              <BookSquareIcon />
              <span>Posts</span>
              <Chip size="sm" variant="faded">
                9
              </Chip>
            </div>
          }
        />
        <Tab
          key="about"
          title={
            <div className="flex items-center space-x-2">
              <UserIcon />
              <span>About</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
