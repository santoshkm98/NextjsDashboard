import React from 'react'
import Image from 'next/image';
import styles from "../../app/page.module.css";
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
const Header = () => {
  return (
 <>
 <div className={styles.marginComponent}>

<Image
   src="/assets/Trustcenter-logo.png"
   width={210}
   height={50}
   alt="Trustcenter Logo"
 />
  
  {/* <Link className={styles.backButton} href="/" ><ArrowLeft className={styles.leftArrow}  size={30} />Back</Link> */}
  </div>
 </>
  )
}

export default Header