import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/components/Login";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Home() {
  return (
    <div className={`${styles.pageLayout} ${jakartaSans.className}`}>
       <Login/>
     
    </div>
  );
}
