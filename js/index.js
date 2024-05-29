

var quote = [
    "“Its not what happens to you, but how you react to it that matters.”",
    "“The best revenge is massive success.”",
    "“A room without books is like a body without a soul.”",
    "“Do not take life too seriously. You will not get out alive.”",
    "“Resentment is like drinking poison and waiting for your enemies to die.”"
];

var usedquote = []


document.getElementById("button").addEventListener("dblclick" , function() {
    if (usedquote.length === quote.length) {
        usedquote = []
    }

    var index;
    for (var i = 0; i < quote.length; i++) {
        index = Math.floor (Math.random () * quote.length);
        if (!usedquote.includes(index)) {
            break;
        }
        
    }
    usedquote.push(index);
    document.getElementById("paragraf").innerText = quote[index]
})
















