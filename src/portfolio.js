const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'BO.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Bukunmi Odugbesan',
    role: 'Front End Engineer',
    description:
      'Experienced in building large scale marketing applications used in sending targeted ads to thousands of users across different devices and different browsers. Also passionate about bringing designs to life making code as exact as the designs as possible, making applications appealing as well as functional. Diligent, Hardworking and resourceful, I also have a persistent drive to always sharpen my skills',
    resume: 'https://docs.google.com/document/d/1RszZaorho2GeIWGKrlKh8uFya6Mad5ETU34rfu_6Xlw/edit#heading=h.y7d3xdxnr44m',
    social: {
      linkedin: 'https://www.linkedin.com/in/bukunmi-odugbesan-157728157/',
      github: 'https://github.com/Tomivan',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Duro',
      description:
        'Duro is a solution to the problem of queuing and line-cutting. You sign up to join the queue and would be alerted when it is your turn.',
      stack: ['React', 'Typescript', 'React', 'Redux', 'Formik'],
      sourceCode: 'https://github.com/PipelineV2/team-beta-duro-frontend',
      livePreview: 'https://fascinating-halva-6ecf99.netlify.app/',
    },
    {
      name: 'Nativetalk',
      description:
        'The Nativetalk app is owned by Tech4mation Limited. The app gets users to register to use the nativatalk product which helps buisnesses connects with their customers',
      stack: ['CSS', 'HTML', 'React', 'Bootstrap'],
      sourceCode: 'https://github.com/Tomivan/NativeTalk-Landing',
      livePreview: 'https://nativetalk.io',
    },
    {
      name: 'Movie-search App',
      description:
        'Enter the name of any movie in the search box, and movies with that title are shown in boxes below, with some information about the movie',
      stack: ['CSS', 'Javascript', 'React'],
      sourceCode: 'https://github.com/Tomivan/React-movie-search-app',
      livePreview: 'https://tzmovies.netlify.app/',
    },
    {
      name: 'Booktracker',
      description:
        'A bookshelf that has a list of books to be read. The shelf is divided into currently reading, Want to read (next in line) and a list of all books',
      stack: ['CSS', 'Javascript',  'React'],
      sourceCode: 'https://github.com/Tomivan/Udacity-booktracker',
      livePreview: 'https://udacity-booktracker.vercel.app/',
    },
    {
      name: 'Would-You-Rather',
      description:
        'A web based game that asks would-you-rather questions, keeps score and has a leaderboard with authentication functions',
      stack: ['CSS', 'HTML', 'React', 'Redux'],
      sourceCode: 'https://github.com/Tomivan/would-you-rather-udacity',
      livePreview: ' https://would-you-rather-udacity-red.vercel.app/',
    },
    {
      name: 'Oneburner',
      description:
        'The oneburner app has the login page, home page, enterprise page and the contact page. No authentication added',
      stack: ['CSS', 'Javascript', 'React'],
      sourceCode: 'https://github.com/Tomivan/Oneburner',
      livePreview: 'https://oneburner-three.vercel.app',
    },
    {
      name: 'Rayda',
      description:
        'Rayda is an ecommerce app that displays items to be sold. The styling was done using Material UI and Redux Toolkit for API implementation',
      stack: ['React', 'Material UI', 'Redux Toolkit'],
      sourceCode: 'https://github.com/Tomivan/Rayda',
      livePreview: 'https://rayda-lac.vercel.app/',
    },
    
    {
      name: 'Stars Wars',
      description:
        'The star wars api was consumed to show a list of movies, starships, people, and species in the starwars franchise',
      stack: ['Material UI', 'React', 'React Hooks'],
      sourceCode: 'https://github.com/Tomivan/enyata',
      livePreview: 'https://starwars-tomivan.vercel.app',
    },
    {
      name: 'Premium Health',
      description:
        'The premium health is an admin dashboard used to keep record of patient information, health workers information and other admin',
      stack: ['React', 'React Bootsrtap', 'Redux', 'React unit testing'],
      sourceCode: 'https://github.com/Tomivan/health-portal',
      livePreview: 'https://starwars-tomivan.vercel.app',
    },
    {
      name: 'Host Beak',
      description:
        'Hoost Beak is an app to manage business performance' ,
      stack: ['Bootsrap', 'React', 'React Hooks', 'Carbon components'],
      sourceCode: 'https://github.com/Tomivan/HostBeak',
      livePreview: 'https://host-beak-six.vercel.app',
    },
    {
      name: 'Apex',
      description:
        'The Apex app helps connects businesses with their customers',
      stack: ['Tailwind', 'Vue'],
      sourceCode: 'https://github.com/Tomivan/Apex',
      livePreview: 'https://apex-woad.vercel.app',
    },
    {
      name: 'Meta Care',
      description:
        'The metacare app shows different graphs',
      stack: ['Chart js', 'React', 'React Hooks'],
      sourceCode: 'https://github.com/Tomivan/metacare',
      livePreview: 'https://metacare-omega.vercel.app/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Vue',
    'Material UI',
    'Bootstrap',
    'Tailwind',
    'Firebase',
    'CI/CD',
    'SASS',
    'GIT',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'bukunmiodugbesans@gmail.com',
  }
  
  export { header, about, projects, skills, contact }