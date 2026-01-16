import { Menu, Tooltip } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from 'next/image';
import { Typography } from 'antd';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const SidebarMenu = ({ collapsed }) => {
  const router = useRouter();

  const items = [
    // {
    //   key: '/create',
    //   icon: collapsed ? (
    //     <Tooltip title="Create" >
    //       <Image width={24} height={24} src="/assets/Icons/PlusIcon.svg" alt="Create Icon" />
    //     </Tooltip>
    //   ) : (
    //     <Image width={24} height={24} src="/assets/Icons/PlusIcon.svg" alt="Create Icon" />
    //   ),
    //   label: <Link href="/">{collapsed ? '' : 'Create'}</Link>,
    // },
    {
      key: '/dashboard',
      icon: collapsed ? (
    
          <Image width={24} height={24} src="/assets/Icons/DashboardIcon.svg" alt="Dashboard Icon" />
   
      ) : (
        <Image width={24} height={24} src="/assets/Icons/DashboardIcon.svg" alt="Dashboard Icon" />
      ),
      label: collapsed ? '' : 'Dashboard',
      // children: [
      //   {
      //     key: '/newdashboard',
      //     label: <Link href="/newdashboard">Engineer Dashboard</Link>,
      //   },
      //   {
      //     key: '/newdashboard2',
      //     label: (
           
      //         <Link href="/newdashboard2">COO Dashboard</Link>
        
      //     ),
      //   },
      // ],
      label: <Link prefetch={true} href="/dashboard">{collapsed ? '' : 'Dashboard'}</Link>,
    },
    // {
    //   key: '/project',
    //   icon: collapsed ? (
    //     <Tooltip title="Projects" >
    //       <Image width={24} height={24} src="/assets/Icons/ProjectsIcon.svg" alt="Projects Icon" />
    //     </Tooltip>
    //   ) : (
    //     <Image width={24} height={24} src="/assets/Icons/ProjectsIcon.svg" alt="Projects Icon" />
    //   ),
    //   label: <a href="/project">{collapsed ? '' : 'Projects'}</a>,
    // },
    {
      key: '/reports/detailedreport',
      icon: collapsed ? (
      
          <Image width={24} height={24} src="/assets/Icons/ReportsIcon.svg" alt="Reports Icon" />
   
      ) : (
        <Image width={24} height={24} src="/assets/Icons/ReportsIcon.svg" alt="Reports Icon" />
      ),
      label: collapsed ? '' : 'Reports',
      children: [
        {
          key: '/reports/detailedreport/auditreport',
          label: (
          <Typography.Link onClick={() => router.push('/reports/detailedreport/auditreport')}>Audit Report</Typography.Link>)
          ,
        },
        {
          key: '/reports/detailedreport/infrastructurereport',
          label: (
           
              <Typography.Link onClick={() => router.push('/reports/detailedreport/infrastructurereport')}>Infrastructure Report</Typography.Link>
        
          ),
        },
      ],
    },
    
    {
      key: '/',
      icon: collapsed ? (
        <Tooltip title="Settings" >
          <Image width={24} height={24} src="/assets/Icons/SettingsIcon.svg" alt="Settings Icon" />
        </Tooltip>
      ) : (
        <Image width={24} height={24} src="/assets/Icons/SettingsIcon.svg" alt="Settings Icon" />
      ),
      label: <Link href="/">{collapsed ? '' : 'Settings'}</Link>,
    },
    {
      key: '/support',
      icon: collapsed ? (
        <Tooltip title="Support" >
          <Image width={24} height={24} src="/assets/Icons/SupportIcon.svg" alt="Support Icon" />
        </Tooltip>
      ) : (
        <Image width={24} height={24} src="/assets/Icons/SupportIcon.svg" alt="Support Icon" />
      ),
      label: <Link href="/support">{collapsed ? '' : 'Support'}</Link>,
    },
    {
      key: '/logout',
      icon: collapsed ? (
        <Tooltip title="Logout" >
          <Image width={24} height={24} src="/assets/Icons/LogoutIcon.svg" alt="Logout Icon" />
        </Tooltip>
      ) : (
        <Image width={24} height={24} src="/assets/Icons/LogoutIcon.svg" alt="Logout Icon" />
      ),
      label: <Link href="/logout">{collapsed ? '' : 'Logout'}</Link>,
    },
  ];

  return (  
    <Menu
     theme="dark"
    className={jakartaSans.className}
      mode="inline"
      items={items}
    />
  );
};

export default SidebarMenu;
