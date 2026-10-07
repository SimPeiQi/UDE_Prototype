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

const sites = {


/* =====================================================
   FORT CANNING
===================================================== */

1: {

    title:
        "Fort Canning",

    left:
        "Captain Lim",

    right:
        "Corporal Tan",

    fragment:
        "SING",

    story: [

        {
            speaker:
                "Captain Lim",

            text:
                "8:10 PM. The command room is dim. A telephone rings somewhere beyond the corridor, but nobody moves to answer it. Outside, artillery can be heard in the distance.",

            choices: null
        },


        {
            speaker:
                "Corporal Tan",

            text:
                "Captain, the eastern position has stopped responding. We haven't heard anything for nearly twenty minutes.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "Then we have a problem. The withdrawal order has not reached them.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "There are two ways to reach them. We can send someone across the compound, or we can try to restore the field telephone.",

            choices: [

                {
                    text:
                        "Send Corporal Tan with the message.",

                    next:
                        5
                },

                {
                    text:
                        "Stay and try to restore the telephone.",

                    next:
                        8
                }

            ]
        },


        /* RUNNER PATH */

        {
            speaker:
                "Corporal Tan",

            text:
                "Tan takes the folded message and checks the corridor. The safest route is already blocked.",

            choices: null
        },


        {
            speaker:
                "Corporal Tan",

            text:
                "If I take the main road, I'll get there faster. The side passage is safer, but it will take longer.",

            choices: [

                {
                    text:
                        "Take the main road.",

                    next:
                        7
                },

                {
                    text:
                        "Take the sheltered side passage.",

                    next:
                        7
                }

            ]
        },


        {
            speaker:
                "Narrator",

            text:
                "Tan disappears into the darkness. Minutes later, a distant whistle is heard. The message has reached the position.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "We may never know exactly what happened out there. But the order was delivered.",

            choices: null
        },


        /* TELEPHONE PATH */

        {
            speaker:
                "Captain Lim",

            text:
                "You kneel beside the damaged field telephone. The cable has been pulled loose, but the line may still be alive.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "Static... wait. I can hear someone. Very faintly.",

            choices: [

                {
                    text:
                        "Ask them for their location.",

                    next:
                        10
                },

                {
                    text:
                        "Tell them to withdraw immediately.",

                    next:
                        11
                }

            ]
        },


        {
            speaker:
                "Unknown Voice",

            text:
                "We're near the eastern road. Visibility is almost gone. We've been waiting for instructions.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "Tell them to withdraw. Now. We will cover the remaining positions as long as we can.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "The signal disappears again. But this time, the message has gone through.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "The room falls silent again. For a moment, nobody speaks.",

            choices: null
        },


        {
            speaker:
                "Captain Lim",

            text:
                "Whatever happens next, someone received the warning.",

            choices: null
        }

    ]

},


/* =====================================================
   RADIO STATION
===================================================== */

2: {

    title:
        "Radio Station",

    left:
        "Radio Operator",

    right:
        "Messenger",

    fragment:
        "APORE",

    story: [

        {
            speaker:
                "Radio Operator",

            text:
                "The clock shows 9:25 PM. The transmitter hums quietly while static fills the room.",

            choices: null
        },


        {
            speaker:
                "Messenger",

            text:
                "People outside are asking for news. They want to know whether the city is still holding.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "We don't know what is happening everywhere. If we broadcast the wrong information, people could panic.",

            choices: [

                {
                    text:
                        "Continue broadcasting what is confirmed.",

                    next:
                        5
                },

                {
                    text:
                        "Stop broadcasting until more information arrives.",

                    next:
                        7
                }

            ]
        },


        {
            speaker:
                "Radio Operator",

            text:
                "The microphone clicks on. You carefully repeat only the information that has been confirmed.",

            choices: null
        },


        {
            speaker:
                "Messenger",

            text:
                "It isn't much, but at least people know someone is still transmitting.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "Then the signal suddenly changes. Someone is trying to contact us.",

            choices: [

                {
                    text:
                        "Answer the transmission.",

                    next:
                        9
                },

                {
                    text:
                        "Keep the station silent.",

                    next:
                        10
                }

            ]
        },


        {
            speaker:
                "Radio Operator",

            text:
                "The transmitter is switched off. The room becomes strangely quiet.",

            choices: null
        },


        {
            speaker:
                "Messenger",

            text:
                "Maybe silence is safer. But outside, people will have even fewer answers.",

            choices: null
        },


        {
            speaker:
                "Unknown Voice",

            text:
                "Station receiving? This is a field unit. We have civilians moving toward the shelter. Can you hear us?",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "We hear you. Hold your position and keep the civilians moving toward the marked shelter.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "The transmission fades. The room is quiet again, but the operator keeps his hand on the transmitter.",

            choices: null
        },


        {
            speaker:
                "Radio Operator",

            text:
                "As long as there is someone listening, the station still has a purpose.",

            choices: null
        }

    ]

},


/* =====================================================
   CIVILIAN SHELTER
===================================================== */

3: {

    title:
        "Civilian Shelter",

    left:
        "Mrs. Lee",

    right:
        "Volunteer",

    fragment:
        "HIST",

    story: [

        {
            speaker:
                "Mrs. Lee",

            text:
                "The shelter is crowded. Families sit shoulder to shoulder while the sound of aircraft passes overhead.",

            choices: null
        },


        {
            speaker:
                "Volunteer",

            text:
                "We have enough water for tonight, but the food supplies are getting low.",

            choices: null
        },


        {
            speaker:
                "Mrs. Lee",

            text:
                "Someone outside is asking whether there is room for another family.",

            choices: [

                {
                    text:
                        "Make space for them.",

                    next:
                        5
                },

                {
                    text:
                        "Ask them to wait outside until the shelter is checked.",

                    next:
                        7
                }

            ]
        },


        {
            speaker:
                "Volunteer",

            text:
                "There is barely enough room, but the families shift closer together. A mother and her children enter.",

            choices: null
        },


        {
            speaker:
                "Mother",

            text:
                "Thank you. We didn't know where else to go.",

            choices: null
        },


        {
            speaker:
                "Volunteer",

            text:
                "A child nearby is crying. We have one small container of water left.",

            choices: [

                {
                    text:
                        "Give the water to the child.",

                    next:
                        9
                },

                {
                    text:
                        "Save the water for later.",

                    next:
                        10
                }

            ]
        },


        {
            speaker:
                "Volunteer",

            text:
                "The door stays closed. For several minutes, nobody knows whether the people outside have found another shelter.",

            choices: null
        },


        {
            speaker:
                "Mrs. Lee",

            text:
                "The child takes a small drink. Around the room, people quietly share what little they have.",

            choices: null
        },


        {
            speaker:
                "Volunteer",

            text:
                "The water is almost gone, but the room is calmer now.",

            choices: null
        },


        {
            speaker:
                "Mrs. Lee",

            text:
                "Nobody here knows how long this will last. For tonight, the shelter is still standing.",

            choices: null
        }

    ]

},


/* =====================================================
   BATTLE SITE
===================================================== */

4: {

    title:
        "Battle Site",

    left:
        "Private Ahmad",

    right:
        "Medic Wong",

    fragment:
        "ORY",

    story: [

        {
            speaker:
                "Private Ahmad",

            text:
                "The road is almost impossible to recognise. Smoke hangs over the buildings, and the sound of vehicles echoes somewhere nearby.",

            choices: null
        },


        {
            speaker:
                "Medic Wong",

            text:
                "We have injured people who need to be moved. We cannot stay here much longer.",

            choices: null
        },


        {
            speaker:
                "Private Ahmad",

            text:
                "There are two routes. The main road is faster. The smaller route takes longer but provides more cover.",

            choices: [

                {
                    text:
                        "Take the faster main road.",

                    next:
                        5
                },

                {
                    text:
                        "Take the sheltered route.",

                    next:
                        7
                }

            ]
        },


        {
            speaker:
                "Medic Wong",

            text:
                "The main road is exposed, but every minute matters. We move quickly.",

            choices: null
        },


        {
            speaker:
                "Private Ahmad",

            text:
                "The sheltered route is slower. Everyone has to move carefully through the damaged buildings.",

            choices: null
        },


        {
            speaker:
                "Medic Wong",

            text:
                "We have another problem. One of the injured cannot walk.",

            choices: [

                {
                    text:
                        "Carry them together.",

                    next:
                        9
                },

                {
                    text:
                        "Move the others first and return for them.",

                    next:
                        10
                }

            ]
        },


        {
            speaker:
                "Medic Wong",

            text:
                "We cannot leave anyone behind if there is another option. Ahmad, help me lift them.",

            choices: null
        },


        {
            speaker:
                "Private Ahmad",

            text:
                "The group moves slowly, but everyone makes it through the route.",

            choices: null
        },


        {
            speaker:
                "Medic Wong",

            text:
                "The injured soldier is moved to safety. The route took longer, but the group arrived together.",

            choices: null
        },


        {
            speaker:
                "Medic Wong",

            text:
                "For a moment, the noise around them fades. They have made it through.",

            choices: null
        }

    ]

}

};


