const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'BO.',
  }
  
  // const about = {
  //   // all the properties are optional - can be left empty or deleted
  //   name: 'Bukunmi Odugbesan',
  //   role: 'Front End Engineer',
  //   description:
  //     'Experienced in building large scale marketing applications used in sending targeted ads to thousands of users across different devices and different browsers. Also passionate about bringing designs to life making code as exact as the designs as possible, making applications appealing as well as functional. Diligent, Hardworking and resourceful, I also have a persistent drive to always sharpen my skills',
  //   resume: 'https://docs.google.com/document/d/1RszZaorho2GeIWGKrlKh8uFya6Mad5ETU34rfu_6Xlw/edit#heading=h.y7d3xdxnr44m',
  //   social: {
  //     linkedin: 'https://www.linkedin.com/in/bukunmi-odugbesan-157728157/',
  //     github: 'https://github.com/Tomivan',
  //   },
  // }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'OSLGSC Voting System',
      description:
        'The OSLGSC Voting System is a project for a local government in Ogun State. The app was use to voting for an awards ceremony. The payment system was integrated with paystack to handle payments',
      stack: ['Next', 'Typescript', 'Firebase', 'Context', 'Tailwind'],
      sourceCode: 'https://github.com/Teepremium/OSLGSC-awards',
      livePreview: 'https://oslgsc-test.vercel.app/',
    },
    {
      name: 'Boogi-noire',
      description:
        'Boogi-noire is an e-commerce website that sells perfumes and colognes. The application has a payment system integrated with paystack to handle payments',
      stack: ['CSS', 'Javascript', 'React', 'Context', 'Firebase'],
      sourceCode: 'https://github.com/Tomivan/Boogi-concepts',
      livePreview: 'https://boogi-noire.vercel.app/',
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
      name: 'Teepremium',
      description:
        'A digital marketing agency that offers SEO Optimization, social media marketing and content creation',
      stack: ['CSS', 'Javascript',  'Next'],
      sourceCode: 'https://github.com/Tomivan/Teepremium',
      livePreview: 'https://teepremium.vercel.app/',
    },
    {
      name: 'Deosol Events',
      description:
        'A web application where customers can book the services of an event planner. Built with React, Bootstrap and icons from FontAwesome. Responsive across different devices.',
      stack: ['CSS', 'HTML', 'React', 'Bootstrap'],
      sourceCode: 'https://github.com/Tomivan/deosol',
      livePreview: 'https://deosol.vercel.app/',
    },
    {
      name: 'IJ Portfolio',
      description: 
      'A portfolio for Data Analyst, Digital Strategist and Community Manager, showcasing her skills, projects an contact information.',
      stack: ['CSS', 'Javascript', 'React'],
      sourceCode: 'https://github.com/Tomivan/ij-portfolio',
      livePreview: 'https://ijeoma-ejinwa.vercel.app/',
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
  
  export { header, projects, skills, contact }