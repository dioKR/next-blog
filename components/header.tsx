import BrowserButtons from './browser/browser-buttons';
import CustomTabs from './custom-tabs';
import StarIcon from './icons/star-icon';

export default function Header() {
  return (
    <header
      className="flex h-10 w-full items-center gap-5 border-b border-strokedark2 bg-black2 px-5
        font-semibold"
    >
      <BrowserButtons />
      <div className="flex items-center space-x-2 hover:cursor-default">
        <StarIcon />
        <pre className="text-sm">DDoongjji's blog</pre>
      </div>
      <CustomTabs />
    </header>
  );
}
