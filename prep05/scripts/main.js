function main() {
    const csColors = {
        '--jmu-slate-gray': '#333333',
        '--jmu-cs-ice-blue': '#8EE4D7',
        '--jmu-purple': '#450084',
        '--jmu-cs-teal': '#009698',
        '--jmu-light-gold': '#F4EFE1',
    }

    function csColorToVar() {
        // TODO: loop over the data in csColors and return an object that reverses it,
        // i.e. the keys of the object you return should be strings that are colors in 
        // css hexadecimal format, and the values for those keys should be the corresponding
        // css custom property name e.g. one key in the result should be '#333333' and its
        // value should be '--jmu-slate-gray' 

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        // alternatively I could use for...of with result of Object.keys(csColors)

        const result = {}

        for (let key in csColors) {
            const val = csColors[key]
            result[val] = key;
        }
        return result;
    }

    const varFromColor = csColorToVar();


    // TODO: make a variable called swatches and assign a list of references to
    // blocks that are in main

    // these won't work. they get oo many blocks
    // const swatches = document.getElementsByClassName('block')
    // const swatches = document.querySelector('.block')

    // ifi first get a ref to main, i can only search its descendants
    // const main = document.querySelector('main');
    // const swatches = main.querySelectorAll('.block');

    // alternatively, I can use the selector syntax i've been learning
    const swatches = document.querySelectorAll('main .block');

    // TODO: make a variable called knownColors and assign to it an empty array
    const knownColors = [];
    // TODO: loop over swatches adding each one's background color to knownColors
    for (let swatch of swatches) {
        // console.log('knownColor: swatch', swatch)
        // console.log('knownColor: swatch.style', swatch.style)
        // console.log('knownColor: swatch.style.backgroundColor', swatch.style.backgroundColor)
        knownColors.push(swatch.style.backgroundColor);
    }
    console.log('knownColors', knownColors);

    function transformColor(color) {
        // if the color is not already one of the background colors in our swatches,
        // see if it is just the hex version, and if so return its custom property
        // else return it unchanged
        // e.g.
        // transformColor("red") returns "red"
        // transformColor("var(--jmu-purple)") returns "var(--jmu-purple)"
        // transformColor("--jmu-purple") returns "var(--jmu-purple)"
        // transformColor("#450084") returns "var(--jmu-purple)"

        // TODO check if color is in knownColors
        if (knownColors.includes(color)) {
            // TODO if so, return color
            return color;
        }

        // TODO if not, check if it's in varFromColor, if so return the corresponding value
        if (color in varFromColor) {
            return varFromColor[color];
        }
        // TODO if color is in csColors return color except wrapped in var()
        if (color in csColors) {
            return `var(${color})`
        }
        // TODO otherwise return color as it is
        return color;

    }

    function enableSwatches() {

        // const swatch = document.querySelector('.block');
        // console.log('swatch', swatch)

        // //     WAIT! the LAST FIXME in the file is the one that helps with the error here VVV
        // swatch.addEventListener('click', function () {
        //     // WAIT! the LAST FIXME in the file is the one that helps with the error here ^^^
        //     console.log('clicked swatch', swatch)

        //     // FIXME instead of logging the whole element, log its background color
        //     console.log('swatch bg color', swatch.style.backgroundColor)
        //     const bgColor = swatch.style.backgroundColor

        //     // FIXME instead of logging its background color,
        //     // pass its bgcolor to transformColor and log the result]
        //     const transformedColor = transformColor(bgColor);
        //     console.log('TRANSFOOOOOOOOORMED', transformedColor)

        //     // FIXME instead of just logging the result from transformColor, pass the result to setBodyBG
        //     setBodyBG(transformedColor)
        // })

        // FIXME right now only the first (white) swatch logs that it was clicked, 
        // but all of them should.

        const swatches = document.querySelectorAll('main .block');
        console.log('swatches', swatches)

        //     WAIT! the LAST FIXME in the file is the one that helps with the error here VVV
        for (let swatch of swatches) {
            swatch.addEventListener('click', function () {
                // WAIT! the LAST FIXME in the file is the one that helps with the error here ^^^
                console.log('clicked swatch', swatch)

                // FIXME instead of logging the whole element, log its background color
                console.log('swatch bg color', swatch.style.backgroundColor)
                const bgColor = swatch.style.backgroundColor

                // FIXME instead of logging its background color,
                // pass its bgcolor to transformColor and log the result]
                const transformedColor = transformColor(bgColor);
                console.log('TRANSFOOOOOOOOORMED', transformedColor)

                // FIXME instead of just logging the result from transformColor, pass the result to setBodyBG
                setBodyBG(transformedColor)
            })
        }

    }


    enableSwatches()

    function setBodyBG(color) {
        // TODO set the body's background-color to color
        // you should use the HTMLElement.style property, see e.g.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#updating_border_style

        document.body.style.backgroundColor = color;
        addColorToHistory(color)
    }

    function setBodyFromBlock() {
        // TODO call setBodyBG with this element's background color
        // like above except the bgcolor is on the style property of this
        document.body.style.backgroundColor = this.style.backgroundColor;
    }


    /**
     * Adds a color entry to the color history list.
     * Creates a new list item with a colored block and prepends it to the history.
     * @param {string} color - A CSS color value (e.g., "red", "#450084", "var(--jmu-purple)")
     */
    function addColorToHistory(color) {
        // TODO create new div with class block
        const newDiv = document.createElement('div')
        newDiv.classList.add('block')

        // TODO set the content of the new div to be color (the param to this fn)
        // newDiv.innerHtml = color; // this one is unsafe! why though?
        newDiv.textContent = color;

        // TODO set the new div's bgcolor to color
        newDiv.style.backgroundColor = color

        // TODO create a new li and append the new div to it
        const newLi = document.createElement('li')
        newLi.append(newDiv)

        // TODO prepend the new li to #color-history
        document.getElementById('color-history').prepend(newLi)
    }

    function updateScoreboard(color) {
        // TODO get a reference to the element for the swatch that matches color or if none match, to the #else-count element

        // TODO get the text of the element and parse it as an int (base 10)

        // TODO increment the parsed value and update the element's content with the incremented value
    }

    enableBtn()

    function enableBtn() {
        // TODO get a reference to the custom color button

        // TODO add an eventlistener so that when the button is clicked, 
        // the user is prompted to pick a custom color: "What custom color would you like to use?"
        // (see: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

        // TODO if the user gave a response, pass it to transformColor
        // TODO pass the result to setBodyBG
        // FIXME perhaps setBodyBG should transformColor instead of each of its callers?
    }

}

// FIXME if we just kick everything off willy-nilly, there's a race condition
// the code in main expects the dom elements from the html's body to be available.
// ensure that main is only executed after the dom content had loaded 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#basic_usage
document.addEventListener('DOMContentLoaded', main)
// main();