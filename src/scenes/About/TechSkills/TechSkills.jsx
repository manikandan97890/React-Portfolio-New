import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiPostgresql,
  DiAws,
  DiDjango,
  DiPython,
} from 'react-icons/di';
import {  
  SiRedux,
  SiTypescript,
  SiSocketDotIo, 
  SiAzuredevops,
  SiMicrosoftazure
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>  
      <li className={s.techIcon}>
        <SiTypescript />
      </li>    
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAzuredevops />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiSocketDotIo />
      </li>
      <li className={s.techIcon}>
        <DiAws />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <SiMicrosoftazure />
      </li>
    </ul>
  );
};

export default TechSkills;
