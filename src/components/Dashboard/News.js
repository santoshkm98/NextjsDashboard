import React from "react";
import styles from "../../app/component.module.scss";
import { Row, Col, Typography } from "antd";
import { Plus_Jakarta_Sans } from "next/font/google";
import { newsData } from "@/constants";
import Paragraph from "antd/es/typography/Paragraph";
import CardWrapper from "../Common/CardWrapper";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const News = () => {
  return (
    <>
      <CardWrapper
        title=" MITRE Attacks"
        subtitle="By Target Type"
       
      >
        <Row gutter={16} style={{marginBottom:'24px'}}>
          {newsData.map((item) => (
            <Col key={item.key} xs={24} sm={24} md={24} lg={12}>
              <div className={styles.attackCards}>
                <Row gutter={10}>
                  <Col span={24}>
                  <Typography>
                    <Paragraph
                      className={`${styles.innerText} ${jakartaSans.className}`}
                    >
                      {item.title}
                    </Paragraph>
                    </Typography>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </CardWrapper>
    </>
  );
};

export default News;
