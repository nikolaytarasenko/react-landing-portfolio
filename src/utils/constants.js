import { v4 as uuidv4 } from 'uuid'

export const projects = [
    {
        id: uuidv4(),
        type: 'React',
        title: 'GitHub Repository Details',
        description: 'Search GitHub repositories by user name and view some details',
        stack: ['React', 'Redux Toolkit', 'Chakra UI'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://github-repository-details.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/github-repository-details' },
        ]
    },
    {
        id: uuidv4(),
        type: 'Markup',
        title: 'Vosk Barbershop',
        description: 'Landing Page',
        stack: ['Pug', 'SCSS', 'Bootstrap Grid', 'JavaScript', 'Gulp'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://vosk-barbershop-landing.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/landing-vosk-barbershop' },
        ]
    },
    {
        id: uuidv4(),
        type: 'React',
        title: 'G&D Consulting',
        description: 'React Multipage Website',
        stack: ['React', 'React Router', 'Context API', 'CSS Modules'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://consulting-multipage-react.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/react-multipage-gd-consulting' },
        ]
    },
    {
        id: uuidv4(),
        type: 'React',
        title: 'Adrasteia',
        description: 'React Landing Page',
        stack: ['React', 'Context API', 'Tailwind CSS'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://adrasteia-landing-react.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/react-adrasteia' },
        ]
    },
    {
        id: uuidv4(),
        type: 'Markup',
        title: 'Teetan21',
        description: 'Landing Page',
        stack: ['Pug', 'SCSS', 'Bootstrap Grid', 'JavaScript', 'Gulp'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://teetan21-landing.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/landing-teetan21' },
        ]
    },
    {
        id: uuidv4(),
        type: 'React',
        title: 'T-Security',
        description: 'React Multipage Website',
        stack: ['React', 'React Router', 'Context API', 'Tailwind CSS'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://t-security-multipage-react.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/react-multipage-t-security' },
        ]
    },
    {
        id: uuidv4(),
        type: 'Javascript',
        title: 'Memory Game',
        description: 'JavaScript App',
        stack: ['HTML', 'CSS', 'JavaScript'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://10-js-memory-game.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/memory-game-js' },
        ]
    },
    {
        id: uuidv4(),
        type: 'Markup',
        title: 'CMT Bank',
        description: 'Landing Page',
        stack: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
        links: [
            { id: uuidv4(), title: 'Demo', url: 'https://cmtbank-landing.netlify.app/' },
            { id: uuidv4(), title: 'GitHub', url: 'https://github.com/nikolaytarasenko/landing-cmtbank' },
        ]
    },
]