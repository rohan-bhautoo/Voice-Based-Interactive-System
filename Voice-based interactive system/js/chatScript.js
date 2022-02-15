/**
 * The chatScript.js contains all the words that the assistant should respond according to
 * the activated command.
 *
 * @type {string[]}
 */

// Introduction message
var introduction = [
    "Hey there, how may i be of your assistance today?",
    "Hello, enter a voice command from the provided list.",
    "Hi, how may i help you?"
];

// Login to email address
const emailLink = "https://www.outlook.com/live.mdx.ac.uk";
var email = [
    "Opening outlook...",
    "I am redirecting you to the login page.",
    "Redirecting you to outlook's login page!"
]

// MyUnihub website
const unihubLink = "https://myunihub.mdx.ac.uk/";
var unihub = [
    "I am redirecting you to the login page",
    "Sure, i am opening the sign in page in a new tab. Please check if you have enabled pop-up.",
    "Opening myUnihub page for you"
];

// View grades
const gradesLink = "https://lln1p-banf02.mdx.ac.uk:7106/ssomanager/c/SSB?pkg=mdx_mymodules_pkg.mdx_student_check_prog_p";
var grades = [
    "Your grades results is found on myUnihub website under My Study section. Use the link below to view your grades.",
    "Your progression can be found in the link below.",
    "Please use the link below to access your grades and progression."
];

// Exams timetable
const timetableLink = "https://mdxsys.mdx.ac.uk/MdxApps/ExamTime/SearchExamTime.asp";
var timetable = [
    "See your timetable in this website. Refer to your module leader if you need more information."
];

// Extenuating circumstances
const extensionLink = "https://unihub.mdx.ac.uk/your-study/assessment-and-regulations/extenuating-circumstances";
var extension = [
    "I am redirecting you to a link for further information and guidelines about extenuating circumstances.",
    "Sending you to the extenuating website for more information.",
    "I found a link that has further information and guidelines. Transferring you now..."
];

// Useful websites for programming
var learnCode = [
    "Here, i found the top five websites to learn coding:",
    "The following sites are the best recommendation to learn programming for free:",
    "Refer to the list to learn programming online for free."
];

// Stop recognition
var stop = [
    "Alright, i am disabling the microphone..",
    "The listening process has been stopped!"
];

// End conversation
var goodbye = [
    "Goodbye. I look forward to help you again.",
    "It was a pleasure talking to you. Have a great day!",
    "Bye and have a great day!"
];

// Error messages
var errors = [
    "Sorry, I didn't understand. Can you try re-phrasing please?",
    "I didn't quite catch that! Can you please repeat?"
];