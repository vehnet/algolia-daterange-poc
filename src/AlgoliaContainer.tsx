import React from 'react';

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const indexName = "Item_production";

const searchClient = algoliasearch(
  "UJ5WYC0L7X",
  "8ece23f8eb07cd25d40262a1764599b1"
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
