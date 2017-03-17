var defaultOptions = showdown.getDefaultOptions();
defaultOptions.simpleLineBreaks = true;


function runMarkdownCompiler(){
    var text = document.getElementById("docs").innerText;
        target = document.getElementById("docs"),
        converter = new showdown.Converter();

    var html = converter.makeHtml(text);
    console.log(html);
        target.innerHTML = html;
}
runMarkdownCompiler();
