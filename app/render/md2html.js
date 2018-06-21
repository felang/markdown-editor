const markdown = require('markdown').markdown


const textarea = e('#edit-textarea')

const convertCallback = () => {
    let i = textarea.value
    // console.log('value', i.length);
    let show = e('.show-block')
    show.innerHTML = markdown.toHTML(i)
}

bindEvent(textarea, 'input', convertCallback)
