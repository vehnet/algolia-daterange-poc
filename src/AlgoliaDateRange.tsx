import { DatePicker } from "@fluentui/react";

import React, { useEffect, useState } from "react";

import { useRange, UseRangeProps } from "react-instantsearch-hooks";

export type AlgoliaDateRangeProps = React.ComponentProps<"div"> & UseRangeProps;

const cx = (
  ...classNames: Array<string | number | boolean | undefined | null>
) => classNames.filter(Boolean).join(" ");

// 1 because Fluent UI evaluates 0 as null
const MIN_TIMESTAMP = 1;
const MAX_TIMESTAMP = 8640000000000;
  
export const AlgoliaDateRange = (props: AlgoliaDateRangeProps) => {
  const {
    canRefine,
    refine
  } = useRange(props);

  const values = {
    min: props.min,
    max: props.max
  };

  const [{ from, to }, setRange] = useState({
    from: values.min,
    to: values.max
  });

  useEffect(() => {
    setRange({ from: values.min || MIN_TIMESTAMP, to: values.max || MAX_TIMESTAMP});
  }, [values.min, values.max]);

  return (
    <div
      className={cx(
        "ais-RangeInput",
        !canRefine && "ais-RangeInput-noRefinement",
        props.className
      )}
    >
      <form
        className="ais-RangeInput-form"
        onSubmit={event => {
          event.preventDefault();
          refine([from, to]);
        }}
      >
        <DatePicker
          label={""}
          value={from ? new Date(from * 1000) : undefined}
          disabled={!canRefine}
          onSelectDate={event => event && setRange({ from: event.valueOf() / 1000, to })}
        />
        <span className="ais-RangeInput-separator"> - </span>
        <DatePicker
          label={""}
          value={to ? new Date(to * 1000) : undefined}
          disabled={!canRefine}
          onSelectDate={event => event && setRange({ from, to: event.valueOf() / 1000 })}
        />
        <button className="ais-RangeInput-submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
