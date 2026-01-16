'use client';
import React, { useState } from 'react';
import { Row, Col, Input, Form, Radio, Select, Button } from 'antd';
import Title from 'antd/es/typography/Title';
import { EditOutlined } from '@ant-design/icons';
import styles from '../../app/component.module.scss';
import { Plus_Jakarta_Sans } from "next/font/google";
import { formData } from '@/constants';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const InfrastructureForm = () => {
  const [isEditing, setIsEditing] = useState([false, false, false, false, false]);

  const handleEditClick = (index) => {
    const newState = [...isEditing];
    newState[index] = !newState[index];
    setIsEditing(newState);
  };

  const renderField = (editing, type, value, options = []) => {
    if (!editing) {
      return <div style={{ flex: '1, 1, auto' }} className={styles.readOnly}>{value}</div>;
    }

    switch (type) {
      case 'input':
        return <Input defaultValue={value} />;
      case 'select':
        return (
          <Select className="custom-select" defaultValue={value}>
            {options.map(opt => (
              <Select.Option  key={opt} value={opt}>{opt}</Select.Option>
            ))}
          </Select>
        );
      case 'radio':
        return (
          <Radio.Group defaultValue={value}>
            {options.map(opt => (
              <Radio key={opt} value={opt}>{opt}</Radio>
            ))}
          </Radio.Group>
        );
      default:
        return null;
    }
  };

  return (
    <Row gutter={15} className={jakartaSans.className}>
      {/* Infrastructure Requirements */}
      <Col span={12}>
        <div className={`${styles.projectCards} ${jakartaSans.className}`}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>Infrastructure Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions} style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEditClick(0)} />
            </Col>
          </Row>
          <Form.Item label="Platform">
            {renderField(isEditing[0], 'radio', 'Windows', ['Windows', 'Linux'])}
          </Form.Item>
          <Form.Item label="Core Requirements">
            {renderField(isEditing[0], 'select', '12', ['8', '12', '16'])}
          </Form.Item>
          <Form.Item label="RAM Requirements">
            {renderField(isEditing[0], 'select', 'Custom', ['Custom', '16 GB', '32 GB'])}
          </Form.Item>
          <Form.Item label="RAM">
            {renderField(isEditing[0], 'input', '32 GB')}
          </Form.Item>
          <Form.Item label="Storage Requirements">
            {renderField(isEditing[0], 'select', '240 TB', ['240 TB', '500 TB'])}
          </Form.Item>
          {isEditing[0] && (
      <div className={styles.actionButtons}>
        <Button type="primary" onClick={() => handleEditClick(0)} className={styles.updateButton} >Update</Button>
        <Button type="default" onClick={() => handleEditClick(0)} className={styles.cancelButton} >Cancel</Button>
      </div>
    )}
        </div>
      </Col>

      {/* GPU Requirements */}
      <Col span={12}>
        <div className={styles.projectCards}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>GPU Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions} style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEditClick(1)} />
            </Col>
          </Row>
          <Form.Item label="GPU Requirements">
            {renderField(isEditing[1], 'select', '16 GB GDDR6 @ 320 GBps', ['16 GB GDDR6 @ 320 GBps', '24 GB GDDR6X'])}
          </Form.Item>
        </div>

        <div className={styles.projectCards}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>Backup Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions} style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEditClick(2)} />
            </Col>
          </Row>
          <Form.Item label="Backup Requirements">
            {renderField(isEditing[2], 'radio', 'Yes', ['Yes', 'No'])}
          </Form.Item>
          <Form.Item label="Retention (in days)">
            {renderField(isEditing[2], 'select', '30 Days', ['30 Days', '60 Days'])}
          </Form.Item>
        </div>
      </Col>

      {/* Location */}
      <Col span={24}>
        <div className={styles.projectCards}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>Location</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions} style={{ fontSize: 24, color: '#fff' }} onClick={() => handleEditClick(3)} />
            </Col>
          </Row>
          <Form.Item label="Location">
            {renderField(isEditing[3], 'select', 'Mumbai', ['Mumbai', 'Delhi', 'Bangalore'])}
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};

export default InfrastructureForm;
