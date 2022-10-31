import run, { hasSupport } from '../../apis/console-api-i';

function ConsoleApiI() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default ConsoleApiI;
