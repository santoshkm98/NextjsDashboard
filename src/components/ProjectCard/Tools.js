'use client';
import React, { useState } from 'react';
import { Row, Col, Form, Checkbox } from 'antd';
import Title from 'antd/es/typography/Title';
import { EditOutlined } from '@ant-design/icons';
import styles from '../../app/component.module.scss';
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const allTools = ['Apache spark', 'VMD', 'TensorFlow', 'PLINK', 'SATA17', 'Signoz', 'PowerBI', 'ParaView'];

const ToolsConfiguration = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTools, setSelectedTools] = useState(allTools); 

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Row className={jakartaSans.className}>
      <Col span={24}>
        <div className={`${styles.projectCards} ${jakartaSans.className}`}>
          <Row>
            <Col span={23}>
              <Title className={jakartaSans.className} level={4}>Tools Requirements</Title>
            </Col>
            <Col span={1}>
              <EditOutlined className={styles.editOptions} 
                style={{ fontSize: 24, color: '#fff', cursor: 'pointer' }}
                onClick={handleEditToggle}
              />
            </Col>
          </Row>

          <Form.Item>
            {isEditing ? (
              <Checkbox.Group
                value={selectedTools}
                onChange={(checkedValues) => setSelectedTools(checkedValues)}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {allTools.map((tool) => (
                    <div key={tool} style={{ width: '23%', padding: '6px 12px' }}>
                      <Checkbox value={tool}>{tool}</Checkbox>
                    </div>
                  ))}
                </div>
              </Checkbox.Group>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {selectedTools.map((tool) => (
                  <div key={tool} className={styles.readOnly}  style={{ width: '23%',  padding: '6px 12px' }}>
                    {tool}
                  </div>
                ))}
              </div>
            )}
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};

export default ToolsConfiguration;
