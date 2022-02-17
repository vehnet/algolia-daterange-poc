import React from 'react';

import { useHits } from "react-instantsearch-hooks";
import { AlgoliaDateRange } from './AlgoliaDateRange';

const App: React.FC = () => {
  const hits = useHits();

  return (
    <div className="container">
      <section>
        <strong>Filters:</strong>
        <AlgoliaDateRange attribute="created_at_i" />
      </section>
      <section>
        <strong>Results ({hits.results?.nbHits} items):</strong>
        <div className="results">
          {hits.hits.map(row =>
            <div className="row">{row.title}, {row.author}. <strong>Created at:</strong> {row.created_at} ({row.created_at_i})</div>
          )}
        </div>
      </section>
    </div>
  )
};

export default App;
