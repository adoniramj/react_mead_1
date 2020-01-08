'use strict';

var appRoot = document.getElementById('app');

var visibility = false;
var hideInfo = function hideInfo() {
  console.log('hiding info');
  visibility = !visibility;
  renderFunc();
};

var renderFunc = function renderFunc() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: hideInfo },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'I am being shown'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderFunc();
