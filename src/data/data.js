import emoji from 'react-easy-emoji';
import rokode from '../assets/img/rokode.png'
import edgebound from '../assets/img/edgebound.png'
import golstats from '../assets/img/golstats.png'
import ferax from '../assets/img/ferax.png'
import pentalog from '../assets/img/pentalog.png'
import improving from '../assets/img/improving.png'

export const greetings = {
    "name": "Alberto Ochoa",
    "title": "Hi all, I'm Alberto",
    "description": "A passionate Frontend Web Developer having an experience of building Cross Platform Web applications with JavaScript / Reactjs / Nodejs / and some other cool libraries and frameworks.",
    "resumeLink": "https://drive.google.com/file/d/1NNjDCKuP9yjltqgbGADM1wR-UIv0dJbo/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'junior8adlt',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/Ing.AlbertoOchoa2/",
    "github": "https://github.com/junior8adlt",
    "linkedin": "https://www.linkedin.com/in/alberto-ochoa-de-la-torre-340410171/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
      ),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS'
      ),
      emoji(
        '⚡ Experience working under the SCRUM mode'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'SASS',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'ReactJs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Vue',
        fontAwesomeClassname: 'logos:vue',
      },
      {
        skillName: 'Angular',
        fontAwesomeClassname: 'logos:angular-icon',
      },
      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'React-Redux',
        fontAwesomeClassname: 'logos:redux',
      },
      {
        skillName: 'NPM',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'MYSQL',
        fontAwesomeClassname: 'logos:mysql',
      },
      {
      skillName: 'PostgreSQL',
      fontAwesomeClassname: 'logos:postgresql'
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'AWS',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'Firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'GIT',
        fontAwesomeClassname: 'logos:git-icon',
      },
    
    ],
}


export const educationInfo = [
    {
      schoolName: 'Mario Molina De Chapala Higher Technological Institute',
      subHeader: 'Degree Computer Systems Engineer',
      duration: '2015 - 2019',
    },
    {
      schoolName: 'Chapala Regional High School',
      subHeader: 'General Baccalaureate by competencies',
      duration: '2012 - 2015',
    },
]

export const experience = [
  {
    role: 'Software Specialist',
    company: 'Improving',
    companylogo: improving,
    date: 'July 2021 – Present',
    desc:
      'Here I worked mostly for multiple projects for a US Clients usin React & Vue as a main technologys:',
    descBullets: [
      'Structure the frontend part of the site with React & Vue.',
      'Integrate the REST API Services with the structure of the site.',
      'Develop of reusable components with React & Vue.',
      'For consume the REST API Services we use Axios & Fetch.',
      'Use of Redux and Vuex for a better management of the general state in the web application',
      'We use Redux Thunk for use async await functions on Redux.',
      "Use Redux persist to preserve the global state of redux",
      'Organize and manage development task with Jira.',
      'Management of third party API such AWS',
      'Work under the SCRUM mode.'
    ],
  },
  
  {
    role: 'Senior Software Engineer',
    company: 'Pentalog',
    companylogo: pentalog,
    date: 'May 2021 – Present',
    desc:
      'Here I worked mostly for multiple projects for a US Clients usin React as a main technology:',
    descBullets: [
      'Structure the frontend part of the site with React.',
      'Integrate the REST API Services with the structure of the site with React.',
      'Develop of reusable components with React.',
      'For consume the REST API Services we use Axios.',
      'Use of Redux for a better management of the general state in the web application',
      'We use Redux Thunk for use async await functions on Redux.',
      'Organize and manage development task with Jira.',
      'Management of third party APIS such AWS and Firebase',
      'Work under the SCRUM mode.'
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Edgebound',
    companylogo: edgebound,
    date: 'January 2021 – May 2021',
    desc:
      'Here I worked mostly for Commerce projects such as Claro Colombia & Telcel, responsibilities:',
    descBullets: [
      'Structure the frontend part of the site with React.',
      'Integrate the REST API Services with the structure of the site with React.',
      'Develop of reusable components with React.',
      'For consume the REST API Services we use Axios.',
      'We use Redux Thunk for use async await functions on Redux.',
      'For REST API Services we use HCL Commerce and VTEX.',
      'Organize and manage development task with Jira.',
      'Work under the SCRUM mode.'
    ],
  },
  {
    role: 'Frontend Lead Developer',
    company: 'Rokode',
    companylogo: rokode,
    date: 'July 2019 – November 2020',
    desc:
      'Here I developed multiple projects for car builders such as Audi, Porsche and Volkswagen, as well as managing the administration and control of the frontend department.',
      descBullets: [
        'Structure the frontend part of the site with React & Vue.',
        'Integrate the REST API Services with the structure of the site with React & Vue.',
        'Develop of reusable components with React & Vue.',
        'For consume the REST API Services we use Axios.',
        'We use Redux Thunk for use async await functions on Redux.',
        'For REST API Services we use we use the endpoints provided by the backend team.',
        'Organize and manage development task with Jira.',
        'Work under the SCRUM mode.'
      ],
  },
  {
    role: 'Vue Developer',
    company: 'Golstats',
    companylogo: golstats,
    date: 'June 2020 – Octuber 2020',
    desc:
      'Here I developed a system for the management and administration of the Qatar 2022 Soccer World Cup',
      descBullets: [
        'Structure the frontend part of the site with Vue.',
        'Integrate the REST API Services with the structure of the site with Vue.',
        'Develop of reusable components with Vue.',
        'For consume the REST API Services we use vanilla fetch.',
        'We use Vuex for a better management of the property in the project.',
        'For REST API Services we use we use the endpoints provided by the backend team.',
        'Organize and manage development task with Trello.',
        'Work under the SCRUM mode.'
      ],
  },
  {
    role: 'Frontend & Mobile Developer',
    company: 'Ferax',
    companylogo: ferax,
    date: 'July 2018 – April 2020',
    desc:
      'Here I developed a system for the administration of a garbage collection company, as well as developing a mobile application to rent objects.',
      descBullets: [
        'Structure the frontend part of the site with Angular and React.',
        'Structure the visual part of the application with React Native.',
        'Integrate the REST API Services with the structure of the site Angular y React Native.',
        'Develop of reusable components with Angular and React Native.',
        'For consume the REST API Services we use Axios.',
        'We use Redux for a better management of the property in the project.',
        'For REST API Services we use we use the endpoints provided by the backend team.',
        'Organize and manage development task with Trello.',
        'Work under the SCRUM mode.'
      ],
  },
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "lorem",
      url: "kasjfklsdjf"
    }
  }
]