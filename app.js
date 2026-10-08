/* =====================================================
   STATE
===================================================== */

const STORAGE_KEY =
        "lastDispatchPrototype";

let state = {

    stamps: 0,
    completedSites: [],

    fragments: [],
    passphraseCompleted: false,

    quizAttempted: false,

    quizCorrect: 0,

    redemptions: [],

    memories: []

};


/* =====================================================
   STORY DATA
=====================================================

   Each scene can contain:

   speaker
   text
   choices

   choices contain:

   text
   next

   "next" tells the game which
   scene to go to.

===================================================== */

const sites = {};


sites[1] = {
    title: "Fort Canning",
    left: "Harbour Signaller (illustrative)",
    right: "Combined Operations staff",
    fragment: "SING",
    sourceLabel: "Wikipedia: Battlebox, and Fort Canning Lighthouse (citing National Heritage Board on-site board)",
    sourceUrl: "https://en.wikipedia.org/wiki/Battlebox",
    images: [
        { src: "Images/fortcanning/fort-canning-park-nature-walk-hero-spice-gallery.jpg", caption: "Fort Canning Park" },
        { src: "Images/fortcanning/34bc87402c26577dc5053ccdd613b2a4d708ac0a-1600x1067.jpg", caption: "Fort Canning grounds" },
        { src: "Images/fortcanning/69e9cfd927b48c69a3350765_6935908dc7048c189e5a3730_58ba2aa8.png", caption: "Fort Canning heritage landscape" },
        { src: "Images/fortcanning/765321a9f9b7f0dd4307358e830104de0454841e3a76e9b9adf04d7a36eb61aa.avif", caption: "Fort Canning" }
    ],
    story: [
        {
            speaker: "FORT CANNING HILL — A VIEW OVER THE HARBOUR",
            text: "After the British set up a port in Singapore in 1819, they made Fort Canning Hill a communications centre, because it overlooked the harbour. The first facility on the hill was a flagstaff. A time ball, a lighthouse and a telegraph office followed.",
            choices: null
        },
        {
            speaker: "FEBRUARY 1942 — FROM SIGNALS TO COMMAND",
            text: "By February 1942 the hill's job had changed from signalling to command. Combined Operations Headquarters moved into the underground bunker, now called the Battlebox, on 11 February. Four days later, Lieutenant-General Percival met his senior officers there to decide whether to surrender.",
            choices: null
        },
        {
            speaker: "A HILL AT THE CENTRE OF THE CITY — DECISION POINT",
            text: "This is a reflection question, not a historical record of anyone's choice. Why do you think the hill was chosen, first for signals and later for a headquarters?",
            choices: [
                { text: "Its height gave a clear view over the harbour.", next: 3 },
                { text: "A bunker underground gave protection from bombing.", next: 4 }
            ]
        },
        {
            speaker: "THE HILL'S VIEW",
            text: "YOU CHOSE: the view. That is the reason the record gives for the hill's early role: it overlooked the harbour, so signals from here could be seen from the sea and from the port. The same hill later held a headquarters because the high ground and the bunker were already there. The next two stops look at the signalling side of the hill: the flagstaff and the lighthouse.",
            choices: null,
            finish: true
        },
        {
            speaker: "THE BUNKER'S PROTECTION",
            text: "YOU CHOSE: protection. That fits the Battlebox, which was built underground as a command centre. But the hill's choice as a communications site goes back much earlier, to the 1819 port, when the reason was its view of the harbour rather than protection from air raids. The next two stops look at that signalling side of the hill: the flagstaff and the lighthouse.",
            choices: null,
            finish: true
        }
    ]
};

