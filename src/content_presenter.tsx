import * as React from 'react';

import TemplateScope from './template_scope';

interface PropTypes {
  scope: TemplateScope;
  model: Object;
}

class ContentPresenter extends React.Component<PropTypes, {}> {
  render() {
    const { scope, model, children } = this.props;
    const Template = scope.getTemplate(model);
    return <Template children={children} model={model} />;
  }
}

export default ContentPresenter;