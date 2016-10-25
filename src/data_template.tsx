import * as React from 'react';

import TemplateScope from './template_scope';

interface StatelessComponentPropTypes<T> {
  content: T;
  children?: React.ReactNode;
}

interface PropTypes<T> {
  type: Function;
  children?: React.StatelessComponent<StatelessComponentPropTypes<T>>;
}

class DataTemplate extends React.Component<PropTypes<any>, {}> {
  public context: { scope: TemplateScope };

  static contextTypes = {
    scope: React.PropTypes.instanceOf(TemplateScope).isRequired,
  };

  render(): any {
    const { type, children } = this.props;
    this.context.scope.registerTemplate(type, children);

    return null;
  }
}

export default DataTemplate;
