import React from 'react';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "8+", label: "Technical Articles" },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="/sethmakori2.jpg"
              alt="Seth Makori"
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
          </div>

          <div className={styles.textContent}>
            <p className={styles.description}>
              I'm a passionate software engineer and designer, transforming ideas into 
              elegant digital experiences. Based in Kenya, working worldwide. With expertise in Go, 
              JavaScript, and modern web technologies, I create efficient, scalable 
              solutions and enjoy solving complex problems.
            </p>

            <div className={styles.statsContainer}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <h3 className={styles.statNumber}>{stat.number}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            <a 
              href={`${process.env.PUBLIC_URL}/resources/Seth_Makori_CV.pdf`} 
              download="Seth_Makori_CV.pdf" 
              className={styles.downloadButton}
            >
              Download CV
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className={styles.downloadIcon}
              >
                <path 
                  d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
