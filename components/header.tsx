import BrowserButtons from './browser/browser-buttons';
import CustomTabs from './custom-tabs';

export default function Header() {
  return (
    <header
      className="flex h-10 w-full items-center gap-5 border-b border-strokedark2 bg-black2 px-5
        font-semibold"
    >
      <BrowserButtons />
      <CustomTabs />
    </header>
  );
}
