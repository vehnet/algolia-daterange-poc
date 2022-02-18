import { DatePicker } from "@fluentui/react";

import React, { useEffect, useState } from "react";

import { useRange, UseRangeProps } from "react-instantsearch-hooks";

export type AlgoliaDateRangeProps = React.ComponentProps<"div"> & UseRangeProps;

const cx = (
  ...classNames: Array<string | number | boolean | undefined | null>
) => classNames.filter(Boolean).join(" ");

export const AlgoliaDateRange = (props: AlgoliaDateRangeProps) => {
  const state = useRange(props);
  const { range, start, canRefine, refine } = state;
  console.log(state);
  const values = {
    min:
      start[0] !== -Infinity && start[0] !== range.min ? start[0] : undefined,
    max: start[1] !== Infinity && start[1] !== range.max ? start[1] : undefined
  };

  const [{ from, to }, setRange] = useState({
    from: range.min,
    to: range.max
  });

  console.log("f", { from, to }, values);

  useEffect(() => {
    setRange({
      from: range.min,
      to: range.max
    });
  }, [range.min, range.max]);

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
        onSubmit={e => {
          e.preventDefault();
          refine([from, to]);
        }}
      >
        <DatePicker
          label={""}
          value={new Date(from)}
          disabled={!canRefine}
          onSelectDate={e => setRange({ from: e.valueOf(), to })}
        />
        <span className="ais-RangeInput-separator"> - </span>
        <DatePicker
          label={""}
          value={new Date(to)}
          disabled={!canRefine}
          onSelectDate={e => setRange({ from, to: e.valueOf() })}
        />
        <button className="ais-RangeInput-submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
