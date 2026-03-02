console.log('loaded creatcard.js')

function init(ev) {
    console.log('init is happening bc event', ev)
    // TODO: When the "preview" button is clicked, 
    const previewBtn = document.getElementById('preview')
    previewBtn.addEventListener('click', () => {
        console.log('clicked preview')
        
        // TODO: you should set the text in all the appropriate spans
        // span class="title-text"
        // span class="subtitle-text"
        // span class="to-text"
        // span class="message-text"
        // span class="from-text"
        // const spans = document.querySelectorAll('#preview-area span');
        // const spans = document.querySelectorAll('span[class$="-text"]');
        const SUFFIX = '-text'
        const spans = document.querySelectorAll(`#preview-area span[class$="${SUFFIX}"]`);

        const currentCard = {}
        for (let span of spans) {
            const className = span.className
            console.log('span with class', className)
            const srcId = className.substring(0,className.length-SUFFIX.length)
            console.log('srcid', srcId)
            // TODO: to the value of the corresponding inputs in the form.
            currentCard[srcId] = document.getElementById(srcId).value;
            span.textContent = currentCard[srcId]
        }
        
    })

    
    // When the "save" button is clicked, you should add the card to an array and save the array of cards to localStorage:
    
}    

document.addEventListener('DOMContentLoaded',init)


//     You should start by loading the existing array from localStorage with the key cards.
//         If there doesn’t exist an entry with the key, create a new array and assign it to a variable.
//         If there does exist an entry with the key, you should parse it and assign it to a variable.
//     Create a new JavaScript object(aka map / dictionary) to represent the current card.
//         It should have five properties: to, from, title, subtitle, and message.
//         The properties should be set to the corresponding value from the form.
//     Add the new object to the end of the array.
//     Store the array in localStorage to the entry with the key cards, overwriting any existing entry.
//     Don’t forget: localStorage only lets you store strings, so you’ll need to "stringify" the array!

//     Saving multiple cards should result in an array containing all the cards.You can use the developer console in Chrome / Edge and Firefox to check if you’re doing this correctly: