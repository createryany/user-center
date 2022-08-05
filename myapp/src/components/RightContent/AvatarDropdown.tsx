import {outLogin} from '@/services/ant-design-pro/api';
import {LogoutOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Menu, Spin} from 'antd';
import type {ItemType} from 'antd/lib/menu/hooks/useItems';
import {stringify} from 'querystring';
import type {MenuInfo} from 'rc-menu/lib/interface';
import React, {useCallback} from 'react';
import {history} from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import message from "antd/es/message";
import {useModel} from "@@/plugin-model/useModel";

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
// const logOut = async () => {
//   await outLogin();
//   const defaultLogoutSuccessMessage = "退出成功";
//   message.success(defaultLogoutSuccessMessage);
//   const {query = {}, search, pathname} = history.location;
//   console.log(query, search, pathname);
//   const {redirect} = query;
//   // Note: There may be security issues, please note
//   if (window.location.pathname !== '/user/login' && !redirect) {
//     history.replace({
//       pathname: '/user/login',
//       search: stringify({
//         redirect: pathname + search,
//       }),
//     });
//   }
// };
/**
 * 退出登录，删除当前保存的 url
 */
const logOut = async () => {
  await outLogin();
  const defaultLogoutSuccessMessage = "退出成功";
  message.success(defaultLogoutSuccessMessage);
  const {query = {}} = history.location;
  const {redirect} = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: 0,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({menu}) => {
  const {initialState, setInitialState} = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const {key} = event;
      if (key === 'logout') {
        setInitialState((s: any) => ({...s, currentUser: undefined}));
        logOut();
        return;
      }
      history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  // @ts-ignore
  const {currentUser} = initialState;

  if (!currentUser || !currentUser.username) {
    return loading;
  }

  const menuItems: ItemType[] = [
    ...(menu
      ? [
        {
          key: 'center',
          icon: <UserOutlined/>,
          label: '个人中心',
        },
        {
          key: 'settings',
          icon: <SettingOutlined/>,
          label: '个人设置',
        },
        {
          type: 'divider' as const,
        },
      ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined/>,
      label: '退出登录',
    },
  ];

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick} items={menuItems}/>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={currentUser.avatarUrl} alt="avatarUrl"/>
        <span className={`${styles.name} anticon`}>{currentUser.username}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
