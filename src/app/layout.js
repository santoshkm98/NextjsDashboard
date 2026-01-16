
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { darkTheme } from "@/config/theme";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});



export const metadata = {
  title: "Cloud risk and compliance monitoring - TrustCenter",
  description: "Visualize cloud attack paths, detect misconfigurations, and auto-tag risks to MITRE, CIS, and compliance controls. Simple, read-only AWS &amp; Azure integration.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <ConfigProvider theme={darkTheme}>
        {/* <AntdRegistry> */}
        {children}
        {/* </AntdRegistry> */}
        </ConfigProvider>
      </body>
    </html>
  );
}