sites[1] = {
    title: "Fort Canning",
    left: "Edward Scully",
    right: "Federated Malay States Volunteer Forces",
    fragment: "SING",
    sourceLabel: "National Archives of Singapore oral history, Edward Scully, Accession 000261, Track 3",
    sourceUrl: "https://www.nas.gov.sg/archivesonline/oral_history_interviews/interview/000261",
    locationNote: "This oral-history account concerns the Causeway, not events at Fort Canning.",
    images: [
        { src: "Images/fortcanning/fort-canning-park-nature-walk-hero-spice-gallery.jpg", caption: "Fort Canning Park" },
        { src: "Images/fortcanning/34bc87402c26577dc5053ccdd613b2a4d708ac0a-1600x1067.jpg", caption: "Fort Canning grounds" },
        { src: "Images/fortcanning/69e9cfd927b48c69a3350765_6935908dc7048c189e5a3730_58ba2aa8.png", caption: "Fort Canning heritage landscape" },
        { src: "Images/fortcanning/765321a9f9b7f0dd4307358e830104de0454841e3a76e9b9adf04d7a36eb61aa.avif", caption: "Fort Canning" }
    ],
    story: [
        {
            speaker: "EDWARD SCULLY — PRIVATE, F.M.S. VOLUNTEER FORCES",
            text: "Edward Scully served in the Federated Malay States Volunteer Forces. In an oral-history interview held by the National Archives of Singapore, he recalled the Allied withdrawal into Singapore and the destruction of the Johor end of the Causeway. After the last British troops crossed on 31 January 1942, engineers blew the Causeway to slow the Japanese advance. The blasts damaged the lock's lift bridge and left a gap about 21 metres wide. Scully's interview describes the withdrawal and demolition as events he lived through; this retelling paraphrases the archive summary and is not a verbatim quotation. The damaged crossing was not an impenetrable barrier. Japanese engineers later built a temporary bridge, and troops crossed into Singapore on 8 February. At this stop, imagine being part of a retreat with limited time: do you give priority to getting the remaining force across, or to delaying the pursuing army? The choice is yours for reflection. It is not attributed to Scully, and the documented events remain unchanged.",
            choices: null
        },
        {
            speaker: "THE RETREAT — DECISION POINT",
            text: "Scully's recorded account concerns the phased withdrawal and the later destruction of the Causeway. How would you balance protecting people who are still retreating against buying time for the defence of Singapore? Choose one response; the next scene will state your decision and then return to what the historical record says actually happened.",
            choices: [
                { text: "Prioritise bringing the remaining troops across before demolishing the crossing.", next: 2 },
                { text: "Prioritise delaying the Japanese advance, even if the retreat becomes harder.", next: 3 }
            ]
        },
        {
            speaker: "HISTORICAL CONTINUATION — TROOPS WITHDRAW, THEN THE CAUSEWAY IS DESTROYED",
            text: "YOU CHOSE: bring the remaining troops across before demolition. That is your reflection choice. In the historical sequence, the final British troops crossed to Singapore on 31 January 1942; Allied engineers then blew the Causeway to slow the Japanese advance. The explosions damaged the lift bridge and opened a gap of about 21 metres. The break delayed movement, but it could not hold indefinitely. Japanese engineers assembled a temporary crossing, and Japanese troops entered Singapore on 8 February. Scully's oral-history record identifies him as a private in the F.M.S. Volunteer Forces and records his recollection of the withdrawal and the blowing up of the Johor end. The archive summary does not say that he personally chose when to set off the explosives, so this story does not assign him that decision. Your choice remains visible as your own; the retreat, demolition, and crossing are the events that happened.",
            choices: null,
            finish: true
        },
        {
            speaker: "HISTORICAL CONTINUATION — THE SAME RECORDED WITHDRAWAL",
            text: "YOU CHOSE: delay the advance, even if retreat becomes harder. This is the alternative you selected, not Scully's recorded decision. The historical sequence does not branch: the last British troops crossed the Causeway on 31 January 1942, then Allied engineers damaged the lift bridge and left a gap of about 21 metres. That demolition was intended to slow the Japanese advance. Japanese engineers later built a temporary bridge, and Japanese troops crossed into Singapore on 8 February. Scully's National Archives interview records his experience of the phased Allied withdrawal and the destruction of the Johor end. The archive summary does not claim that Scully decided how long to wait or personally triggered the blasts. This distinction matters: your choice gives the scene a reflection point, while his real service and the documented sequence stay intact.",
            choices: null,
            finish: true
        }
    ]
};

