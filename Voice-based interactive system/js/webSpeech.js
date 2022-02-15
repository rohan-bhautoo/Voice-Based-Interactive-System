/**
 * The webSpeech.js checks whether specific word or words are detected in the text.
 * @param text
 */
function checkSpeech(text) {
    text = validateText(text);
    p = document.createElement('p');

    if (text.includes('hello') || text.includes('hi') || text.includes('hey')
        || text.includes('Good morning'))  {
        const selectRandom = Math.floor(Math.random() * introduction.length);
        p.innerText = introduction[selectRandom];
        play(introduction[selectRandom]);
        document.getElementById('message').appendChild(p);
    }  else if (text.includes('mail') || text.includes('outlook') || text.includes('email')
        || text.includes('email address') || text.includes('email login')) {
        const selectRandom = Math.floor(Math.random() * email.length);
        p.innerText = email[selectRandom];
        play(email[selectRandom]);
        document.getElementById('message').appendChild(p);
        window.setTimeout(function () {
            window.open(emailLink);
        }, 3000);
    }  else if (text.includes('myunihub') || text.includes('my learning') || text.includes('unihub')
        || text.includes('portal') || text.includes('university website')) {
        const selectRandom = Math.floor(Math.random() * unihub.length);
        p.innerText = unihub[selectRandom];
        play(unihub[selectRandom]);
        document.getElementById('message').appendChild(p);
        window.setTimeout(function () {
            window.open(unihubLink);
        }, 3000);
    } else if (text.includes('grades') || text.includes('progression') || text.includes('progress')
        || text.includes('achievement')) {
        const selectRandom = Math.floor(Math.random() * grades.length);
        const url = gradesLink;
        let p2 = document.createElement('p');
        let a = document.createElement('a');
        a.setAttribute("href",url);
        p2.innerText = a;

        p.innerHTML = grades[selectRandom];
        play(grades[selectRandom]);
        document.getElementById('message').append(p, p2);
    } else if (text.includes('extension') || text.includes('extend') || text.includes('Assessment extension')) {
        const selectRandom = Math.floor(Math.random() * extension.length);
        p.innerText = extension[selectRandom];
        play(extension[selectRandom]);
        document.getElementById('message').appendChild(p);

        window.setTimeout(function () {
            window.open(extensionLink);
        }, 3000);
    } else if (text.includes('learn programming') || text.includes('learn coding')
        || text.includes('sites to learn programming') || text.includes('programming')
        || text.includes('coding') || text.includes('learn') || text.includes('recommend')) {
        const selectRandom = Math.floor(Math.random() * learnCode.length);
        p.innerText = learnCode[selectRandom];

        let sites = document.createElement('p');
        sites.innerText = "1. BitDegree (https://www.bitdegree.org/learn/)\n" +
            "2. Coursera (https://www.hostinger.com/tutorials/recommends/coursera/)\n" +
            "3. Code Academy (https://www.codecademy.com/)\n" +
            "4. edX (https://www.edx.org/course/subject/computer-science)\n" +
            "5. Khan Academy (https://www.khanacademy.org/computing/computer-programming)";

        play(learnCode[selectRandom]);
        document.getElementById('message').append(p, sites);
    } else if (text.includes('time table') || text.includes('exam period') || text.includes('assessment time table')
        || text.includes('assessment period')) {
        const selectRandom = Math.floor(Math.random() * timetable.length);
        p.innerText = timetable[selectRandom];
        play(timetable[selectRandom]);
        document.getElementById('message').appendChild(p);

        window.setTimeout(function () {
            window.open(timetableLink);
        }, 3000);
    } else if (text.includes('open navigation') || text.includes('nav') || text.includes('help')) {
        openNav();
    } else if (text.includes('stop recording') || text.includes('stop')) {
        const selectRandom = Math.floor(Math.random() * stop.length);
        p.innerText = stop[selectRandom];
        play(stop[selectRandom]);
        recognition.stop();
        document.getElementById('message').appendChild(p);
    } else if (text.includes('bye') || text.includes('goodbye') || text.includes('Cya')) {
        const selectRandom = Math.floor(Math.random() * goodbye.length);
        p.innerText = goodbye[selectRandom];
        play(goodbye[selectRandom]);
        document.getElementById('message').appendChild(p);
    } else {
        const selectRandom = Math.floor(Math.random() * errors.length);
        p.innerText = errors[selectRandom];
        play(errors[selectRandom]);
        document.getElementById('message').appendChild(p);
    }
}