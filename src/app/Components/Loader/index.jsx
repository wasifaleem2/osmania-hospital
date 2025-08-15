import React from 'react';
import style from './loader.module.scss';

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.medicalCross}></div>
    </div>
  );
};

export default Loader;
