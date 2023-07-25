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
          <div key={course}>
            <h3>{education[course].title}</h3>
            <small>{education[course].institution}</small>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education;