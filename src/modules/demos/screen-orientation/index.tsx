import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/screen-orientation';

function ScreenOrientation() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <Button onClick={run}>Run Demo</Button>
      <div
        style={{
          padding: '8px',
          borderRadius: '4px',
        }}
        className="tw-mt-1"
      >
        <h1>
          <b>Orientation:</b> <span id="orientation" />
        </h1>
      </div>
    </div>
  );
}

export default ScreenOrientation;
