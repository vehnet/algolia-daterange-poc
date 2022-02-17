import React from 'react';

import { useHits } from "react-instantsearch-hooks";

const App: React.FC = () => {
  const hits = useHits();

  return (
    <>
      {JSON.stringify(hits.hits)}
    </>
  )
};

export default App;
