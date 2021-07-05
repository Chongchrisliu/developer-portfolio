import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Chris Liu",
    "title": "Hi all, I'm Chris Chong Liu",
    "description": "A passionate Full Stack Web Developer with extensive experience of building fully reponsive components. With every line of code, I strive to make the web a wonderful place.",
    "slogan": "Get ready to turn ideas into reality.",
    "resumeLink": "www.google.com"
}

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/1hanzla100",
    "instagram": "https://www.instagram.com/1hanzla100",
    "github": "https://github.com/1hanzla100",
    "linkedin": "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'PASSIONATE FULL STACK WEB DEVELOPER WHO LOVES TO LEARN AND MAKE A DIEERENCE',
    skills: [
      emoji(
        '⚡ Develop highly interactive and fully responsive User Interfaces'
      ),
      emoji('⚡ Oversee front-end transition to modular component styles'),
      emoji('⚡ Extensive experience in back-end implementation of MVC/MVW'),
      emoji('⚡ Compose powerful SQL queries to extract data into SSRS report'),
    ],
    
    softwareSkills: [
      {
        skillId: 'js',
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillId: 'html5',
        skillName: 'HTML-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillId: 'css3',
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillId: 'sass',
        skillName: 'SASS',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillId: 'ts',
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillId: 'csharp',
        skillName: 'C#',
        fontAwesomeClassname: 'logos:c-sharp',
      },
      {
        skillId: 'java',
        skillName: 'Java',
        fontAwesomeClassname: 'logos:java',
      },
      {
        skillId: 'sql',
        skillName: 'SQL / Mysql',
        fontAwesomeClassname: 'carbon:sql',
      },
      // {
      //   skillId: 'python',
      //   skillName: 'Python',
      //   fontAwesomeClassname: 'logos:python',
      // },
      {
        skillId: 'react',
        skillName: 'React',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillId: 'bootstrap',
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
      },
      {
        skillId: 'vue',
        skillName: 'Vue',
        fontAwesomeClassname: 'logos:vue',
      },
      {
        skillId: 'webpack',
        skillName: 'WebPack',
        fontAwesomeClassname: 'logos:webpack',
      },
      {
        skillId: 'dot-net',
        skillName: '.NET',
        fontAwesomeClassname: 'mdi:dot-net',
      },
      {
        skillId: 'nuget',
        skillName: 'Nuget',
        fontAwesomeClassname: 'vscode-icons:file-type-nuget',
      },
      // {
      //   skillId: 'npm',
      //   skillName: 'NPM',
      //   fontAwesomeClassname: 'logos:npm-icon',
      // },
      {
        skillId: 'json',
        skillName: 'JSON',
        fontAwesomeClassname: 'bx:bxs-file-json',
      },
      {
        skillId: 'axios',
        skillName: 'Axios',
        fontAwesomeClassname: 'whh:ajax',
      },
      {
        skillId: 'aws',
        skillName: 'AWS',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillId: 'azure',
        skillName: 'Azure',
        fontAwesomeClassname: 'logos:azure-icon',
      },
      {
        skillId: 'git',
        skillName: 'Git',
        fontAwesomeClassname: 'fa-brands:git',
      },
      // {
      //   skillId: 'fontawesome',
      //   skillName: 'FontAwesome',
      //   fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      // },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend Engineering', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
      barColour: 'success',
    },
    {
      Stack: 'Backend',
      progressPercentage: '80',
      barColour: 'warning',
    },
    {
      Stack: 'Algorithm / Data structure',
      progressPercentage: '90',
      barColour: 'info',
    },
    {
      Stack: 'SQL', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
      barColour: 'danger',
    },
    {
      Stack: 'REST API',
      progressPercentage: '80',
      barColour: 'success',
    },
    {
      Stack: 'PROJECT MANAGEMENT',
      progressPercentage: '90',
      barColour: 'primary',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'University of Waterloo',
      subHeader: 'Master of Applied Science in Electrical and Computer Engineering',
      duration: 'September 2016 - April 2019',
      desc: 'Orchestrated the implmentation of optimized Strassen matrix multiplciation on the platform of Compute Canada.',
      descBullets: [
        'Realized the optimization design of Winograd’s variant combined with stopping recursion early, linearity property, limited recursion, and block recombination.',
        'When matrix dimension reaches 4096, time cost is greatly reduced by 77% comapring classic method.',
      ],
    },
    {
      schoolName: 'North China Electric Power University',
      subHeader: 'Computer Science',
      duration: 'September 2013 - April 2016',
      desc: 'Algorithm Design and Analysis, Data mining, Computer Architecture, Computer Network, Internet of Things',
      descBullets: [
        'Fault Diagnosis for Power Grid Systems Based on Rough Set and Bayesian Network - ICMMITA 2015, p544 – p549.',
        'Graduated within Top 5% of class.',
      ],
    },
]

export const experience = [
  {
    role: 'Web Application Developer',
    company: 'T&T, Loblaw Companies Ltd.',
    companylogo: googlelogo,
    date: 'October 2020 – Present',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'SomoPlay Inc.',
    companylogo: github,
    date: 'January 2020 – September 2020',
    desc:
      'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    role: 'Research Assistant',
    company: 'University of Waterloo',
    companylogo: airbnb,
    date: 'April 2019 – December 2019',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  }
]