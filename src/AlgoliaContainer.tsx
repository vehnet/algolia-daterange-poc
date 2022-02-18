import React from 'react';

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const indexName = "concert_events_instantsearchjs";

const searchClient = algoliasearch(
  "latency",
  "059c79ddd276568e990286944276464a"
);

type Props = {};

const AlgoliaContainer: React.FC = (props: React.PropsWithChildren<Props>) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      {props.children}
    </InstantSearch>
  );
}

export default AlgoliaContainer;
