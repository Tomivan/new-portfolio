import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <p className='blue'>Contact me</p>
      <p className='bigger'>Let's work together</p>
      <p>I am open to working on new and exciting opportunities. Send me an email:</p>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline width'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact;