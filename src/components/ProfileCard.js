import Card from './ui/Card';
import ProfilePicture from './ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
  return (
    <Card>
      <ProfilePicture />
      <div className="mt-6">
        <h2 className="title text-color-white">David Yon</h2>
        <p className="mb-6">Software and Data Engineer</p>
        <ul className="text-gray-800 leading-normal mb-6">
          <li className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-color-white text-sm w-4 h-4 inline-block" />
            <a className="text-color-white" href="mailto:yonjosedavid@gmail.com">yonjosedavid@gmail</a>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-color-white text-sm w-4 h-4 inline-block" />
            <a className="text-color-white" href="tel:(+51) 932 552 705">(+51) 932-552-705</a>
          </li>
          <li className="mb-2">
            <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-color-white text-sm w-4 h-4 inline-block" />
            <a className="text-color-white"
              href="https://www.linkedin.com/in/davidyon04/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="mr-3 text-color-white text-sm w-4 h-4 inline-block" />
            <a 
              className='text-color-white'
              href="https://www.instagram.com/david_yon04/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              @david_yon04
            </a>
          </li>
        </ul>
        <p className="text-justify">
          Software Engineering wanting to grow in the field of software
          development, engineering and artificial intelligence. My skills are based on
          theory and good practices so I have the ability to adapt to the tool
          that is required.
        </p>
      </div>
    </Card>
  );
};

export default ProfileCard;
