import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'Createryan出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Yan-music',
          title: 'Yan-music',
          href: 'http://www.creatercc.com',
          blankTarget: true,
        },
        {
          key: 'Yan-music-server',
          title: 'Yan-music-server',
          href: 'http://admin.creatercc.com',
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
