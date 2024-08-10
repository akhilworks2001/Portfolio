import React from 'react'
import Skill from './skills/Skill'

import styles from "./about.module.scss";
import Info from './info/Info';

export default function About() {
  return (
    <div className={styles.container}>
      <Info />
      <Skill />
    </div>
  )
};