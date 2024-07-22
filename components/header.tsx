import BrowserButtons from './browser/browser-buttons';
import Tabs from './browser/tabs';

export default function Header() {
  return (
    <header
      className="bg-black2 border-strokedark2 flex h-10 w-full items-center gap-5 border-b px-5
        font-semibold"
    >
      <BrowserButtons />
      <Tabs />
    </header>
  );
}