sites[2] = {
    title: "Flagstaff",
    left: "Stanley Warren",
    right: "Royal Artillery Observation Post",
    fragment: "APORE",
    sourceLabel: "National Archives of Singapore oral history, Stanley Warren, Accession 000205, Track 4",
    sourceUrl: "https://www.nas.gov.sg/archivesonline/oral_history_interviews/interview/000205",
    locationNote: "This oral-history account concerns the Causeway, not events at the Fort Canning flagstaff.",
    images: [
        { src: "Images/flagstaff/flagstaff-outzoom.jpg", caption: "Fort Canning flagstaff, viewed from a distance" },
        { src: "Images/flagstaff/fort-canning-flagstaff-outside.jpg", caption: "Fort Canning flagstaff" },
        { src: "Images/flagstaff/fort-canning-flagstaff.-descjpg.jpg", caption: "The flagstaff at Fort Canning" }
    ],
    story: [
        {
            speaker: "STANLEY WARREN — OBSERVATION POST ASSISTANT",
            text: "Stanley Warren served as an observation-post assistant with the 344 Battalion, 135th Regiment, Royal Artillery. The National Archives of Singapore preserves his account of the battalion's attempt to deter Japanese troops from crossing the Causeway. The Causeway had been damaged by Allied demolition on 31 January, but Japanese engineers later made a temporary crossing. For the artillery, observation mattered: reports from a post could help commanders understand where the advance was happening and how quickly the situation was changing. Warren's interview is a real soldier's testimony, not a script written for this game. The archive describes his role and the battalion's effort; it does not attribute the fictional options below to him or record a precise choice between the two. Consider the pressures on a small observation team: pass information while the line is under threat, or withdraw before the position is cut off. Either way, the historical account belongs to Warren and his unit, and the choice in this experience belongs to you.",
            choices: null
        },
        {
            speaker: "CAUSEWAY DEFENCE — DECISION POINT",
            text: "The next choice is a modern reflection on the work Warren described. It is not presented as a quotation or a choice he personally made. Which task would you put first when the position is becoming dangerous? The following scene will identify your selection and then continue with the known account of the battalion's effort to deter the crossing.",
            choices: [
                { text: "Keep observing and pass on reports about the crossing.", next: 2 },
                { text: "Withdraw the observation team before the route is cut off.", next: 3 }
            ]
        },
        {
            speaker: "HISTORICAL CONTINUATION — OBSERVATION AND RESISTANCE",
            text: "YOU CHOSE: keep observing and report the crossing. This is your answer to the reflection prompt. The National Archives account says Warren's battalion tried to deter Japanese troops from crossing the Causeway into Singapore. It identifies him as an observation-post assistant in the Royal Artillery and records his recollection of that effort. Japanese engineers had repaired the crossing sufficiently for troops to enter Singapore on 8 February 1942. The source summary does not say that Warren made the exact choice shown above, so the game does not put invented words into his mouth. The wider outcome was that the Allied defence was pushed back toward the city; one week later, on 15 February, Singapore surrendered. The flagstaff image marks this trail stop, but it is not evidence that Warren served at this exact landmark. His testimony is linked below so you can distinguish the real account from this interpretive setting.",
            choices: null,
            finish: true
        },
        {
            speaker: "HISTORICAL CONTINUATION — A POSITION UNDER PRESSURE",
            text: "YOU CHOSE: withdraw the observation team before the route is cut off. That is the alternative you selected. The documented account still follows Warren's real experience: he served as an observation-post assistant with the 344 Battalion, 135th Regiment, Royal Artillery, and recalled that his battalion tried to deter Japanese troops from crossing the Causeway. The crossing was breached after the British demolition and later made passable by Japanese engineers; Japanese troops entered Singapore on 8 February 1942. The archive summary does not say Warren chose the withdrawal option in this game, so this branch does not claim that he did. It ends with the historical result rather than an invented escape: the Allied defence continued to contract, and Singapore surrendered on 15 February. Your selected response is clearly marked as yours; Warren's service remains the real story behind this scene.",
            choices: null,
            finish: true
        }
    ]
};

