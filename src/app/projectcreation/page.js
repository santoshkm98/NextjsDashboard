import React from 'react';
import Header from '@/components/Header'
import MultiStepForm from '@/components/MultiStepForm/MultiStepForm'
import styles from "../../app/page.module.css";

const ProjectCreation = () => {
  return (
<>
<Header/>
<div className={styles.marginalLayout}>
<MultiStepForm/>
</div>
</>
  )
}

export default ProjectCreation