import './About.css'
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesIcon from '@mui/icons-material/Devices';
import BoltIcon from '@mui/icons-material/Bolt';

const About = () => {

  return (
    <div className='about'>
      <p className='blue'>About me</p>
      <p className='bigger'>Bridging the gap between design and engineering</p>
      <p>With over 5 years of experience in web development, I focus on creating intuitive user interfaces.
        I believe a good code is like a good design – clean, efficient, and serves the user's needs without friction.
      </p>
      <div className='cards'>
        <div className='card'>
          <TerminalIcon style={{ fontSize: 30, color: '#1976d2' }} />
          <p className="card-title">Clean Code</p>
          <p>Writing scalable, and self-documenting code that teams love to work with.</p>
        </div>
        <div className='card'>
          <DevicesIcon style={{ fontSize: 30, color: '#1976d2' }} />
          <p className="card-title">Responsive Design</p>
          <p>Ensuring applications look and feel great on any device, from desktop to mobile.</p>
        </div>
         <div className='card'>
          <BoltIcon style={{ fontSize: 30, color: '#1976d2' }} />
          <p className="card-title">Performance First</p>
          <p>Optimizing applications for speed, accessibility and SEO to deliver seamless user experiences.</p>
        </div>
      </div>
    </div>
  )
}

export default About;