sites[3] = {
    title: "Lighthouse",
    left: "Yeoh Seang Aun",
    right: "A group of eight travellers",
    fragment: "HIST",
    sourceLabel: "National Archives of Singapore oral history, Yeoh Seang Aun, Accession 000182, Track 4",
    sourceUrl: "https://www.nas.gov.sg/archivesonline/oral_history_interviews/interview/000182",
    locationNote: "This oral-history account concerns a journey from Woodlands toward the Causeway, not a lighthouse event.",
    images: [
        { src: "Images/lighthouse/1761458925-light-keeper-tn.jpg", caption: "Lighthouse keeper" },
        { src: "Images/lighthouse/dd3a29d5be4ed3612486d6b407a6c3e7.jpg", caption: "Singapore lighthouse" },
        { src: "Images/lighthouse/Fort_Canning_Lighthouse_09-11-2023_(cropped).jpg", caption: "Fort Canning Lighthouse" }
    ],
    story: [
        {
            speaker: "YEOH SEANG AUN — DEPUTY DIRECTOR, MEDICAL SERVICES",
            text: "Yeoh Seang Aun was Deputy Director of Medical Services in Singapore. In his National Archives oral-history interview, he recalled travelling from Woodlands toward the Causeway with seven other people. They hoped to return to Malaysia because of the fear and uncertainty they faced during the Japanese Occupation. The catalogue does not turn this journey into a dramatic escape scene: it records the group, the route, their hope, and the reason they set out. That is enough to make the account human. A decision about leaving is rarely only about a road on a map; it is also about safety, family, work, and what may happen if one stays. The next choice asks you to weigh those pressures, but it is an interpretive prompt, not Yeoh's recorded decision. The lighthouse photographs belong to the heritage trail, not to his testimony. After your choice, the story will return to what the archive actually says: Yeoh and seven others made the journey toward the Causeway hoping to get back to Malaysia.",
            choices: null
        },
        {
            speaker: "A JOURNEY TOWARD THE CAUSEWAY — DECISION POINT",
            text: "Imagine that you are deciding whether to travel with a group away from a city under occupation. Staying may mean holding on to familiar work and contacts; leaving means facing an uncertain journey and an uncertain destination. Those are reflections for the player, not details assigned to Yeoh by the catalogue. Choose the response that feels most responsible to you. The next scene will state your choice and preserve the limits of the historical record.",
            choices: [
                { text: "Travel with the group toward the Causeway and try to return to Malaysia.", next: 2 },
                { text: "Remain in Singapore until the situation becomes clearer.", next: 3 }
            ]
        },
        {
            speaker: "HISTORICAL CONTINUATION — THE GROUP SETS OUT",
            text: "YOU CHOSE: travel with the group toward the Causeway. That matches the action recorded in Yeoh Seang Aun's interview: he and seven others journeyed from Woodlands to the Causeway hoping to return to Malaysia, driven by the fear and uncertainty of the occupation. The catalogue does not tell us that your hypothetical decision caused their journey, nor does its summary establish every detail of what happened after they set out. This scene therefore stops at the documented point rather than inventing a safe arrival or a reunion. Yeoh's professional role in medical services also reminds us that people with important work and responsibilities were caught up in the same uncertainty as everyone else. Read his testimony as a memory preserved decades later, not as fictional dialogue. The linked National Archives record identifies the interview and track behind this retelling.",
            choices: null,
            finish: true
        },
        {
            speaker: "HISTORICAL CONTINUATION — THE RECORDED JOURNEY",
            text: "YOU CHOSE: remain in Singapore until the situation became clearer. That is your hypothetical alternative; it is not what Yeoh's catalogue entry records. The National Archives account says he and seven others travelled from Woodlands to the Causeway because they hoped to return to Malaysia and feared the uncertainty of the occupation. This branch does not rewrite that memory or suggest that Yeoh stayed behind. It also avoids claiming a destination or outcome that the short archive description does not establish. The contrast is the point: you chose to wait, while the real account preserves a group that chose to set out. Yeoh's role as Deputy Director of Medical Services is part of the record, but the interview summary presents him here as a person navigating an uncertain journey, not only as a job title. The source link below leads to the actual interview record.",
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

    location.reload();

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


    updateFragments();
    renderRewardsShop();

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
    });

    if (!atBooth) {
        document
            .getElementById("redeemStatus")
            .textContent = "Redemptions are available in person at the event booth only.";
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

    state.quizAttempted = true;
    state.quizCorrect = 0;
    saveState();
    updateUI();

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
