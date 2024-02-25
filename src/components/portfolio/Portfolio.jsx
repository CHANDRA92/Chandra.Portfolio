import React from 'react';
import IMG1 from '../../assets/NetFlix-UI-Clone.png';
import IMG2 from '../../assets/todos.png';
import IMG3 from '../../assets/Quiz.png';
import IMG4 from '../../assets/Form.png';
// import IMG5 from '../../assets/news.png';
// import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'NetFlix UI Clone Project',
      img: IMG1,
      description:
        "The Netflix UI clone project recreates Netflix's interface using HTML, CSS, and possibly. It aims to replicate layout, design, and functionality for educational or demonstrative purposes, offering hands-on experience in web development and UI design.",
      link: 'https://netflix-clone-u.netlify.app/',
      github: 'https://github.com/CHANDRA92/Netflix-Clone',
    },
    {
      id: 2,
      title: 'Quiz App',
      img: IMG3,
      description:
        'The online quiz app facilitates both student testing and teacher question updates. Users can take tests within the app, while teachers manage and update questions.',
      technologies: 'Python | Django',
      link: 'https://quiz-maker-ten.vercel.app/',
      github: 'https://github.com/CHANDRA92/QuizMaker.git',
    },
    {
      id: 3,
      title: 'To-Do App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'Redux toolkit  | React',
      link: 'https://reduxtoolkit-todos-by-chandra.netlify.app/',
      github: 'https://github.com/CHANDRA92/Redux-toolkit-crash-course',
    },
    {
      id: 4,
      title: 'Live Validation Form',
      img: IMG4,
      description:
        'Formik facilitates real-time validation in React forms, enhancing user experience with seamless integration and robust error handling.',
      technologies: 'React | Formik.',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
