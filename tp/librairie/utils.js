let Utils = {}
Utils.debug = function (string) {
  if (this.debug.calledTimes < this.debug.MAX_NUMBER_CALLS + 1) {
    if (string) {
      this.trace(string)
    } else {
      window.console.log(this.debug.calledTimes)
    }
  }
  this.debug.calledTimes = this.debug.calledTimes + 1
}
// Javascript function are considered as objects, so we can give them attributes!
Utils.debug.calledTimes = 1
Utils.debug.MAX_NUMBER_CALLS = 10

Utils.trace = function (string) {
  // In Internet Explorer 9 (and 8), the console object is only exposed when the developer
  // tools are opened for a particular tab.
  // The line below creates a dummy function for console.log when the debugger is not active.
  if (!window.console) {
    window.console = { log: function () {} }
  }
  window.console.log('Trace function called : ', string)
}
Utils.$ = function (string) {
  return document.querySelectorAll(string)
}
Utils.isHTMLElement = function (element) {
  return element && element.nodeType
}
Utils.getElement = function (selectorOrElement) {
  let domElement
  if (this.isHTMLElement(selectorOrElement)) {
    domElement = selectorOrElement
  } else {
    domElement = this.$(selectorOrElement)[0]
  }
  return domElement
}
Utils.show = function (selectorOrElement) {
  let domElement = this.getElement(selectorOrElement)
  domElement.style.display = ''
}
Utils.hide = function (selectorOrElement) {
  let domElement = this.getElement(selectorOrElement)
  domElement.style.display = 'none'
}
Utils.getHtml = function (selectorOrElement) {
  let domElement = this.getElement(selectorOrElement)
  return domElement.innerHTML
}
Utils.setHtml = function (selectorOrElement, string) {
  let domElement = this.getElement(selectorOrElement)
  domElement.innerHTML = string
}
Utils.val = Utils.setHtml

// To use this library, import it in your js file, assign it to a variable
// You can then call its member functions
module.exports = Utils
