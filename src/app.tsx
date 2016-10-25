import * as React from 'react';

import TreeView, { Node, Tree, Leaf } from './components/tree_view';

const tree = new Tree('root', [
  new Leaf('node1'),
  new Tree('node2', [
    new Tree('node3', [
      new Leaf('node4'),
      new Leaf('node5'),
    ]),
    new Leaf('node6'),
  ]),
  new Leaf('node7'),
  new Tree('node8', [
    new Leaf('node9'),
    new Leaf('node10'),
  ]),
]);

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>State-Template Pattern</h1>
        <TreeView root={tree} />
      </div>
    );
  }
}