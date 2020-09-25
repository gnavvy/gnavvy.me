import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';

const GRAPH = [
  { source: '0', target: '1', type: 'abc' },
  { source: '1', target: '2', type: 'abc' },
  { source: '2', target: '0', type: 'abc' },
];

export const Graph = ({ data = [], width, height }) => {
  console.log(data);
  const nodes = data.map((d, i) => {
    return <circle key={i} cx={Math.random() * width} cy={Math.random() * height} r={10} />;
  });
  return <g>{nodes}</g>;
};

export const KnowledgeMap = () => {
  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <svg width={width} height={height}>
            <Graph data={GRAPH} width={width} height={height} />
          </svg>
        );
      }}
    </AutoSizer>
  );
};
