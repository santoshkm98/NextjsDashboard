"use client";
import React from "react";
import { Card, Typography, Space, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

import styles from "../../app/component.module.scss";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const CardWrapper = ({ title, subtitle, seeAllHref, children }) => {
  const router = useRouter();
  return (
    <>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Flex justify="space-between" align="baseline">
            <Typography>
              <Title className={jakartaSans.className} level={3}>
                {title}
              </Title>
            </Typography>
            {seeAllHref && (
              <Typography.Link
                className={styles.boxLinks}
                onClick={() => router.push(seeAllHref)}
              >
                See All
              </Typography.Link>
            )}
          </Flex>
          {/* {subtitle && (
          <Paragraph type="secondary" style={{ color: '#aaa' }}>
            {subtitle}
          </Paragraph>
        )} */}
          <div>{children}</div>
        </Space>
      </Card>
    </>
  );
};

export default CardWrapper;
