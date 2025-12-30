import './Skills.css'

const Skills = () => {

  return (
    <section className='section skills' id='skills'>
      <p className='blue'>My Expertise</p>
      <p className='bigger'>Technical Skills</p>
      <div className='cards'>
        <div className='card'>
          <p className='blue'>Languages</p>
          <ul className='skills__list'>
            <li className='skills__list-item'>JavaScript (ES6+)</li>
            <li className='skills__list-item'>HTML5</li>
            <li className='skills__list-item'>CSS3</li>
            <li className='skills__list-item'>TypeScript</li>
          </ul>
        </div>
        <div className='card'>
          <p className='blue'>Framework / Libraries</p>
          <ul className='skills__list'>
            <li className='skills__list-item'>React</li>
            <li className='skills__list-item'>Redux</li>
            <li className='skills__list-item'>Next</li>
            <li className='skills__list-item'>Angular</li>
            <li className='skills__list-item'>Tailwind</li>
          </ul>
        </div>
        <div className='card'>
          <p className='blue'>Tools</p>
          <ul className='skills__list'>
            <li className='skills__list-item'>Git /GitHub</li>
            <li className='skills__list-item'>Webpack</li>
            <li className='skills__list-item'>Figma</li>
            <li className='skills__list-item'>Adobe XD</li>
            <li className='skills__list-item'>Jest</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;