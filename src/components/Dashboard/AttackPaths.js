import React from "react";
import styles from "../../app/component.module.scss";
import { Flex, Typography } from "antd";
import { Plus_Jakarta_Sans } from "next/font/google";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { attackPaths } from "@/constants";
import CardWrapper from "../Common/CardWrapper";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AttackPaths = () => {
  return (
    <>
      <CardWrapper
        title="Attack Paths"
        subtitle="By Target Type"
       
      >
        {attackPaths.map((item) => (
          <div key={item.key} className={styles.innerCards}>
            <Flex justify="space-between" align="center" gap="15px">
              <Title
                className={`${jakartaSans.className} ${styles.attackNumbers}`}
                level={4}
              >
                {item.number}
              </Title>
            
              <Paragraph
                className={`${jakartaSans.className} ${styles.innerText}`}
              >
                <strong>{item.heading}:</strong> {item.paragraph}
              </Paragraph>
            </Flex>
          </div>
        ))}
      </CardWrapper>
    </>
  );
};

export default AttackPaths;
