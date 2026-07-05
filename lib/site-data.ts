import type { IconSvgElement } from "@hugeicons/react"
import {
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"

export const siteLinks = {
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSc3yn3runhY5ByXnGcYY8pvGVMkb3q-sYDzdkb7dssVpE5kcg/viewform",
  instagram: "https://www.instagram.com/thesukoonwithin_/",
  linkedin: "https://www.linkedin.com/company/the-sukoon-within/",
  email: "thesukoonwithin@gmail.com",
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/join", label: "Join" },
  { href: "/connect", label: "Connect" },
] as const

export const impactStats = [
  {
    value: "16+",
    label: "sessions conducted",
    detail: "Offline and online mental health education spaces.",
  },
  {
    value: "1,000+",
    label: "young minds reached",
    detail: "Students and youth introduced to emotional language.",
  },
  {
    value: "5+",
    label: "NGO touchpoints",
    detail: "Public updates reference NGO-linked community work.",
  },
  {
    value: "Aug 2025",
    label: "founded",
    detail: "A youth-led movement built from small, real actions.",
  },
] as const

export const missionCards = [
  {
    title: "School-first mental health education",
    body: "The vision is simple: mental health should become an important subject in every school in India, local and private alike.",
  },
  {
    title: "Each one, teach one",
    body: "The mission is to equip young people with knowledge, tools, and frameworks they can take back into their own communities.",
  },
  {
    title: "Safe, non-judgemental rooms",
    body: "Sessions are designed to help people feel heard, understood, and more at peace without pretending to replace clinical care.",
  },
] as const

export const workHighlights = [
  {
    title: "Online sessions",
    meta: "Accessible youth conversations",
    body: "The movement started showing up on screens so young people could talk about stress, feelings, addiction risks, and support without stigma.",
  },
  {
    title: "Offline sessions",
    meta: "Community halls and local spaces",
    body: "In-person sessions bring mental health education into rooms where these conversations often have not happened before.",
  },
  {
    title: "Bhopal outreach",
    meta: "Public LinkedIn work update",
    body: "Public updates reference Bhopal as one of the places where The Sukoon Within has taken its youth mental health work.",
  },
  {
    title: "Gandhi Ashram work",
    meta: "Public LinkedIn work update",
    body: "Gandhi Ashram appears in public updates as another example of community-centred mental health awareness work.",
  },
] as const

export const sessionPosts = [
  {
    title: "Shoishob Foundation session",
    author: "Soumili Das",
    location: "Kolkata",
    date: "28 November",
    image: "/work/soumili.jpg",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7400920965695778816/",
    summary:
      "A ground-level session with children at Shoishob Foundation focused on emotions, triggers, and simple techniques they could practice.",
    content: [
      "On 28th November, Soumili Das conducted a session with children at Shoishob - A Foundation For Children in Kolkata, sharing the initiative and motive behind The Sukoon Within.",
      "The session stood out because of how openly the children responded. They asked bold questions, reacted honestly, and tried the activities with full attention.",
      "The children slowly began to understand their emotions, reflect on their triggers, and practice techniques introduced during the session. It was a reminder that emotional awareness should begin early, through conversations that feel safe and real.",
    ],
  },
  {
    title: "Emotions and self-control session",
    author: "Bhakti",
    location: "Coaching institute",
    date: "Recent session",
    image: "/work/bhakti.jpg",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7455443319901306880/",
    summary:
      "A Mental Health Ambassador session about emotions, expression, and self-control with students at a coaching institute.",
    content: [
      "Bhakti, a Mental Health Ambassador at The Sukoon Within, conducted a mental health session at a coaching institute she knew.",
      "The session focused on emotions, expression, and self-control. While explaining these ideas, she found herself reflecting on her own reactions too: the moments she overreacted and the moments she managed to pause.",
      "That made the session feel less like teaching from a distance and more like a real conversation. It carried the spirit of The Sukoon Within: learning alongside the people in the room.",
    ],
  },
  {
    title: "Jaipur team foundation visit",
    author: "The Sukoon Within",
    location: "Jaipur",
    date: "1 December",
    image: "/work/jaipur.jpg",
    href: "https://www.linkedin.com/posts/the-sukoon-within_mentalhealtheducation-childmentalhealth-youthwellbeing-activity-7409824344387801089-MYHi/",
    summary:
      "The Jaipur team used activities, creativity, and open conversation to introduce children to emotions in a lighter way.",
    content: [
      "On 1st December, the Jaipur team visited a foundation to conduct a mental health education session with children.",
      "The session used fun activities, creativity, and open conversations so children could learn about emotions in a way that felt safe, natural, and engaging.",
      "The room was filled with curiosity, laughter, and honesty. It showed how children respond with openness when mental health education is presented in a friendly and interactive way.",
    ],
  },
  {
    title: "Friendship and empathy session",
    author: "Pradhi Rai and team",
    location: "Bhopal",
    date: "Recent session",
    image: "/work/pradhi.jpg",
    href: "https://www.linkedin.com/posts/the-sukoon-within_pradhi-rai-and-her-team-conducted-an-impactful-activity-7464196481441349632-ewdO/",
    summary:
      "A Bhopal session on friendship, empathy, trust, and community among young children.",
    content: [
      "Pradhi Rai and her team conducted a session in Bhopal on the importance of friendship.",
      "Through open conversations and engaging activities, the session helped young children think about empathy, trust, faithfulness, and community.",
      "This session supports The Sukoon Within's broader mission: bringing emotional literacy and well-being education to children across India through youth-led social impact.",
    ],
  },
] as const

export const heroImages = [
  {
    src: "/work/soumili.jpg",
    alt: "Soumili Das leading a mental health education session",
  },
  {
    src: "/work/bhakti.jpg",
    alt: "Mental health ambassador session with students",
  },
  {
    src: "/work/jaipur.jpg",
    alt: "Jaipur team session with children",
  },
  {
    src: "/work/pradhi.jpg",
    alt: "Bhopal session on friendship and empathy",
  },
  {
    src: "/work/angela.jpeg",
    alt: "Angela's mental health awareness session",
  },
  {
    src: "/work/harmanpreet.jpeg",
    alt: "Harmanpreet's mental health awareness session",
  },
] as const

export const joinRoles = [
  {
    title: "Social Media Intern",
    body: "Help turn mental health education into honest, readable content for young people online.",
    focus: ["Content planning", "Campaign ideas", "Youth-first storytelling"],
  },
  {
    title: "Outreach & Networking Intern",
    body: "Help connect the movement with schools, NGOs, communities, and youth volunteers who care about mental health.",
    focus: ["Partner outreach", "Session coordination", "Community follow-ups"],
  },
] as const

export const socialLinks: {
  label: string
  href: string
  body: string
  icon: IconSvgElement
}[] = [
  {
    label: "Instagram",
    href: siteLinks.instagram,
    body: "Follow session updates, youth-led campaigns, and mental health awareness content.",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: siteLinks.linkedin,
    body: "See public work updates, collaborations, and organization milestones.",
    icon: Linkedin01Icon,
  },
  {
    label: "Email",
    href: `mailto:${siteLinks.email}`,
    body: "Write to the team for collaborations, sessions, or chapter conversations.",
    icon: Mail01Icon,
  },
]

export const founder = {
  name: "Soumili Das",
  role: "Founder",
  image: "/people/soumili-das.png",
}

export const teamMembers = [
  {
    name: "Soumili Das",
    role: "Founder",
    headline: "Founder @ The Sukoon Within",
    location: "India",
    href: "https://www.linkedin.com/in/soumili-das-305964289/",
    image: "/people/soumili-das.png",
  },
  {
    name: "Pranshi Sachdeva",
    role: "Manager",
    headline: "Manager @ The Sukoon Within",
    location: "Haryana, India",
    href: "https://www.linkedin.com/in/pranshi-sachdeva/",
    image: "/people/pranshi.png",
  },
  {
    name: "Arjun Vijay Prakash",
    role: "Website Builder",
    headline: "Full-stack developer who built The Sukoon Within website",
    location: "Lucknow, India",
    href: "https://www.linkedin.com/in/arjuncodess/",
    image: "/people/arjun.jpg",
  },
] as const
