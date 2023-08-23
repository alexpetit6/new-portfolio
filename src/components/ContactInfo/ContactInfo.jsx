import './ContactInfo.css'

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      {/* <h6 id='contact-header'>Here's some contact info: </h6>  */}
      <a href="https://www.linkedin.com/in/alex-petit-large/" target='_blank' rel='noreferrer'><img className='contact-logos' src="images/logos/In-Blue-21.png" alt="LinkedIn"/></a>
      <a href="https://github.com/alexpetit6" target='_blank' rel='noreferrer'><img className='contact-logos' src="images/logos/github-mark.png" alt="GitHub"/></a>
      <h6>Renton, WA</h6>
      &nbsp;|&nbsp;
      <h6>alexpetit6@gmail.com</h6>
      &nbsp;|&nbsp;
      <a href="/Resume.pdf" target='_blank' rel='noreferrer'>Resume</a>
    </div>
  )
}