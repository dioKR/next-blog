import BrowserButtons from './browser/browser-buttons';

export default function Header() {
  return (
    <header className="bg-black2 border-strokedark2 h-10 w-full border-b font-semibold">
      <BrowserButtons />
    </header>
  );
}
