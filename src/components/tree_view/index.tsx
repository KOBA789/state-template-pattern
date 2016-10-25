import * as React from 'react';

import TemplateScope from '../../template_scope';
import ContentControl from '../../content_control';

import {
  Node,
  Tree,
  Leaf,
} from './node';

const scope = new TemplateScope();

scope.registerTemplate<Tree>(Tree, ({children, content}) => {
  return (
    <li>
      {content.value}
      <ul>
        {
          content.children.map((node, i) => {
            return <ContentControl key={i} scope={scope} content={node} />;
          })
        }
      </ul>
    </li>
  );
});

scope.registerTemplate<Leaf>(Leaf, ({children, content}) => {
  return (
    <li>
      {content.value}
    </li>
  );
});

const tree = new Tree('root', [
  new Leaf('hey'),
  new Leaf('hoge'),
  new Tree('root', [
    new Leaf('hey'),
    new Leaf('hoge'),
  ]),
]);

const TreeView = ({root}: { root: Node }) => (
  <ul>
    <ContentControl scope={scope} content={root} />
  </ul>
);

export default TreeView;
export {
  Node,
  Tree,
  Leaf,
};