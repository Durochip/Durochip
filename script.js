let MNMLogo = 'https://picsum.photos/100';

class SimpleExample extends React.Component {
  // React components are simple functions that take in props and state, and render HTML
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "A Simple React Component Example"), /*#__PURE__*/
      React.createElement("div", { className: "form-group" }, " ", /*#__PURE__*/
      React.createElement("img", { src: MNMLogo }), " "), /*#__PURE__*/

      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("label", { htmlFor: "simpleInput" }, "Simple Label"), " ", /*#__PURE__*/
      React.createElement("input", { type: "text", className: "form-control", id: "simpleInput" })), /*#__PURE__*/

      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("button", { type: "button", className: "btn btn-primary", disabled: true }, "Submit"), " "), /*#__PURE__*/

      React.createElement("p", { className: "help-block", dangerouslySetInnerHTML: { __html: 'I\'m some <span class="text-danger">dangerous</span> helper text.' } })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(SimpleExample, null), document.getElementById('example'));