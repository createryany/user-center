import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from "react";

const Footer: React.FC = () => {
  const defaultMessage = 'Createryan出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Yan-music',
          title: 'Yan-音乐馆',
          href: 'http://music.creatercc.com',
          blankTarget: true,
        },
        {
          key: 'AllYi编程知识星球',
          title: 'AllYi编程知识星球',
          href: 'http://www.creatercc.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> createryan GitHub</>,
          href: 'https://github.com/createryany',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
