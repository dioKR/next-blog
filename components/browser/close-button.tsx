import CloseRound from '../icons/close-round-icon';

export default function CloseButton() {
  return (
    <button
      disabled
      className="flex size-3 items-center justify-center rounded-full border border-[#FF5F57]
        bg-[#FF5F57]"
    >
      <CloseRound />
    </button>
  );
}
