import * as React from 'react';

import TemplateScope from './template_scope';

class ScopedComponent<P, S> extends React.Component<P, S> {
  public context: { scope: TemplateScope };

  static contextTypes = {
    scope: React.PropTypes.instanceOf(TemplateScope),
  };

  static childContextTypes = {
    scope: React.PropTypes.instanceOf(TemplateScope),
  };

  getChildContext() {
    const scope = this.context.scope || new TemplateScope();

    return { scope };
  }
}

export default ScopedComponent;