sites[2] = {
    title: "Flagstaff",
    left: "Signaller on duty (illustrative)",
    right: "Harbour watch (illustrative)",
    fragment: "APORE",
    sourceLabel: "Roots.gov.sg (National Heritage Board): Flagstaff on Government Hill",
    sourceUrl: "https://www.roots.gov.sg/Collection-Landing/listing/1131789",
    locationNote: "No source I found describes the flagstaff's role in 1942. This stop is about how the hill's signalling worked. The signaller is an illustrative role, not a real person.",
    images: [
        { src: "Images/flagstaff/flagstaff-outzoom.jpg", caption: "Fort Canning flagstaff, viewed from a distance" },
        { src: "Images/flagstaff/fort-canning-flagstaff-outside.jpg", caption: "Fort Canning flagstaff" },
        { src: "Images/flagstaff/fort-canning-flagstaff.-descjpg.jpg", caption: "The flagstaff at Fort Canning" }
    ],
    story: [
        {
            speaker: "THE FLAGSTAFF — SIGNALS FOR THE PORT",
            text: "The flagstaff on Government Hill, today's Fort Canning, signalled the arrival of ships. It was one of a set of flagstaffs on high ground with a view of the entrances to the Singapore River and the harbour. The others stood on Mount Faber and on Pulau Blakang Mati, now Sentosa.",
            choices: null
        },
        {
            speaker: "THE 1840s — WAITING FOR MAIL",
            text: "In the 1840s, mail from London took more than a month to reach Singapore. The flagstaff announced the mail ships. A red ensign meant mail from Europe, and a yellow flag meant mail from China.",
            choices: null
        },
        {
            speaker: "SIGNAL DUTY — DECISION POINT",
            text: "You are the signaller on duty. This is an illustrative role, not a real person. A mail steamer from Europe has just been sighted from the hill. Which flag do you raise?",
            choices: [
                { text: "The red ensign.", next: 3 },
                { text: "The yellow flag.", next: 4 }
            ]
        },
        {
            speaker: "THE RIGHT SIGNAL",
            text: "YOU CHOSE: the red ensign, and that matches the record. A red ensign meant European mail. By 1855 a lantern had also been fixed to the top of the flagstaff, so it could signal by night too. Later that light was replaced by the Fort Canning Lighthouse, the next stop on the trail.",
            choices: null,
            finish: true
        },
        {
            speaker: "THE WRONG SIGNAL",
            text: "YOU CHOSE: the yellow flag, which meant mail from China. The record gives a red ensign for European mail, so a signal like this would have misled the port. By 1855 a lantern had also been fixed to the top of the flagstaff, so it could signal by night too. Later that light was replaced by the Fort Canning Lighthouse, the next stop on the trail.",
            choices: null,
            finish: true
        }
    ]
};

sites[3] = {
    title: "Lighthouse",
    left: "Lightkeeper (illustrative)",
    right: "Ship's lookout (illustrative)",
    fragment: "HIST",
    sourceLabel: "Roots.gov.sg (National Heritage Board): The Tale of Three Lighthouses",
    sourceUrl: "https://www.roots.gov.sg/en/stories-landing/stories/the-tale-of-three-lighthouses/story",
    locationNote: "Sources differ on the build year (1902 or 1903). No source I found describes a specific 1942 event here. The lightkeeper and lookout are illustrative roles, not real people.",
    images: [
        { src: "Images/lighthouse/1761458925-light-keeper-tn.jpg", caption: "Lighthouse keeper" },
        { src: "Images/lighthouse/dd3a29d5be4ed3612486d6b407a6c3e7.jpg", caption: "Singapore lighthouse" },
        { src: "Images/lighthouse/Fort_Canning_Lighthouse_09-11-2023_(cropped).jpg", caption: "Fort Canning Lighthouse" }
    ],
    story: [
        {
            speaker: "THE LIGHT ON THE HILL",
            text: "Around 1902 to 1903, the Fort Canning Lighthouse replaced the old flagstaff light. Riley, Hargreaves and Company built it on the southern part of the hill. The tower was 24.3 metres high, and its light came from a vaporised kerosene burner producing 20,000 candelas.",
            choices: null
        },
        {
            speaker: "A LIGHT THAT BLINKS",
            text: "The light was not steady. A metal cylinder was lowered around the burner so that the beam was cut off for three seconds every 17 seconds. Sailors tell lighthouses apart by this kind of pattern.",
            choices: null
        },
        {
            speaker: "THE LOOKOUT'S QUESTION — DECISION POINT",
            text: "You are a lookout on a ship, and this is an illustrative role. Why would the lighthouse go dark for three seconds every 17?",
            choices: [
                { text: "So ships can recognise this light and tell it from others.", next: 3 },
                { text: "To save kerosene.", next: 4 }
            ]
        },
        {
            speaker: "A RECOGNISABLE PATTERN",
            text: "YOU CHOSE: recognition, which is how light patterns work. A ship that saw a light cut off for three seconds every 17 could tell it from other lights along the coast. The lighthouse guided ships for 55 years. It was decommissioned on 12 December 1958, after tall buildings blocked its view from the sea. The original tower survived the Second World War. Today's lighthouse on the hill is a replica, relit in April 2014.",
            choices: null,
            finish: true
        },
        {
            speaker: "NOT QUITE",
            text: "YOU CHOSE: saving fuel. The sources don't give that as a reason. The pattern is how a light is identified: a ship that saw a light cut off for three seconds every 17 could tell it from other lights. The lighthouse guided ships for 55 years. It was decommissioned on 12 December 1958, after tall buildings blocked its view from the sea. The original tower survived the Second World War. Today's lighthouse on the hill is a replica, relit in April 2014.",
            choices: null,
            finish: true
        }
    ]
};

