import emoji from 'react-easy-emoji';

import SomoPlay from './assets/img/icons/common/SomoPlay.png';
import TT from './assets/img/icons/common/T&T.png';
import AndyExpress from './assets/img/icons/common/AndyExpress.png';
import GoToCanada from './assets/img/icons/common/GoToCanada.png';
import WeFunDate from './assets/img/icons/common/WeFunDate.png';


export const greetings = {
    "name": "Chris Liu",
    "title": "Hi all, I'm Chris Chong Liu",
    "description": "A passionate Full Stack Web Developer with extensive experience of building fully reponsive components. With every line of code, I strive to make the web a wonderful place.",
    "slogan": "Get ready to turn ideas into reality.",
    "resumeLink": "www.google.com"
}

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/profile.php?id=100013837660586",
    "instagram": "https://www.instagram.com/chong.chris.liu/",
    "github": "https://github.com/Chongchrisliu",
    "linkedin": "https://www.linkedin.com/in/chongchongchrisliu/"
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
      Stack: 'JavaScript/ES6', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
      barColour: 'success',
    },
    {
      Stack: 'React/Vue/Node.js',
      progressPercentage: '90',
      barColour: 'primary',
    },
    {
      Stack: 'Java/C#',
      progressPercentage: '80',
      barColour: 'warning',
    },
    {
      Stack: 'Algorithm Design / Data structure',
      progressPercentage: '90',
      barColour: 'info',
    },
    {
      Stack: 'SQL Server / MongoDB', //Insert stack or technology you have experience in
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
      course: 'Algorithm Design and Analysis, Component Based Software, Communication Security, Cryptographic Computations',
      desc: 'Orchestrated the implmentation of optimized Strassen matrix multiplciation with time complexity O(n^log2(7)) on the platform of Compute Canada.',
      descBullets: [
        'Realized the optimization design of Winograd’s variant combined with stopping recursion early, linearity property, limited recursion, and block recombination.',
        'When matrix dimension reaches 4096, time cost is greatly reduced by 77% compared with classiccal O(n^3) method.',
      ],
    },
    // {
    //   schoolName: 'North China Electric Power University',
    //   subHeader: 'Computer Science',
    //   duration: 'September 2013 - April 2016',
    //   desc: 'Algorithm Design and Analysis, Data mining, Computer Architecture, Computer Network, Internet of Things',
    //   descBullets: [
    //     'Fault Diagnosis for Power Grid Systems Based on Rough Set and Bayesian Network - ICMMITA 2015, p544 – p549.',
    //     'Graduated within Top 5% of class.',
    //   ],
    // },
]

export const experience = [
  {
    role: 'Web Application Developer',
    company: 'T&T Supermarket, Loblaw Companies Ltd.',
    link: 'https://www.tntsupermarket.com',
    companylogo: TT,
    date: 'October 2020 – Present',
    desc:
      'Collaborate with a cross-functional team to develop ERP new features, optimize code, and upgrade system.',
    descBullets: [
      'Mobilize the development and launch of Fulfillment Department yearly major projects - Order Refill, to greatly reduce the order and items out-of-stock rate.',
      'Motivate the upgrade of front-end system including webpack, React, and packages to serve front-end engineering.',
      'Lead the development of multiple-language translation function using i18n to accomplish internationalization.',
      'Upgrade HR Applicant Tracking system using Always Encrypted for SQL Server to prevent sensitive data being revealed.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'SomoPlay Inc.',
    link: 'https://somoplay.com/#/home',
    companylogo: SomoPlay,
    date: 'January 2020 – October 2020',
    desc:
      'Develop reusable front-end components with Vue and React to build fully responsive and interactive web applications.',
    descBullets: [
      'Applied React Hooks and Vue Composition API to Compose UI components to enrich component library and enhance system maintainability.',
      'Translated UI wireframes using Bootstrap, Element UI, Material UI to enhance responsive and interactive features.',
      'Took advantage of CSS3 Media Queries to deliver a pixel perfect layout suited in different devices.',
      'Used Axios/SuperAgent to interact with RESTful APIs to simplify asynchronous requests and CRUD operations.',
    ]
      
  },
]

export const projects = [
  {
    name: "We Fun Date",
    desc: "WeFunDate is an online dating website exclusively focused on matching Chinese-Canadians. Its matching algorithm places special emphasis on Chinese-relevant charateristics with premium membership and live chat functionalities.",
    stack: "Vue, Vuex, Vue Router, Element UI, Bootstrap, SaSS, Moment.js, Git",
    image: WeFunDate,
  },
  {
    name: "Go To Canada",
    desc: "GoToCanada is an online web application for canadian colleges and educational institutes to recruit international students and review their applications. It also serves as an online portal for international students and agents to submit applications, make payments and check the status of the applications.",
    stack: "React.js, React Hooks, Redux, React Router, material UI, Animate.css, NProgress.js, Axios, REST API",
    image: GoToCanada,
  },
  {
    name: "Andy Express",
    desc: "Andy Express is an express platform website with Mandarin-English bilingual model to boost business focusing on cross-border e-commerce and international transportation.",
    stack: "ES6, Vue Composition API, Element UI, Bootstrap, CSS Media Queries, Express.js, MongoDB, Amazon S3",
    image: AndyExpress,
  }
]