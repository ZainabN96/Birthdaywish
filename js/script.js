function typeMultipleLines(lines, ids, callback) {
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex >= lines.length) {
    if (callback) callback();
    return;
    }

    const el = document.getElementById(ids[lineIndex]);
    el.innerHTML = ""; // clear previous content
    charIndex = 0;

    function typeChar() {
    if (charIndex < lines[lineIndex].length) {
        el.innerHTML += lines[lineIndex].charAt(charIndex++);
        setTimeout(typeChar, 50);
    } else {
        lineIndex++;
        setTimeout(typeLine, 300); // wait before next line
    }
    }
    typeChar();
}

typeLine();
}

// Call this on DOM ready
window.addEventListener("DOMContentLoaded", () => {
const introLines = [
    'Hi Zeeshan',
    'I want to share something...'
];
const introIDs = ['introHeading', 'introPara'];

typeMultipleLines(introLines, introIDs, () => {
    document.getElementById("startBtn").style.display = "inline-block";
});
});

const memories = [
{
    top: "Hamari mulaqat ek Haseen Log mein hui...",
    img: "img/me1.jpg",
    bottom: "Wo choti choti comments... jin sy yeh dosti shuru hui thi..."
},
{
    top: "Phr Messenger ka group, jahn tum, main or meri 2 dostien thin...",
    img: "img/memory2.jpeg",
    bottom: "Gap shap, hansi mazaak, sab yaadgar ban gaya..."
},
{
    top: "Phr dubara sy chating start hui..",
    img: "img/memory3.jpg",
    bottom: "Jo k ek zindgi ka hissa ban gii, Bt krty krty pta hii nai chla...."
},
{
    top: "2020 Ramzan mein Ludo, pubg",
    img: "img/ludo.jpg",
    bottom: "Roz roz baatein krna masti krna... Choti moti nokh jhok..."
},
{
    top: "Mera tmhy stories sunna",
    img: "img/story.jpg",
    bottom: "Tm intrested nai hoty thy phr b interest show krwaty thy..."
},
{
    top: "Our Nick Names",
    img: "img/names.jpg",
    bottom: "Hm ny ek dosry ko kitny nickname diye, Uncle Aunty, Jin Churail, Bhensa Bhens etc"
},
{
    top: "Har mushkil waqt mei tum saath thy...",
    img: "img/support.jpg",
    bottom: "Baba ki death, mood swings, mera bewaja ka gussa krna, hmari laraiyan.... Tm hmsha sth rahy...."
},
{
    top: "You become so special...",
    img: "img/zeenab.jpg",
    bottom: "Ek acha b or bura b wqt sth guzara lekin tm ny kbi sth nai chora...."
},
{
    top: "Thank You",
    img: "img/10q.png",
    bottom: "Itna saath dyny k liye thnk you... Mjy bardash krny k liye... Meri Chawaliyan sunny k liye..."
}
];

let currentIndex = 0;

function typeWriterEffect(elementId, text, callback) {
let i = 0;
const speed = 40;
const element = document.getElementById(elementId);
element.textContent = "";
function type() {
    if (i < text.length) {
    element.textContent += text.charAt(i++);
    setTimeout(type, speed);
    } else if (callback) {
    callback();
    }
}
type();
}

function showMemory(index) {
const mem = memories[index];
const img = document.getElementById("memoryImage");
const topEl = document.getElementById("topTypewriter");
const bottomEl = document.getElementById("bottomTypewriter");
const nextBtn = document.getElementById("nextBtn");

// Reset visibility
img.style.opacity = 0;
bottomEl.textContent = "";
nextBtn.style.display = "none";

// Start typing top text
typeWriterEffect("topTypewriter", mem.top, () => {
    // After top text done, show image
    setTimeout(() => {
    img.src = mem.img;
    img.style.transition = "opacity 1s";
    img.style.opacity = 1;

    // After image shown, show bottom text
    setTimeout(() => {
        typeWriterEffect("bottomTypewriter", mem.bottom, () => {
        // After bottom text done, show next button
        setTimeout(() => {
            nextBtn.style.display = "inline-block";
        }, 400);
        });
    }, 1000); // wait for image fade in
    }, 500); // small pause after top text
});

const memorySection = document.getElementById("memoriesSection");
memorySection.classList.remove("slide-in");
void memorySection.offsetWidth;
memorySection.classList.add("slide-in");
}

function showMemories() {
document.getElementById("introBox").classList.add("hidden");
const memory = document.getElementById("memoriesSection");
memory.classList.remove("hidden");
memory.classList.add("fade-in", "slide-in");
showMemory(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", () => {
currentIndex++;
if (currentIndex < memories.length) {
    showMemory(currentIndex);
} else {
    document.getElementById("memoriesSection").classList.add("hidden");
    const wish = document.getElementById("wishBox");
    wish.classList.remove("hidden");
    wish.classList.add("fade-in");
    setTimeout(showLines, 1000); // ✅ Correct function call
}
});

const messageLines = [
"You are not just my friend... you're my blessing... <i class='fas fa-star'></i>",
"Dur ho... lekin dil ky sab sy kareeb ho...",
"Hmasha muskuraty raho, har din nayi umeedon sy bhara ho...",
"Tum jiyo hazaron saal...",
"Duniya ki har khushi tumhary kadmon mein ho...",
"Kamyabi tumhari pehchaan ban jaye...",
"Har manzil tumhary liye asaan ho, har raasta roshan ho...",
"Allah taala tumhein har gham, har takleef sy mehfooz rakhay...",
"Tmhy kabhi koi gham chhoo na saky, koi garam hawa bhi na lagy...",
"Tumhara har din barkat bhara ho, or har raat sukoon wali ho... ",
"Rizq mein izafa ho, sehat mein barkat ho, or har mushkil asaan ho... ",
"Tumhein duniya ki har ni’mat naseeb ho, or akhirat mein bhi kamiyabi mily... ",
"Ameen SumAmeen... 🤲",
"Happy Birthday Zeeshan! <i class='fas fa-birthday-cake'></i>"
];

const container = document.getElementById("birthdayMessage");
let currentLine = 0;

function typeLine(htmlLine, callback) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlLine;
    const fullText = tempDiv.textContent || tempDiv.innerText;

    let i = 0;
    const p = document.createElement("p");
    container.appendChild(p);

    function typeChar() {
    if (i < fullText.length) {
        p.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeChar, 40);
    } else {
        p.innerHTML = htmlLine;
        setTimeout(callback, 700);
    }
    }

    typeChar();
    //showLines();
}

function showLines() {
    if (currentLine < messageLines.length) {
    typeLine(messageLines[currentLine], () => {
        currentLine++;
        showLines();
    });
    }
}