sites[4] = {
    title: "Underground Bunker",
    left: "Lieutenant-General Arthur Percival",
    right: "Senior Allied officers",
    fragment: "ORY",
    sourceLabel: "National Archives of Singapore, WWII: Battle for Singapore",
    sourceUrl: "https://www.nas.gov.sg/archivesonline/battleforsingapore",
    images: [
        { src: "Images/bunker/banner.jpg", caption: "Battlebox entrance area" },
        { src: "Images/bunker/battlebox-singapore-10.jpg", caption: "The Battlebox underground command centre" },
        { src: "Images/bunker/BattleBoxEntrance.jpg", caption: "Entrance to the Battlebox" }
    ],
    story: [
        {
            speaker: "15 FEBRUARY 1942 — THE BATTLEBOX",
            text: "On the morning of 15 February 1942, Lieutenant-General Arthur Percival met with eleven senior Allied officers in the underground command centre at Fort Canning Hill, now known as the Battlebox. The meeting lasted roughly fifteen minutes. After more than two months of fighting, the defenders faced dwindling supplies and a worsening military position. They had been ordered to continue resisting, but the commanders had to weigh that order against the immediate consequences for the troops and people still in Singapore. This was not a fictional dilemma invented for a game: the meeting and the surrender decision are part of the historical record. The interactive choice that follows is still yours, and it cannot change the outcome. You are being asked to consider how a commander might weigh continued resistance against ending a battle when the ability to defend the city is collapsing. Choose one path, then the story will clearly separate your answer from Percival's real decision and the events that followed.",
            choices: null
        },
        {
            speaker: "THE COMMAND MEETING — DECISION POINT",
            text: "You are in the command meeting as a reflection exercise. Do you advise Percival to surrender and stop further fighting, or to continue the defence despite the danger and dwindling supplies? Neither button changes the record. The next scene will repeat your choice in plain language and state the historical decision that was actually made.",
            choices: [
                { text: "Advise surrender to stop further fighting.", next: 2 },
                { text: "Advise continuing the defence.", next: 3 }
            ]
        },
        {
            speaker: "HISTORICAL CONTINUATION — PERCIVAL AGREES TO SURRENDER",
            text: "YOU CHOSE: advise surrender. That matches the historical outcome. Percival and the senior officers concluded that continued resistance could not be sustained. Later that day, Percival went to the Ford Motor Factory to meet Japanese commander Tomoyuki Yamashita. Yamashita demanded immediate, unconditional surrender; Percival signed the surrender document that evening. Singapore fell on 15 February 1942, and the Japanese Occupation lasted until 1945. The surrender ended the fighting but began a period of hardship for prisoners of war and civilians. Your answer is a reflection, not a claim that you took part in the real meeting. The account comes from the documented Battlebox meeting and surrender timeline; it is not a transcript of dialogue. The source link identifies the historical reference used for this scene.",
            choices: null,
            finish: true
        },
        {
            speaker: "HISTORICAL CONTINUATION — THE RECORD DOES NOT BRANCH",
            text: "YOU CHOSE: advise continuing the defence. That is the alternative you selected, not Percival's historical decision. At the Battlebox meeting on 15 February 1942, Percival and eleven senior officers considered the situation and agreed that resistance could not continue. Percival later met Yamashita at the Ford Motor Factory; after Yamashita demanded immediate, unconditional surrender, Percival signed the document that evening. The city fell and the occupation began. This branch does not invent a different battle or imply that your answer changed the lives of people there. It lets you see your decision stated clearly beside the choice the historical commander actually made. The story is a paraphrase of the documented sequence, not a first-person quotation. Follow the source link below for the archival reference behind the account.",
            choices: null,
            finish: true
        }
    ]
};


/* =====================================================
   LOAD / SAVE
===================================================== */

function loadState() {

    const saved =
        localStorage.getItem(
            STORAGE_KEY
        );

    if (saved) {

        try {

            state = {
                ...state,
                ...JSON.parse(saved)
            };

        } catch (e) {

            console.error(e);

        }

    }

    updateUI();
}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =====================================================
   RESET
===================================================== */

function resetPrototype() {

    if (
        !confirm(
            "Reset all prototype progress?"
        )
    ) {
        return;
    }

    localStorage.removeItem(
        STORAGE_KEY
    );

    location.href = location.pathname;

}


/* =====================================================
   UPDATE UI
===================================================== */

function updateUI() {

    document
        .getElementById("stampCount")
        .textContent =
        state.stamps;

    document
        .getElementById("fragmentCount")
        .textContent =
        `${state.fragments.length}/4`;


    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        const site =
            document.getElementById(
                `site${i}`
            );

        const status =
            document.getElementById(
                `siteStatus${i}`
            );


        if (
            state.completedSites.includes(i)
        ) {

            site.classList.add(
                "completed"
            );

            status.textContent =
                "Completed ✓";

        } else {

            site.classList.remove(
                "completed"
            );

            status.textContent =
                "Unexplored";

        }

    }


    document
        .getElementById("siteStatus6")
        .textContent =
        state.passphraseCompleted
            ? "Unlocked ✓"
            : "Locked";

    const quizSite =
        document.getElementById("site5");

    quizSite.classList.toggle(
        "completed",
        state.quizAttempted
    );

    document
        .getElementById("siteStatus5")
        .textContent =
        state.quizAttempted
            ? "Attempt used"
            : "+2 stamps / correct · once only";


    updateTrailProgress();
    updateFragments();
    renderRewardsShop();

}


