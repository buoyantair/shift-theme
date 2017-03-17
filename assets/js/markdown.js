function runMarkdownCompiler(){
    var text = document.getElementById("docs").innerText,
        target = document.getElementById("docs"),
        converter = new showdown.Converter(),
        html = converter.makeHtml(text);

        target.innerHTML = html;
}
runMarkdownCompiler();
