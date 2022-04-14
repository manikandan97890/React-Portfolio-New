import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Manikandan Chidambaram </span>
        from <span className={s.purple}> Chennai, India.</span>
        <br />
        Skilled MERN Stack Developer.
        <br /> Bachelor in Computer Science from
        <br />
        Veltech University, Chennai.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Cricket
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Aerospace Explorations
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Choose a job you love, and you will never have to work a day in your life"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
