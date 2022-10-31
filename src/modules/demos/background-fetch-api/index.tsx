import run, { hasSupport } from '../../apis/background-fetch-api';

function BackgroundFetchApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default BackgroundFetchApi;
