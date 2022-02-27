// Importing all sponsors logos from Assets
import a from "./Assets/sponsorsLogos/a.png";


/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";





const TOP_SECTION = {
    TITLE: "Join ABC Hacks",
    Typed_effect: ["24 hours of creation", "Win awesome prizes"],
    SHORT_DESCRIPTION: "Join us on <insert date> with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
    IMG_SRC: boy,
    DISCORD_LINK: "",
    JUDGES_FORM_LINK: "/",
    HACKERS_REGISTRATION_FORM_LINK: "/"
};

const SOCIALS = {
    instagram: "/",
    discord: "/",
    linkedin: "/",
    twitter: "/",
    devpost: "/",
    email: "mailto:hello@domainname.tech",
    mail: "hello@domainname.tech"
};

const MIDDLE_SECTION = {
    TITLE: "What is ABC hacks?",
    LONG_DESCRIPTION: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer",
    LOGO_EFFECT: true,
    LOGO: ""
};

const FOOTER = {
    VOLUNTEERING_FORM: {
        required: true,
        src: "/"
    },
    JOIN_TEAM: {
        required: true,
        src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
    },
    Privacy_policy: {
        required: true,
        src: ""
    },
    Terms_of_use: {
        required: true,
        src: ""
    }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
    [
        //Array 1
        {
            icon: < i class = "first fas fa-4x fa-trophy" > < /i>,
            type: "First Prize",
            content: "First Overall prize will be given to a project that outstands all other submissions"
        },
        {
            icon: < i class = " second fas fa-4x fa-medal" > < /i>,
            type: "Second Prize",
            content: "Second Overall prize will be given to the second best project of the hackathon"
        },
        {
            icon: < i class = " third fas fa-4x fa-skiing-nordic" > < /i>,
            type: "Third Prize",
            content: "Best third overall project of the hackathon will win some awesome prizes"
        }
    ],
    [
        //Array 2
        {
            icon: < i class = "fab fourth fa-3x fa-wpbeginner" > < /i>,
            type: "Best Solo",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
        },
        {
            icon: < i class = "first fas fa-4x fa-trophy" > < /i>,
            type: " Best Beginner",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
        },
        {
            icon: < i class = " fifth fa-3x fas fa-book-open" > < /i>,
            type: "Best UI/UX",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
        }
    ],

];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
    [
        //Array 1
        {
            Name: "Rehan",
            role: "Organizer",
            github: "",
            linkedin: "",
            img: me
        },
        {
            Name: "Moon",
            role: "Organizer",
            github: "",
            linkedin: "",
            img: moon
        },
        {
            Name: "Erika",
            role: "Organizer",
            github: "",
            linkedin: "",
            img: Ryah
        }
    ]
];



/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
    [{ src: a }, { src: a }, { src: a }], //Array 1
    [{ src: a }, { src: a }, { src: a }], //Array 2

];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
    [
        [{
                label: "What is a hackathon?",
                content: 'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
            },
            {
                label: "Who can attend?",
                content: "ABC Hacks is open to all undergraduate, high school students and middle school students from all schools."
            },
            {
                label: "I am a first time hacker, what should I do?",
                content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
            },
            {
                label: "How team formation works?",
                content: "You can form team with 2-4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
            }
        ],
        [{
                label: "How to register myself in the hackathon?",
                content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
            },
            {
                label: "I have more questions?",
                content: "Reach us directly at (hello@domainname.tech) we would happy to help you."
            },
            {
                label: "Can i volunteer?",
                content: "Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you."
            },
            {
                label: "Will there be swag?",
                content: "Yes! Participants will recieveing ABC Hacks swag!."
            }
        ]
    ],

];

export {
    TOP_SECTION,
    MIDDLE_SECTION,
    SOCIALS,
    FOOTER,
    Prizeinfo,
    sponsorLogos,
    TeamInfo,
    frequentlyAskedQuestions
};