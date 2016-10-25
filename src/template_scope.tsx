import * as React from 'react';

interface PropTypes<T> {
  content: T;
  children?: React.ReactNode;
}
type Template<T> = React.StatelessComponent<PropTypes<T>>;

class TemplateScope {
  private map = new WeakMap<Function, Template<any>>();
  public registerTemplate<T>(viewModelCtor: Function, template: Template<T>) {
    this.map.set(viewModelCtor, template);
  }
  public getTemplate(viewModel: Object) {
    const template = this.map.get(viewModel.constructor);
    if (template === undefined) {
      console.log(viewModel, this.map);
      throw new Error('template is not found');
    }

    return template;
  }
}

export default TemplateScope;