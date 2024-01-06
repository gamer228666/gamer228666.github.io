function generateKey(length) {
    const baseKey = "wordle";
    const keyRepeats = Math.ceil(length / baseKey.length);
    return baseKey.repeat(keyRepeats);
}

function solve(endOfUrl) {
    let decryptedText = '';
    const key = generateKey(endOfUrl.length);
    
    for (let i = 0; i < endOfUrl.length; i++) {
        const char = endOfUrl[i];
        if (char.match(/[a-zA-Z]/)) {
            const shift = key[i % key.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            if (char.match(/[A-Z]/)) {
                const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
                decryptedText += decryptedChar;
            } else {
                const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26) + 'a'.charCodeAt(0));
                decryptedText += decryptedChar;
            }
        } else {
            decryptedText += char;
        }
    }
    
    return decryptedText;
}

function decryptUrl() {
    const fullUrl = document.getElementById('url_input').value;
    const urlEnd = fullUrl.split('=')[1];
    const decryptedOutput = solve(urlEnd);
    
    if (fullUrl.includes("!")) {
    	document.getElementById('decrypted_output').innerText = 'no solution for u :)';
    } else {
        document.getElementById('decrypted_output').innerText = 'solution: ' + decryptedOutput;
    }
}

function clearInput(input, output) {
    document.getElementById(input).value = '';
    document.getElementById(output).innerText = '';
    document.getElementById('link_output').href = ""
}

function makeImpossible() {
		let possibleWord = document.getElementById('word_input').value
    let newWord
 		newWord = possibleWord.toString().replace('a', 'а')
    // newWord = newWord.toString().replace('b', '')
    newWord = newWord.toString().replace('c', 'с')
    newWord = newWord.toString().replace('d', 'ԁ')
    newWord = newWord.toString().replace('e', 'е')
    // newWord = newWord.toString().replace('f', '')
    newWord = newWord.toString().replace('g', 'ġ')
    newWord = newWord.toString().replace('h', 'һ')
    newWord = newWord.toString().replace('i', 'і')
    newWord = newWord.toString().replace('j', 'ј')
    newWord = newWord.toString().replace('k', 'κ')
    newWord = newWord.toString().replace('l', 'ӏ')
    // newWord = newWord.toString().replace('m', '')
    newWord = newWord.toString().replace('n', 'ո')
    newWord = newWord.toString().replace('o', 'о')
    newWord = newWord.toString().replace('p', 'р')
    newWord = newWord.toString().replace('q', 'զ')
    // newWord = newWord.toString().replace('r', '')
    newWord = newWord.toString().replace('s', 'ʂ')
    // newWord = newWord.toString().replace('t', '')
    newWord = newWord.toString().replace('u', 'υ')
    newWord = newWord.toString().replace('v', 'ν')
    // newWord = newWord.toString().replace('w', '')
    newWord = newWord.toString().replace('x', 'х')
    newWord = newWord.toString().replace('y', 'у')
    newWord = newWord.toString().replace('z', 'ʐ')
    
    const link = 'https://mywordle.strivemath.com/?word=' + newWord;
    document.getElementById('link_output').innerText = link;
    document.getElementById('link_output').href = link
}

function copyLink() {
	if (document.getElementById('link_output').href != "") {
  	navigator.clipboard.writeText(document.getElementById('link_output').href);
  }
}
