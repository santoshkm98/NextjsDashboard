import { MailOutlined, LockOutlined, UserOutlined, SettingOutlined, CheckCircleOutlined } from '@ant-design/icons';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';

export const formSteps = [
  { title: 'Email', icon: <MailOutlined />, Component: StepOne },
  { title: 'Password', icon: <LockOutlined />, Component: StepTwo },
  { title: 'Profile', icon: <UserOutlined />, Component: StepThree },
  { title: 'Settings', icon: <SettingOutlined />, Component: StepFour },
  { title: 'Confirm', icon: <CheckCircleOutlined />, Component: StepFive },
];
