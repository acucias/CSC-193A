function hello() {
    alert("Hello, world!");
}

function textBigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function mooStyles() {
    var textArea = document.getElementById("text");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        // Trim leading/trailing spaces from each sentence
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            // Split sentence into words
            let words = sentence.split(" ");
            // Add "-Moo" to the last word
            words[words.length - 1] += "-Moo";
            // Rejoin the words and update the sentence
            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(". ");
    textArea.value = text;

}

function addTextStyles() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function clearTextStyles() {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function handleChange() {
    // Get the radio buttons by name
    var fancyButton = document.getElementById("fancy");
    var boringButton = document.getElementById("boring");

    if (fancyButton.checked) {
        addTextStyles();
    }
    else if (boringButton.checked) {
        clearTextStyles();
    }
}
