import ArrowDropLeftIcon from '../icons/arrow-drop-left-icon';
import ArrowDropRightIcon from '../icons/arrow-drop-right-icon';

export default function FullScreenButton() {
  return (
    <button
      disabled
      className="flex size-3 rotate-45 items-center justify-center gap-[0.1rem] rounded-full
        border border-[#28C840] bg-[#28C840]"
    >
      <ArrowDropLeftIcon />
      <ArrowDropRightIcon />
    </button>
  );
}
