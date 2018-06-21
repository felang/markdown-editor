function run() {
    window.onload = e('#editor').focus()
// marked
    var markedRender = new marked.Renderer();
    marked.setOptions({
        renderer: markedRender,
        gfm: true,
        tables: true,
        breaks: true,  // '>' 换行，回车换成 <br>
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });

    // codemirror editor
    var editor = CodeMirror.fromTextArea(document.querySelectorAll('#editor')[0], {
        mode: 'markdown',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        lineWrapping: true,  // 长句子折行
        theme: "material",
        keyMap: 'sublime',
        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    });
    editor.on('change', editorOnHandler);
}

function editorOnHandler(cm, co) {
    document.querySelector('.markdown-body').innerHTML = marked(cm.getValue())
    // document.querySelectorAll('.markdown-body').forEach(function(i, block) {
    //     Prism.highlightElement(block);
    // });
}

run()