function updateTrailProgress() {

    const order = [1, 2, 3, 4];
    const done = order.filter(i => state.completedSites.includes(i)).length;
    const nextId = order.find(i => !state.completedSites.includes(i));

    order.forEach(i => {
        document
            .getElementById(`site${i}`)
            .classList.toggle("next", i === nextId);
    });

    const line = document.getElementById("progressLine");

    if (nextId) {
        line.textContent =
            `${done} of 4 stops complete · Next: ${sites[nextId].title}`;
    } else if (!state.passphraseCompleted) {
        line.textContent =
            "All 4 stops complete · Decode the dispatch below";
    } else {
        line.textContent =
            "Trail complete · Visit the Memory Hub";
    }

}


const rewards = {
    "ice-cream": { name: "Ice Cream", cost: 3 },
    sweets: { name: "Sweets", cost: 2 },
    mug: { name: "Mug", cost: 8 },
    keychain: { name: "Key Chain", cost: 5 },
    cardholder: { name: "Card Holder", cost: 6 }
};


function renderRewardsShop() {
    const atBooth =
        document.getElementById("atBooth").checked;

    document
        .querySelectorAll(".redeem-button")
        .forEach(button => {
            button.disabled = !atBooth;
        });

    Object.keys(rewards).forEach(id => {
        const redeemedCount =
            state.redemptions.filter(item => item === id).length;

        document
            .getElementById(`redeemed-${id}`)
            .textContent = `${redeemedCount} redeemed`;

        const button = document
            .getElementById(`redeemed-${id}`)
            .closest(".reward-details")
            .querySelector(".redeem-button");

        let need = button.nextElementSibling;
        if (!need || !need.classList.contains("reward-need")) {
            need = document.createElement("p");
            need.className = "reward-need";
            button.after(need);
        }

        const missing = rewards[id].cost - state.stamps;
        const affordable = missing <= 0;

        button.classList.toggle("affordable", affordable);
        need.classList.toggle("ready", affordable);
        need.textContent = affordable
            ? "You have enough stamps"
            : `Need ${missing} more stamp${missing === 1 ? "" : "s"}`;
    });

    if (!atBooth) {
        document
            .getElementById("redeemStatus")
            .textContent = "Tick the box above when you are at the booth to enable redemption.";
    }
}


function redeemReward(id) {
    const reward = rewards[id];

    if (!reward) {
        return;
    }

    if (!document.getElementById("atBooth").checked) {
        document
            .getElementById("redeemStatus")
            .textContent = "You must be physically at the event booth to redeem a reward.";
        return;
    }

    if (state.stamps < reward.cost) {
        document
            .getElementById("redeemStatus")
            .textContent = `You need ${reward.cost} stamps for ${reward.name}; your balance is ${state.stamps}.`;
        return;
    }

    const confirmed = confirm(
        `Booth redemption only. Redeem ${reward.name} for ${reward.cost} stamps? Your stamps will be deducted now.`
    );

    if (!confirmed) {
        return;
    }

    state.stamps -= reward.cost;
    state.redemptions.push(id);
    saveState();
    updateUI();

    document
        .getElementById("redeemStatus")
        .textContent = `${reward.name} redeemed at the booth. ${reward.cost} stamps deducted. You may redeem this item again while you have enough stamps.`;
}


/* =====================================================
   FRAGMENTS
===================================================== */

function updateFragments() {

    const display =
        document.getElementById(
            "fragmentDisplay"
        );

    display.innerHTML = "";


    state.fragments.forEach(
        fragment => {

            const el =
                document.createElement(
                    "div"
                );

            el.className =
                "fragment";

            el.textContent =
                fragment;

            display.appendChild(
                el
            );

        }
    );


    const area =
        document.getElementById(
            "passphraseArea"
        );

    const lock =
        document.getElementById(
            "passphraseLock"
        );


    if (
        state.fragments.length === 4
    ) {

        area.classList.remove(
            "hidden"
        );

        lock.classList.add(
            "hidden"
        );

        buildScramble();

    }

}


/* =====================================================
   STORY STATE
===================================================== */

let currentSite = null;

let currentDialogue = 0;

let storyHistory = [];

let currentChoiceMade = false;

let currentTextChunk = 0;


/* =====================================================
   OPEN SITE
===================================================== */

