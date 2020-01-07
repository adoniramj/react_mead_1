'use strict';

console.log('App.js is running');

// JSX 
var app = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  //console.log('Form submitted')
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFunc();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderFunc();
};

var numbers = [55, 101, 1001];
var appRoot = document.getElementById('app');

var renderFunc = function renderFunc() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Delete all options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (item, index) {
        return React.createElement(
          'li',
          { key: index },
          item
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', {
        type: 'text',
        name: 'option'
      }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderFunc();
