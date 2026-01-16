import React from 'react';
import CardWrapper from './CardWrapper';
import BoxWrapper from './BoxWrapper';
import { Flex, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from "../../app/component.module.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const TicketsWrapper = ({title, tickets}) => {
  return (
 <>
 <CardWrapper title={title}>
  {tickets.map((ticket) => (
    <BoxWrapper key={ticket.key}>
    <Flex justify='space-between' align='center'>
    <Typography>
    {ticket.taskNumber && (
       <Title level={3} className={jakartaSans.className}> {ticket.taskNumber}</Title>
    )}
     {ticket.name && (
       <Paragraph className={`${jakartaSans.className} ${styles.paragraphContent}`}>{ticket.name}</Paragraph>
    )}
    </Typography>
    <Link href="/"><RightOutlined style={{ fontSize: 24 }} /></Link>
    </Flex>
    </BoxWrapper>
  ))}
 </CardWrapper>
 </>
  )
}

export default TicketsWrapper