function openSite(id) {

    if (id === 6) {

        if (
            !state.passphraseCompleted
        ) {

            alert(
                "Complete and decode the dispatch first."
            );

            return;

        }

        openMemory();

        return;

    }


    currentSite = id;

    currentDialogue = 0;

    currentTextChunk = 0;

    storyHistory = [];

    currentChoiceMade = false;


    const data =
        sites[id];


    document
        .getElementById("storyTitle")
        .textContent =
        data.title;


    document
        .getElementById("storyModal")
        .classList.remove(
            "hidden"
        );


    showDialogue();

}


/* =====================================================
   SHOW DIALOGUE
===================================================== */

function storyTextChunks(text) {
    const sentences =
        typeof Intl.Segmenter === "function"
            ? Array.from(
                new Intl.Segmenter("en", { granularity: "sentence" }).segment(text),
                part => part.segment.trim()
            )
            : (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text]);

    const chunks = [];
    let currentSentences = [];
    let currentWordCount = 0;

    sentences.forEach(sentence => {
        const sentenceWordCount = sentence.split(/\s+/).length;

        if (currentSentences.length && currentWordCount + sentenceWordCount > 45) {
            chunks.push(currentSentences.join(" "));
            currentSentences = [];
            currentWordCount = 0;
        }

        currentSentences.push(sentence);
        currentWordCount += sentenceWordCount;
    });

    if (currentSentences.length) {
        chunks.push(currentSentences.join(" "));
    }

    return chunks.length ? chunks : [text];
}


function showDialogue() {

    const data =
        sites[currentSite];

    const dialogue =
        data.story[
            currentDialogue
        ];


    const backdrop = document.querySelector(".vn-background");
    const photo = data.images && data.images[0];

    if (backdrop && photo) {
        backdrop.style.background =
            `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)), url("${photo.src}") center / cover`;
    }

    document
        .getElementById("charLeft")
        .textContent =
        data.left;


    document
        .getElementById("charRight")
        .textContent =
        data.right;


    document
        .getElementById("speaker")
        .textContent =
        dialogue.speaker;


    const textChunks = storyTextChunks(dialogue.text);
    currentTextChunk = Math.min(currentTextChunk, textChunks.length - 1);

    document
        .getElementById("dialogueText")
        .textContent =
        textChunks[currentTextChunk];

    const sourceLink = document.createElement("a");
    sourceLink.href = data.sourceUrl;
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    sourceLink.textContent = data.sourceLabel;

    const source = document.getElementById("storySource");
    source.replaceChildren(
        document.createTextNode("HISTORICAL SOURCE: "),
        sourceLink
    );

    if (data.locationNote) {
        const locationNote = document.createElement("span");
        locationNote.textContent = data.locationNote;
        source.append(
            document.createElement("br"),
            locationNote
        );
    }


    const choices =
        document.getElementById(
            "storyChoices"
        );


    choices.innerHTML = "";

    const nextButton =
        document.getElementById(
            "nextDialogue"
        );


    /*
       If this scene contains choices,
       hide NEXT until the player chooses.
    */

    const isFinalTextChunk =
        currentTextChunk === textChunks.length - 1;

    if (
        isFinalTextChunk &&
        dialogue.choices &&
        dialogue.choices.length
    ) {

        nextButton.classList.add(
            "hidden"
        );


        const label =
            document.createElement(
                "div"
            );

        label.className =
            "choice-label";

        label.textContent =
            "WHAT DO YOU DO?";

        choices.appendChild(
            label
        );


        dialogue.choices.forEach(
            (choice, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "story-choice";


                button.textContent =
                    choice.text;


                button.onclick =
                    () => chooseStory(
                        choice,
                        button
                    );


                choices.appendChild(
                    button
                );

            }
        );


        currentChoiceMade = false;

    }

    else {

        nextButton.classList.remove(
            "hidden"
        );


        if (
            isFinalTextChunk &&
            (dialogue.finish || currentDialogue === data.story.length - 1)
        ) {

            nextButton.textContent =
                "FINISH STORY";

        } else {

            nextButton.textContent =
                "NEXT";

        }

    }

}


/* =====================================================
   CHOICE
===================================================== */

function chooseStory(
    choice,
    clickedButton
) {

    if (
        currentChoiceMade
    ) {
        return;
    }


    currentChoiceMade = true;


    storyHistory.push({
        scene:
            currentDialogue,

        choice:
            choice.text
    });


    currentDialogue =
        choice.next;

    currentTextChunk = 0;

    currentChoiceMade =
        false;

    showDialogue();

}


/* =====================================================
   NEXT
===================================================== */

function nextStory() {

    const data =
        sites[currentSite];

    const textChunks =
        storyTextChunks(data.story[currentDialogue].text);

    if (currentTextChunk < textChunks.length - 1) {
        currentTextChunk++;
        showDialogue();
        return;
    }

    if (
        !data.story[currentDialogue].finish &&
        currentDialogue <
        data.story.length - 1
    ) {

        currentDialogue++;

        currentTextChunk = 0;

        showDialogue();

        return;

    }


    finishSite();

}


