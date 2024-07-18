import CloseButton from './close-button';
import FullScreenButton from './full-screen-button';
import MinimizationButton from './minimization-button';

export default function BrowserButtons() {
  return (
    <div className="flex gap-2">
      <CloseButton />
      <MinimizationButton />
      <FullScreenButton />
    </div>
  );
}
