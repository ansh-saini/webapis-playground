import { useEffect, useState } from 'react';

// import data from json
import { getAllDemos } from 'utils/data/data-access';

// Demo component
import { Demo } from '..';

const App = () => {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allDemos = getAllDemos();
    console.log({ allDemos });
    setDemos(allDemos);
    setLoading(false);
  }, []);

  return (
    <>
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-p-10">
        {(!loading && demos.length) > 0 &&
          demos.map((demo, index) => <Demo demo={demo} key={index} />)}
      </div>
    </>
  );
};

export default App;
