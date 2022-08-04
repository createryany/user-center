import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import {history} from 'umi';
import {SYSTEM_LOGO} from "@/constants";
import styles from './index.less';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const loginPath = '/user/login';

  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    // 校验
    if (userPassword !== checkPassword) {
      message.error('两次输入的密码不一致');
      return;
    }
    // 注册
    const result = await register(values);
    const {status, successMessage, errorMessage}: any = result;
    console.log('success s', status);
    if (status) {
      console.log(status, successMessage, errorMessage);
      message.success(successMessage);
      /**
       * 此方法会跳转到 redirect 参数所在的位置
       * */
      if (!history) return;
      const {query} = history.location;
      const {redirect} = query as {
        redirect: string;
      };
      if (redirect) {
        history.push({
          pathname: loginPath,
          query
        });
      }
      history.push(loginPath);
      return;
    } else {
      message.error(errorMessage);
    }
    return;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{searchConfig: {submitText: '注 册'}}}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="奥易编程知识星球"
          subTitle={'致力于最好的编程知识分享，创造和发现新的编程思维'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账号密码注册'}/>
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '账号长度不能小于 4',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于 8',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于 8',
                  },
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
