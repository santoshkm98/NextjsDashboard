import React from "react";
import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "../../app/component.module.scss";
import BoxWrapper from "../Common/BoxWrapper";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ContainerBox = ({ label, value }) => {
  return (
    <BoxWrapper>
      <div className={styles.cardBox}>
        <Typography>
          <Paragraph className={`${jakartaSans.className} ${styles.boxHeadline}`}>
            {label}
          </Paragraph>
          <Title className={`${jakartaSans.className} ${styles.analysisheading}`} level={2}>
            {value}
          </Title>
        </Typography>
      </div>
    </BoxWrapper>
  );
};

export default ContainerBox;
