// Initialize our library
let count = 0;
// Define max number of times the debug function can be used
const MAX_NUMBER_COMPTEUR = 10;

/**
 * Library util.js
 *
 * @author @bdebever
 * @type Object
 */
let utils = {

    /**
     * Trace function
     *
     * @var {String} inputTrace
     */
    trace(inputTrace) {
        // Sepcial case for IE
        // the console object is only exposed when the developer tools are opened for a particular tab.
        if (!window.console) {
            window.console = {
                log: () => {}
            }
        }
        window.console.log(`Function trace is called ${inputTrace}`);
    },


    /**
     * @var {String} String
     */
    debug(string) {

        if (this.count < this.MAX_NUMBER_COMPTEUR) {
            this.count++;
            if (this.string)
                return this.trace(this.string);

            return this.trace(`Compteur: ${this.count}`);
        }
    },
    //how, hide, html, val• Leurs arguments peuvent être des identifiants ou des références: utiliser typeof

    getElement(item) {
        if (!item)
            throw "Dom element is not provided";

        // Check if it's a DOM element
        if (typeof entity === 'Object' && entity.nodeType != undefined)
            return item;

        // Otherwise, check if we find with the selector name - we return the first match
        else if (document.querySelectorAll(item) && document.querySelectorAll(item)[0])
            return document.querySelectorAll(item)[0];

        // Fallback
        throw "Unknown DOM element";
    },

    /**
     * Show a given dom element
     *
     * @var {String} selector
     */
    show(selector) {
        try {
             let element = this.getElement(selector);
             element.style.display = '';
        } catch(e) {
            console.error(e);
        }
    },

    /**
     * Hide a given dom element
     *
     * @var {String} selector
     */
    hide(selector) {
        try {
            let element = this.getElement(selector);
            element.style.display = 'none';
        } catch (e) {
            console.error(e);
        }
    },

    /**
     * Get a given dom element
     *
     * @var {String} item
     */
    getHtml(item) {
        try {
            let element = this.getElement(item);
            return element.innerHTML
        } catch (e) {
            console.error(e);
        }
    },

    /**
     * Set a given dom element
     *
     * @var {String} item
     * @var {String} innerString
     */
    setHtml(item, innerString = '') {
        try {
            let element = this.getElement(item);
            element.innerHTML = innerString;
        } catch (e) {
            console.error(e);
        }
    }

};

// Make it available
export default utils