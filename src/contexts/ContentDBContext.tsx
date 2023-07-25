'use client'
import React from 'react';

import { getData } from '@/services/firebase';

const defaultContext: ContentDB = {
  text: {
    introduction: '',
    about: '',
    tagTechs: ''
  },
  projects: {},
  technologies: {},
  education: {}
}

export const ContentDBContext = React.createContext<ContentDB>(defaultContext);

const ContentDBProvider = ({children}:{children:React.ReactNode}) => {
  const [contentDB, setContentDB] = React.useState<ContentDB>(defaultContext);

  React.useEffect(() => {
    getData<ContentDB>('content', setContentDB);
  },[]);

  return (
    <ContentDBContext.Provider value={contentDB}>
      {children}
    </ContentDBContext.Provider>
  )
}

export default ContentDBProvider;