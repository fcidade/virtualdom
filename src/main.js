/* @jsx createVirtualDOM */
function createVirtualDOM(name, props, ...childrenElements) {
  const children = [].concat(...childrenElements);
  return { name, props, children };
}

function render(node) {
  if (node.split) return document.createTextNode(node);

  const element = document.createElement(node.name);
  
  Object.keys(node.props || {}).forEach(propName => {
    const propValue = node.props[propName];
    element.setAttribute(propName, propValue);
  });
  
  (node.children || []).forEach(children => {
    element.appendChild(render(children))
  });

  return element;
}

const content = <div>
  <h1 style="color: blue">teste</h1>
  <h3>opa eai</h3>
  <span>teste</span>
</div>
const dom = render(content)
document.body.appendChild(dom);