/* =====================================================
   FINISH SITE
===================================================== */

function finishSite() {

    const firstCompletion =
        !state.completedSites.includes(
            currentSite
        );


    if (firstCompletion) {

        state.completedSites.push(
            currentSite
        );


        state.stamps += 1;


        const fragment =
            sites[currentSite].fragment;


        if (
            !state.fragments.includes(
                fragment
            )
        ) {

            state.fragments.push(
                fragment
            );

        }


        saveState();

        updateUI();

    }


    showCompletionScreen(
        firstCompletion
    );

}


/* =====================================================
   COMPLETION SCREEN
===================================================== */

function showCompletionScreen(
    firstCompletion
) {

    const siteName =
        sites[currentSite].title;

    const fragment =
        sites[currentSite].fragment;


    const container =
        document.getElementById(
            "storyContainer"
        );


    container.innerHTML = `

        <div class="completion-screen">

            <div class="completion-icon">
                ✓
            </div>

            <h2>
                ${siteName} — Story Complete
            </h2>

            <p style="color:#999;">
                ${
                    firstCompletion
                    ? "You have recovered a new piece of the dispatch."
                    : "You have already completed this story."
                }
            </p>


            ${
                firstCompletion
                ? `
                    <div class="reward-row">

                        <div class="reward">
                            🏅 +1 STAMP
                        </div>

                        <div class="reward">
                            🧩 +1 FRAGMENT
                            <br>
                            ${fragment}
                        </div>

                    </div>
                `
                : `
                    <div class="reward-row">

                        <div class="reward">
                            ✓ SITE ALREADY COMPLETED
                        </div>

                    </div>
                `
            }


            <div class="completion-options">

                <button
                    class="primary"
                    onclick="continueToMap()">

                    CONTINUE TO OTHER SITES

                </button>


                <button
                    class="secondary"
                    onclick="stayAndExplore()">

                    STAY & EXPLORE

                </button>


                <button
                    class="secondary"
                    onclick="replayStory()">

                    REPLAY STORY

                </button>


                <button
                    class="secondary"
                    onclick="closeStory()">

                    BACK TO MAP

                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   CONTINUE
===================================================== */

function continueToMap() {

    closeStory();

}


/* =====================================================
   STAY & EXPLORE
===================================================== */

function stayAndExplore() {

    const siteName =
        sites[currentSite].title;

    const siteImages =
        sites[currentSite].images;

    exploreImageIndex = 0;


    const container =
        document.getElementById(
            "storyContainer"
        );


    container.innerHTML = `

        <div class="explore-screen">

            <h2>
                Explore — ${siteName}
            </h2>

            <p class="explore-description">

                You have completed the story.
                Take a moment to explore the
                physical heritage site.

            </p>


            <div class="explore-gallery" aria-label="${siteName} photo gallery">

                <img
                    class="explore-image"
                    id="exploreImage"
                    src="${siteImages[0].src}"
                    alt="${siteImages[0].caption}">

                <div class="gallery-controls">
                    <button class="secondary" type="button" onclick="browseExploreImage(-1)" aria-label="Previous photo">PREVIOUS</button>
                    <span id="galleryCounter">1 / ${siteImages.length}</span>
                    <button class="secondary" type="button" onclick="browseExploreImage(1)" aria-label="Next photo">NEXT</button>
                </div>

                <p class="gallery-caption" id="galleryCaption">${siteImages[0].caption}</p>

            </div>


            <p class="history-note">
                Historical account: the decisions in this interactive story are reflection prompts. They do not change the documented events.
            </p>


            <div class="completion-options">

                <button
                    class="secondary"
                    onclick="replayStory()">

                    REPLAY STORY

                </button>


                <button
                    class="primary"
                    onclick="continueToMap()">

                    CONTINUE TO OTHER SITES

                </button>


                <button
                    class="secondary"
                    onclick="closeStory()">

                    BACK TO MAP

                </button>

            </div>

        </div>

    `;

    const gallery =
        container.querySelector(".explore-gallery");

    let touchStartX = 0;

    gallery.addEventListener("touchstart", event => {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    gallery.addEventListener("touchend", event => {
        const touchDistance =
            event.changedTouches[0].screenX - touchStartX;

        if (Math.abs(touchDistance) > 45) {
            browseExploreImage(touchDistance < 0 ? 1 : -1);
        }
    }, { passive: true });

}


let exploreImageIndex = 0;


function browseExploreImage(direction) {
    const images = sites[currentSite].images;

    exploreImageIndex =
        (exploreImageIndex + direction + images.length) % images.length;

    const image = images[exploreImageIndex];

    document.getElementById("exploreImage").src = image.src;
    document.getElementById("exploreImage").alt = image.caption;
    document.getElementById("galleryCaption").textContent = image.caption;
    document.getElementById("galleryCounter").textContent =
        `${exploreImageIndex + 1} / ${images.length}`;
}


/* =====================================================
   REPLAY
===================================================== */

function replayStory() {

    currentDialogue = 0;

    currentTextChunk = 0;

    storyHistory = [];

    currentChoiceMade = false;


    restoreStoryInterface();


    showDialogue();

}


/* =====================================================
   RESTORE STORY INTERFACE
===================================================== */

function restoreStoryInterface() {

    const data =
        sites[currentSite];


    const container =
        document.getElementById(
            "storyContainer"
        );


    container.innerHTML = `

        <div class="vn-background">

            <div class="vn-era">
                SINGAPORE — 1942
            </div>


            <div class="character left">

                <div class="character-silhouette">
                </div>

                <div
                    class="character-name"
                    id="charLeft">

                    ${data.left}

                </div>

            </div>


            <div class="character right">

                <div class="character-silhouette">
                </div>

                <div
                    class="character-name"
                    id="charRight">

                    ${data.right}

                </div>

            </div>

        </div>


        <div class="dialogue">

            <div
                class="speaker"
                id="speaker">
            </div>


            <div
                class="dialogue-text"
                id="dialogueText">
            </div>

            <div
                class="story-source"
                id="storySource">
            </div>


            <div
                id="storyChoices"
                class="choice-container">
            </div>


            <div class="vn-controls">

                <button
                    class="secondary"
                    onclick="closeStory()">

                    BACK TO MAP

                </button>


                <button
                    class="primary"
                    id="nextDialogue"
                    onclick="nextStory()">

                    NEXT

                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   CLOSE STORY
===================================================== */

function closeStory() {

    document
        .getElementById(
            "storyModal"
        )
        .classList.add(
            "hidden"
        );


    restoreStoryInterface();

}


/* =====================================================
   QUIZ
===================================================== */

const quizQuestions = [

    {
        question:
            "Singapore fell to Japanese forces in February 1942.",

        answer:
            true
    },

    {
        question:
            "The Japanese occupation of Singapore lasted until 1945.",

        answer:
            true
    },

    {
        question:
            "The Fall of Singapore occurred after the end of World War II.",

        answer:
            false
    }

];


let quizIndex = 0;

let answeredCurrentQuestion = false;


function openQuiz() {

    quizIndex = 0;

    const container =
        document.getElementById("quizContent");

    if (state.quizAttempted) {
        container.innerHTML = `
            <h2>Quiz attempt used</h2>
            <p>You have already taken your one quiz attempt.</p>
            <p>Your score: ${state.quizCorrect} / ${quizQuestions.length}</p>
            <button class="primary" onclick="closeQuiz()">BACK TO MAP</button>
        `;

        document
            .getElementById("quizModal")
            .classList.remove("hidden");
        return;
    }

    state.quizCorrect = 0;

    document
        .getElementById(
            "quizModal"
        )
        .classList.remove(
            "hidden"
        );

    showQuizQuestion();

}


function showQuizQuestion() {

    const container =
        document.getElementById(
            "quizContent"
        );


    if (
        quizIndex >=
        quizQuestions.length
    ) {

        saveState();

        container.innerHTML = `

            <h2>
                Quiz Complete
            </h2>

            <p>
                Your one attempt is complete. You answered
                ${state.quizCorrect} of ${quizQuestions.length} correctly.
            </p>

            <button
                class="primary"
                onclick="closeQuiz()">

                BACK TO MAP

            </button>

        `;

        return;

    }


    const q =
        quizQuestions[
            quizIndex
        ];

    answeredCurrentQuestion = false;


    container.innerHTML = `

        <h2>
            Question ${quizIndex + 1}
            /
            ${quizQuestions.length}
        </h2>

        <p>
            ${q.question}
        </p>


        <button
            class="choice quiz-answer"
            onclick="answerQuiz(true)">

            TRUE

        </button>


        <button
            class="choice quiz-answer"
            onclick="answerQuiz(false)">

            FALSE

        </button>


        <p id="quizFeedback"></p>

    `;

}


function answerQuiz(answer) {

    if (answeredCurrentQuestion) {
        return;
    }

    answeredCurrentQuestion = true;

    if (!state.quizAttempted) {
        state.quizAttempted = true;
        updateUI();
    }

    document
        .querySelectorAll(".quiz-answer")
        .forEach(button => {
            button.disabled = true;
        });

    const correct =
        answer ===
        quizQuestions[
            quizIndex
        ].answer;


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    if (correct) {

        state.stamps += 2;
        state.quizCorrect += 1;

        feedback.textContent =
            "Correct! +2 stamps.";

        saveState();

        updateUI();

    } else {

        feedback.textContent =
            "Incorrect. No stamps awarded.";

    }

    saveState();


    setTimeout(
        () => {

            quizIndex++;

            showQuizQuestion();

        },
        900
    );

}


function closeQuiz() {

    document
        .getElementById(
            "quizModal"
        )
        .classList.add(
            "hidden"
        );

}


/* =====================================================
   PASSPHRASE
===================================================== */

let selectedFragments = [];


function buildScramble() {

    const container =
        document.getElementById(
            "scramblePieces"
        );


    container.innerHTML = "";

    selectedFragments = [];


    const shuffled =
        [...state.fragments]
            .sort(
                () =>
                    Math.random() - .5
            );


    shuffled.forEach(
        fragment => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "scramble-piece";


            button.textContent =
                fragment;


            button.onclick =
                () => {

                    const index =
                        selectedFragments
                            .indexOf(
                                fragment
                            );


                    if (
                        index !== -1
                    ) {

                        selectedFragments
                            .splice(
                                index,
                                1
                            );

                        button.classList
                            .remove(
                                "selected"
                            );

                    } else {

                        selectedFragments
                            .push(
                                fragment
                            );

                        button.classList
                            .add(
                                "selected"
                            );

                    }


                    updateAnswerBox();

                };


            container.appendChild(
                button
            );

        }
    );


    updateAnswerBox();

}


