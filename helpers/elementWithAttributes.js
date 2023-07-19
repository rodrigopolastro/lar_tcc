function createElementWithAttributes(elementTag, attributes){
  const element = document.createElement(elementTag);
  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

  return element;
}