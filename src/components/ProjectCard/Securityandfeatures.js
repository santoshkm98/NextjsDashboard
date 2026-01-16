'use client';
import React, { useState } from 'react';
import { Row, Col, Form, Radio } from 'antd';
import Title from 'antd/es/typography/Title';
import { EditOutlined } from '@ant-design/icons';
import styles from '../../app/component.module.scss'; 
import { Plus_Jakarta_Sans } from "next/font/google"; 

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const ReadOnlyBox = ({ label, value }) => (
  <Form.Item label={label}>
    <div style={{ flex: '1, 1, auto' }} className={styles.readOnly}>{value}</div>
  </Form.Item>
);

const YesNoField = ({ label, value, editable, onChange }) => {
  return editable ? (
    <Form.Item label={label}>
      <Radio.Group value={value} onChange={onChange}>
        <Radio value="Yes">Yes</Radio>
        <Radio value="No">No</Radio>
      </Radio.Group>
    </Form.Item>
  ) : (
    <ReadOnlyBox label={label} value={value} />
  );
};

const SecurityForm = () => {

  const [isEditing, setIsEditing] = useState([false, false]);

  const [securityData, setSecurityData] = useState({
    ddos: 'Yes',
    penetration: 'No',
    activity: 'Yes',
    folder: 'No',
    portScan: 'Yes',
    honeyPot: 'No',
  });

  const [featureData, setFeatureData] = useState({
    blockInternet: 'Yes',
    clipboardAccess: 'No',
    compliance: 'Yes',
    secretDetection: 'Yes',
    incident: 'No',
    phishing: 'Yes',
  });

  const handleEdit = (index) => {
    const updated = [...isEditing];
    updated[index] = !updated[index];
    setIsEditing(updated);
  };

  return (
    <Row gutter={30} >
      <Col span={12}>
        <div className={`${styles.projectCards} ${jakartaSans.className}`}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>Security Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions}  style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEdit(0)} />
            </Col>
          </Row>

          <YesNoField
            label="Autoblock DDOS attack?"
            value={securityData.ddos}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, ddos: e.target.value })}
          />
          <YesNoField
            label="Weekly penetration testing?"
            value={securityData.penetration}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, penetration: e.target.value })}
          />
          <YesNoField
            label="Monitor user activity?"
            value={securityData.activity}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, activity: e.target.value })}
          />
          <YesNoField
            label="Folder monitoring?"
            value={securityData.folder}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, folder: e.target.value })}
          />
          <YesNoField
            label="Unauthorized port scans?"
            value={securityData.portScan}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, portScan: e.target.value })}
          />
          <YesNoField
            label="Setup Honey Pots?"
            value={securityData.honeyPot}
            editable={isEditing[0]}
            onChange={(e) => setSecurityData({ ...securityData, honeyPot: e.target.value })}
          />
        </div>
      </Col>

      <Col span={12}>
        <div className={`${styles.projectCards} ${jakartaSans.className}`}>
          <Row>
            <Col span={23}>
              <Title  className={jakartaSans.className}level={4}>Feature Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions}  style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEdit(1)} />
            </Col>
          </Row>

          <YesNoField
            label="Block internet access?"
            value={featureData.blockInternet}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, blockInternet: e.target.value })}
          />
          <YesNoField
            label="Block clipboard access?"
            value={featureData.clipboardAccess}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, clipboardAccess: e.target.value })}
          />
          <YesNoField
            label="Monitor compliance?"
            value={featureData.compliance}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, compliance: e.target.value })}
          />
          <YesNoField
            label="Secret detection in code?"
            value={featureData.secretDetection}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, secretDetection: e.target.value })}
          />
          <YesNoField
            label="Incident management?"
            value={featureData.incident}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, incident: e.target.value })}
          />
          <YesNoField
            label="Phishing simulations?"
            value={featureData.phishing}
            editable={isEditing[1]}
            onChange={(e) => setFeatureData({ ...featureData, phishing: e.target.value })}
          />
        </div>
      </Col>
    </Row>
  );
};

export default SecurityForm;
