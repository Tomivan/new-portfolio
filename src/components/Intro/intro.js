import './intro.css';
import Image from '../../assets/images/image.webp';

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-text">
            <h1>Crafting <span className='blue'>digital</span> <span className='purple'>experiences</span> that matter</h1>
            <p>I am a Frontend Engineer specialized in building accessible, responsive and performant web applications</p>
            <div className="button-container">
                <a href="#projects" className="intro-button">View Projects</a>
                <a href="#contact" className="intro-button intro-button-secondary">Contact Me</a>
            </div>
        </div>
        <div className="intro-image">
            <img src={Image} className="intro-img" alt="Intro Illustration" loading='lazy' width="400" height="400"/>
        </div>
    </div>
  );
}

export default Intro;