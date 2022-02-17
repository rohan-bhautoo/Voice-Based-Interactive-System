<p align="center">
  <img height="250" src="https://github.com/rohan-bhautoo/Voice-Based-Interactive-System/blob/main/Screenshots/VUI-logo.png">
</p>
<h1 align="center">Voice Based Interactive System</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.5.0-brightgreen.svg" />
  <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap_4-563D7C?logo=bootstrap&logoColor=white" />
</p>

## Description
> A Student Support System where users can control all funcionalities using voice commands. Web Speech API provides the functionality to use speech recognition and speech synthesis into web apps to handle voice data.
> 
> See other images of the website in the [Screenshot](/Screenshots) folder.
### 🏠 [Homepage](/Voice-based%20interactive%20system/html/Index.html)
<p align="center">
  <img height="450" src="https://github.com/rohan-bhautoo/Voice-Based-Interactive-System/blob/main/Screenshots/Mainpage.png">
</p>

## Prerequisite

### Bootstrap 4
> Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. The bootstrap 4 libraries are already downloaded and added in the [CSS](/Voice-based%20interactive%20system/css) and [JS](/Voice-based%20interactive%20system/js) folders. It is also referrenced in the [Index.html](/Voice-based%20interactive%20system/html/Index.html) file. You can also download it [here](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
```html
<head>
  <title>Student Support Assistant</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/bootstrap.css">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<script src="../js/bootstrap.js"></script>
```

## Web Speech API
> The Web Speech API enables you to incorporate voice data into web apps. The Web Speech API has two parts: ```SpeechSynthesis (Text-to-Speech)```, and ```SpeechRecognition (Asynchronous Speech Recognition)```. 

### Speech Synthesis
> Speech synthesis is accessed via the [SpeechSynthesis interface](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesizer). Different voice types are represented by [SpeechSynthesisVoice](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice) objects, and different parts of text that you want to be spoken are represented by [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) objects. You can get these spoken by passing them to the [SpeechSynthesis.speak()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak) method.

### Speech Recognition
> Speech recognition is accessed via the [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) interface, which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately. Generally you'll use the interface's constructor to create a new [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) object, which has a number of event handlers available for detecting when speech is input through the device's microphone. The [SpeechGrammar](https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar) interface represents a container for a particular set of grammar that your app should recognize. Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/).
> 
> *Note: On some browsers, like Chrome, using Speech Recognition on a web page involves a server-based recognition engine. Your audio is sent to a web service for recognition processing, so it won't work offline.*

## Usage
> The Help Section contains all the active commands for the Student Support System.
<p align="center">
  <img height="450" src="https://github.com/rohan-bhautoo/Voice-Based-Interactive-System/blob/main/Screenshots/help-section.png">
</p>

> Open the [Homepage](/Voice-based%20interactive%20system/html/Index.html) in your browser to get started! 

## Author

👤 **Rohan Bhautoo**

* Github: [@rohan-bhautoo](https://github.com/rohan-bhautoo)
* LinkedIn: [@rohan-bhautoo](https://linkedin.com/in/rohan-bhautoo)

## Show your support

Give a ⭐️ if this project helped you!
