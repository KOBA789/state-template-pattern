import * as React from 'react';

import TemplateScope from './template_scope';

interface PropTypes {
  scope: TemplateScope;
  content: Object;
}

class ContentControl extends React.Component<PropTypes, {}> {
  render() {
    const { scope, content, children } = this.props;
    const Template = scope.getTemplate(content);
    return <Template children={children} content={content} />;
  }
}

export default ContentControl;