function updateAnswerBox() {

    document
        .getElementById(
            "answerBox"
        )
        .textContent =

        selectedFragments.length

        ? selectedFragments.join(" ")

        : "Click fragments in order.";

}


function checkPassphrase() {

    const answer =
        selectedFragments
            .join("")
            .toUpperCase();


    const result =
        document.getElementById(
            "passphraseResult"
        );


    if (
        answer ===
        "SINGAPOREHISTORY"
    ) {

        state.passphraseCompleted =
            true;


        saveState();

        updateUI();


        result.innerHTML = `

            <strong
                style="color:#dfbd6a">

                DISPATCH DECODED ✓

            </strong>

            <br><br>

            The final dispatch has been
            reconstructed.

            <br><br>

            <button
                class="primary"
                onclick="openMemory()">

                ENTER MEMORY WALL

            </button>

        `;

    } else {

        result.textContent =
            "The order is incorrect. Try again.";

    }

}


/* =====================================================
   MEMORY WALL
===================================================== */

function openMemory() {

    if (
        !state.passphraseCompleted
    ) {

        alert(
            "Decode the dispatch first."
        );

        return;

    }


    document
        .getElementById(
            "memoryModal"
        )
        .classList.remove(
            "hidden"
        );


    renderMemories();

}


function closeMemory() {

    document
        .getElementById(
            "memoryModal"
        )
        .classList.add(
            "hidden"
        );

}


