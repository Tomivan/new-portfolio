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
      name: 'Crown clothing',
      description:
        'An ecommerce application where you can shop for clothes, sneakers and hats',
      stack: ['CSS', 'Javascript', 'React', 'Redux', 'Firebase'],
      sourceCode: 'https://github.com/Tomivan/crown-clothing',
      livePreview: 'https://crown-clothing.vercel.app/',
    },
    {
      name: 'Movie-search App',
      description:
        'Enter the name of any movie in the search box, and movies with that title are shown in boxes below, with some information about the movie',
      stack: ['CSS', 'Javascript', 'React'],
      sourceCode: 'https://github.com/Tomivan/React-movie-search-app',
      livePreview: 'tzmovies.netlify.app/',
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
      name: 'Oneburner',
      description:
        'The oneburner app has the login page, home page, enterprise page and the contact page. No authentication added',
      stack: ['CSS', 'Javascript', 'React'],
      sourceCode: 'https://github.com/Tomivan/Oneburner',
      livePreview: 'skooleo.netlify.app/',
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