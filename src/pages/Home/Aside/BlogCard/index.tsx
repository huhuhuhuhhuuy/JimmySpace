import React from 'react';

import Card from '@/components/Card';
import { cardUrl } from '@/utils/constant';
import { useTime } from '@/utils/hooks/useTime';

import s from './index.scss';

const BlogCard: React.FC = () => {
  const { timeText } = useTime();

  return (
    <Card className={s.card}>
      <p className={s.text}>
        {timeText}，<br />
        欢迎你来到<br />
         Jimmy 的<br />
        知识博客。<br />
      </p>
      <img src={cardUrl} className={s.avatar} />
    </Card>
  );
};

export default BlogCard;
