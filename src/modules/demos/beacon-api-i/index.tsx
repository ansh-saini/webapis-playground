import run, { hasSupport } from '../../apis/beacon-api-i';

function BeaconApiI() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default BeaconApiI;
