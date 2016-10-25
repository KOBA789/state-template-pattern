import * as React from 'react';

import TemplateScope from './template_scope';

interface PropTypes {
  content: Object;
}

class ContentControl extends React.Component<PropTypes, {}> {
  public context: { scope: TemplateScope };

  static contextTypes = {
    scope: React.PropTypes.instanceOf(TemplateScope).isRequired,
  };

  render() {
    const { scope } = this.context;
    const { content, children } = this.props;
    const Template = scope.getTemplate(content);
    return <Template children={children} content={content} />;
  }
}

export default ContentControl;