/**
 * The updateVUI.js script will update the chatbox and add the user's speech dialog to the GUI.
 *
 */
window.onload = function(){
    play("Hey there, how may i help you today?");
}

/**
 * This function launches the recognition and changes the microphone icon.
 */
function activateSpeech(){
    let infoMessage = document.getElementById('info');
    infoMessage.innerText = "Listening...";

    let speakBtn = document.getElementById('speakBtn');
    speakBtn.classList.add("btn", "speak");
    speakBtn.innerHTML = '<img class="img-fluid" src="../Img/icons8-audio-wave.gif" width="150" height="150" alt="Speak Now">'
    recognition.start();
}

const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
p.classList.add("sent");

/**
 * Detects when the recognition ends.
 */
recognition.addEventListener("end", endSpeechRecognition);
function endSpeechRecognition() {
    let speakBtn = document.getElementById('speakBtn');
    speakBtn.classList.add("btn", "speak");
    speakBtn.innerHTML = '<img class="img-fluid" src="../Img/microphone.png" width="150" height="150" alt="Speak Now">'

    let infoMessage = document.getElementById('info');
    infoMessage.innerText = "Click on the icon to activate voice commands";
    console.log("Speech recognition service disconnected");
}

/**
 * Output result from recognition.
 */
recognition.addEventListener('result', (e) =>{
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;
    document.getElementById('message').appendChild(p);
    let DivObj = document.getElementById("scrollBox");
    DivObj.scrollTop = DivObj.scrollHeight;

    if(e.results[0].isFinal){
        let speakBtn = document.getElementById('speakBtn');
        speakBtn.classList.add("btn", "speak");
        speakBtn.innerHTML = '<img class="img-fluid" src="../Img/microphone.png" width="150" height="150" alt="Speak Now">'
        let infoMessage = document.getElementById('info');
        infoMessage.innerText = "Click on the icon to activate voice commands";

        checkSpeech(text);

        let object = document.getElementById("scrollBox");
        object.scrollTop = object.scrollHeight;

        p=document.createElement('p');
        p.classList.add("sent");
    }
});

/**
 * Launches SpeechSynthesisUtterance() function to speak text.
 * @param text
 */
function play(text){
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
}

/**
 * Clears unrecognized text
 * @param text
 * @returns {string}
 */
function validateText(text) {
    text = text.replace(/\s\s+/g, ' ');
    text = text.toLowerCase();
    text = text.replace('?', '');
    text = text.replace('!', '');
    text = text.replace('`', '');
    text = text.replace('~', '');
    text = text.replace('@', '');
    text = text.replace('#', '');
    text = text.replace('$', '');
    text = text.replace('%', '');
    text = text.replace('^', '');
    text = text.replace('&', '');
    text = text.replace('*', '');
    text = text.replace('(', '');
    text = text.replace(')', '');
    text = text.replace('-', '');
    text = text.replace('_', '');
    text = text.replace('=', '');
    text = text.replace('+', '');
    text = text.replace('[', '');
    text = text.replace('{', '');
    text = text.replace(']', '');
    text = text.replace('}', '');
    text = text.replace(';', '');
    text = text.replace(':', '');
    text = text.replace('\'', '');
    text = text.replace('"', '');
    text = text.replace('\\', '');
    text = text.replace('|', '');
    text = text.replace(',', '');
    text = text.replace('<', '');
    text = text.replace('.', '');
    text = text.replace('>', '');
    text = text.replace('/', '');
    return text;
}