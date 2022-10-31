import run, { hasSupport } from '../../apis/intersection-observer-api';

function IntersectionObserverApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default IntersectionObserverApi;
