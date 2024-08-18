import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/experience.css';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};


export default function Experience() {
  const timeline = [
    {
      icon: workIcon,
      date: '2021 - present',
      title: 'Saama Technologies',
      subtitle: 'Software Engineer - L2',
      desc: [
        'Skills: ReactJs, Redux, Flux, Immutable JS, ES6, CSS, NPM, postgresql, java, python, docker, Git, Agile methodology.',
        'Created responsive charts by using Highcharts and datatables with various filters.', 
        'Implemented various UI components to handle huge amount and variety of datasets using React and various other NPM libraries.',
        'Used Redux and Redux-toolkit to maintain the data at central level (Store).',
        'Implemented all the security fixes for complete frontend as a data sensitive application.',
        'Converted Highcharts data to pdf using Java (spring boot).',
        'Involved for development in various SAAS based platforms.',
      ],
    },
    {
      icon: workIcon,
      date: '2019 - 2021',
      title: 'Sankey Solutions',
      subtitle: 'Solution Analyst (Full Stack Developer)',
      desc: [
        'Skills: ReactJs, Redux, JSON, Node.js, Typescript, Git, Agile methodology.',
        'Created various screens and components using Reactjs, Javascript, JSON, CSS, React Typescript.',
        'Implemented various workflows for complex functionalities',
        'Implemented various backend functionality using node.js and database operations using SQL queries.',
        'Involved in the development of web apps for various national and international clients.',
        'Involved in all phases of software development life cycle(SDLC).',
      ]
    },
    {
      icon: schoolIcon,
      date: '2015 - 2019',
      title: 'B.E. COMPUTER ENGINEER',
      subtitle: 'Mumbai University',
      desc: [
        'Implemented the Final Year Project - Heart Disease Prediction using Deep Neural Networks with 90% accuracy.',
        'Implemented the above project using python keras, pandas library and for GUI used python tkinter library.',
        'Awarded for Best Project Poster(In this poster we should all the details and flowcharts) of final year B.E. project',
        'Focused on Learning of Data Structures and Algorithms, DBMS, web development '
      ]
    },
    {
      icon: schoolIcon,
      date: '2015',
      title: 'HSC SCIENCE',
      subtitle: 'Mumbai University',
      desc: []
    },
    {
      icon: schoolIcon,
      date: '2013',
      title: 'SSC 10th',
      subtitle: 'Maharashtra Board',
      desc: []
    },
    { icon: starIcon },
  ];
  return(
    <div id="experience_section" style={{ backgroundColor: '#dddddd', paddingTop: '10px'}}>
      <h1 className="text-center my-5" id='experience_heading'>EXPERIENCE & EDUCATION</h1>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <ul>
                  {t.desc.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}