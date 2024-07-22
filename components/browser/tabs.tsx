'use client';

import CloseRoundIcon from '../icons/close-round-icon';

export const TabItem = ({ title }: { title: string }) => {
  return (
    <div className="flex h-full w-40 items-center justify-between rounded-sm border-0 bg-black px-2">
      {title}
      <CloseRoundIcon className="size-3" />
    </div>
  );
};

export default function Tabs() {
  return (
    <div
      className="relative h-full"
      //   className="border-strokedark absolute bottom-[-1px] left-[6rem] h-[90%] rounded-t-sm border
      //     border-b-black bg-black"
    >
      <div className="absolute bottom-[-1px] flex h-[90%] border border-transparent border-b-black">
        <TabItem title="2024djq" />
        <TabItem title="Okestro" />
      </div>
    </div>
  );
}
