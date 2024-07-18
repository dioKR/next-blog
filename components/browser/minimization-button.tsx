import MinimizeIcon from '../icons/minimize-icon';

export default function MinimizationButton() {
  return (
    <button
      disabled
      className="flex size-3 items-center justify-center rounded-full border border-[#FEBC2E]
        bg-[#FEBC2E]"
    >
      <MinimizeIcon />
    </button>
  );
}
