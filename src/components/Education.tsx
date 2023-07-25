'use client'
import React from 'react';
import { ContentDBContext } from '@/contexts/ContentDBContext';

const Education = () => {
  const {education} = React.useContext(ContentDBContext);
  return (
    <section id="Educação">
      <h2>Educação</h2>
      <div className="wrapper gap-5 shadowBg">
        {education && Object.keys(education).map(course =>
          <div className="flex flex-col items-center justify-center" key={course}>
            <h3>{education[course].title}</h3>
            <div className="flex items-center gap-5">
              <small>{education[course].institution}</small>
              {education[course].certificate &&
                <a href={education[course].certificate} target='_blank'
                  className="
                    text-sm pr-1 pl-1 text-moodboard-dark duration-300
                    hover:text-moodboard-light
                    bg-moodboard-salmon rounded-full
                  "
                >
                  Certificado
                </a>
              }
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education;