import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../../components/AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles/index.scss';
import './styles/index_mobile.scss';

const Contact = () => {
  // Changes the page layout based on the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    
  useEffect(() => {
      window.addEventListener("resize", () => {
          const ismobile = window.innerWidth < 700;
          if (ismobile !== isMobile) setIsMobile(ismobile);
      }, false);
  }, [isMobile]);


  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tgafyp9',
        'template_pp3vsto',
        form.current,
        'AKMmo7eNSpffTK_u9'
      )
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
        }, () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className={`${isMobile ? "mobile" : "non-mobile"}`}>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in any and all opportunities - especially ambitious or
            large projects. However, if you have other requests or questions, or just wanna say hi,
            don't hesitate to contact me using the below form!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Braedon Martin, <br />
          Canada, <br />
          Barrie, Ontario <br />
          <span>braedonmartin22@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.38931621155745, -79.69017679844653]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.38931621155745, -79.69017679844653]}>
              <Popup>Hi! I'm currently located in the downtown Barrie area</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