function submitMemory() {

    const input =
        document.getElementById(
            "memoryInput"
        );


    const text =
        input.value.trim();


    if (!text) {

        alert(
            "Please write something first."
        );

        return;

    }


    state.memories.push({

        text:
            text,

        date:
            new Date()
                .toLocaleDateString()

    });


    saveState();


    input.value = "";


    renderMemories();

}


function renderMemories() {

    const container =
        document.getElementById(
            "memories"
        );


    const constellation =
        document.getElementById(
            "constellation"
        );


    container.innerHTML = "";

    constellation.innerHTML = "";


    state.memories.forEach(
        (memory, index) => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "memory";


            div.innerHTML = `

                <strong>
                    Memory ${index + 1}
                </strong>

                <br>

                ${escapeHTML(
                    memory.text
                )}

                <br>

                <small>
                    ${memory.date}
                </small>

            `;


            container.appendChild(
                div
            );


            const star =
                document.createElement(
                    "div"
                );


            star.className =
                "star";


            star.style.left =
                `${
                    10 +
                    Math.random() * 80
                }%`;


            star.style.top =
                `${
                    10 +
                    Math.random() * 70
                }%`;


            constellation.appendChild(
                star
            );

        }
    );

}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =====================================================
   START
===================================================== */

loadState();


/* =====================================================
   DEMO MODE
   Open index.html?demo=1 to skip the story playthrough:
   all four sites completed, all fragments, 10 stamps.
   Use RESET to go back to a fresh game.
===================================================== */

if (new URLSearchParams(location.search).get("demo") === "1") {

    state.completedSites = [1, 2, 3, 4];
    state.fragments = [1, 2, 3, 4].map(id => sites[id].fragment);
    state.stamps = Math.max(state.stamps, 10);

    saveState();
    updateUI();

}


/* =====================================================
   KEYBOARD: ESC CLOSES THE OPEN MODAL
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") {
        return;
    }

    if (!document.getElementById("storyModal").classList.contains("hidden")) {
        closeStory();
    } else if (!document.getElementById("quizModal").classList.contains("hidden")) {
        closeQuiz();
    } else if (!document.getElementById("memoryModal").classList.contains("hidden")) {
        closeMemory();
    }

});
