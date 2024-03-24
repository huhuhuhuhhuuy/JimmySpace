import React from 'react';

import { source_github } from '@/utils/constant';

import s from './index.scss';

const Footer: React.FC = () => {
  const frameArr = [
    'React',
    'React Router',
    'Redux',
    'Webpack',
    'AntD',
    'ahooks',
    'CloudBase'
  ];

  return (
    <footer className={s.footer}>
      <span>
        个人博客系统
        <a href={source_github} target='_blank' rel='noreferrer' className={s.text}>
          「源代码」
        </a>
      </span>
      <span>
        {frameArr.map((item, index) => (
          <span className={s.siteFrame} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
