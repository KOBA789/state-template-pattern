import * as React from 'react';

import TemplateScope from '../../template_scope';
import ContentPresenter from '../../content_presenter';

import {
  Node,
  Tree,
  Leaf,
} from './node';

const scope = new TemplateScope();

scope.registerTemplate<Tree>(Tree, ({children, model}) => {
  return (
    <li>
      {model.value}
      <ul>
        {
          model.children.map((node, i) => {
            return <ContentPresenter key={i} scope={scope} model={node} />;
          })
        }
      </ul>
    </li>
  );
});

scope.registerTemplate<Leaf>(Leaf, ({children, model}) => {
  return (
    <li>
      {model.value}
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
    <ContentPresenter scope={scope} model={root} />
  </ul>
);

export default TreeView;
export {
  Node,
  Tree,
  Leaf,
};