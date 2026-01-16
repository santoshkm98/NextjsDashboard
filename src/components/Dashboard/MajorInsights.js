import React from "react";
import { Row, Col, Flex, Tag } from "antd";
import styles from "../../app/component.module.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import Typography from "antd/es/typography/Typography";
import Paragraph from "antd/es/typography/Paragraph";
import { insights } from "@/constants";
import CardWrapper from "../Common/CardWrapper";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MajorInsights = () => {
  return (
    <>
      <CardWrapper
        title="Weak Configurations"
        subtitle="By Risk Level"
      
      >
        <Row gutter={30}>
          {insights.map((item, index) => (
            <Col key={index} span={24}>
              <div className={styles.borderedCards}>
                <Typography>
                  <Paragraph
                    className={`${jakartaSans.className} ${styles.weakconfigsHeading}`}
                  >
                    {item.title}
                  </Paragraph>
                </Typography>
                <Flex gap="middle" justify="space-between" align="flex-start">
                  <Tag
                    className={`${styles[item.tagClassName]} ${
                      jakartaSans.className
                    }`}
                  >
                    {item.tag}
                  </Tag>
                </Flex>
              </div>
            </Col>
          ))}
        </Row>
      </CardWrapper>
    </>
  );
};

export default MajorInsights;
