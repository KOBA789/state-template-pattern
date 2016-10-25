import * as React from 'react';

import ScopedComponent from '../../scoped_component';
import TemplateScope from '../../template_scope';
import ContentControl from '../../content_control';
import DataTemplate from '../../data_template';

import {
  Node,
  Tree,
  Leaf,
} from './node';

const tree = new Tree('root', [
  new Leaf('hey'),
  new Leaf('hoge'),
  new Tree('root', [
    new Leaf('hey'),
    new Leaf('hoge'),
  ]),
]);

class TreeView extends ScopedComponent<{
  root: Node
}, {}> {
  render() {
    const {root} = this.props;

    return (
      <ul>
        <DataTemplate type={Tree} children={({content}: { content: Tree }) =>
          <li>
            {content.value}
            <ul>
              {
                content.children.map((node, i) => {
                  return <ContentControl key={i} content={node} />;
                })
              }
            </ul>
          </li>
        } />
        <DataTemplate type={Leaf} children={({content}: { content: Leaf }) =>
          <li>
            {content.value}
          </li>
        } />
        <ContentControl content={root} />
      </ul>
   );
  }
}

export default TreeView;
export {
  Node,
  Tree,
  Leaf,
};