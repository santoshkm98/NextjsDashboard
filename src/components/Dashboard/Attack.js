import React from "react";
import styles from "../../app/component.module.scss";
import { Typography, Space, Flex } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { ticketList } from "@/constants";
import CardWrapper from "../Common/CardWrapper";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Attack = () => {
  return (
    <>
    <CardWrapper
         title="Recent Tickets"
         subtitle="By Target Type"
        
    >
        {ticketList.map((item) => (
          <div key={item.key} className={styles.innerCards}>
      <Paragraph className={`${jakartaSans.className} ${styles.innerText}`}>
        {item.request}
      </Paragraph>
      <Flex justify="space-between" align="center" style={{ marginBottom: 15, marginTop: 13 }}>
        <Paragraph className={`${jakartaSans.className} ${styles.ticketsText}`}>
          {item.time}
        </Paragraph>
        <Flex align="baseline" gap={6} >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: item.color,
            }}
          />
          <span className={`${jakartaSans.className} ${styles.ticketsText}`}>
            {item.priority}
          </span>
        </Flex>
      </Flex>
    </div>
        ))}

    </CardWrapper>

     
    </>
  );
};

export default Attack;
