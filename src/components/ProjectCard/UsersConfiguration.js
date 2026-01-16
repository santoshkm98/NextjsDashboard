'use client';
import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, Button, Popconfirm, ConfigProvider } from 'antd';
import Title from 'antd/es/typography/Title';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styles from '../../app/component.module.scss';
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const UsersConfiguration = () => {
  const [isEditing, setIsEditing] = useState([false, false]);

  const [userDetails, setUserDetails] = useState({
    name: 'Susan M. Cunniff',
    email: 'susancunniff09@gmail.com',
    designation: 'Researcher',
  });

  const [requirement, setRequirement] = useState('1');
  const handleEditToggle = (index) => {
    const updated = [...isEditing];
    updated[index] = !updated[index];
    setIsEditing(updated);
  };
  const handleAddUser = () => {
    setUserDetailsList([
      ...userDetailsList,
      { name: '', email: '', designation: '' },
    ]);
  };


  return (
    <>
      <Row gutter={30} className={jakartaSans.className}>
        <Col span={24}>
          <div className={`${styles.projectCards} ${jakartaSans.className}`}>
            <Row>
              <Col span={23}>
                <Title className={jakartaSans.className} level={4}>User Details</Title>
              </Col>
              <Col span={1}>
                <EditOutlined className={styles.editOptions} 
                  style={{ fontSize: 24, color: '#fff', cursor: 'pointer' }}
                  onClick={() => handleEditToggle(0)}
                />
              </Col>
            </Row>

            <Row gutter={16} style={{ display: 'flex', alignItems: 'baseline' }}>
              <Col span={8}>
                <Form.Item >
                  {isEditing[0] ? (
                    <Input
                      value={userDetails.name}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, name: e.target.value })
                      }
                    />
                  ) : (
                    <div className={styles.readOnly}>{userDetails.name}</div>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item >
                  {isEditing[0] ? (
                    <Input
                      value={userDetails.email}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, email: e.target.value })
                      }
                    />
                  ) : (
                    <div className={styles.readOnly}>{userDetails.email}</div>
                  )}
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item >
                  {isEditing[0] ? (
                    <Input
                      value={userDetails.designation}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          designation: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <div className={styles.readOnly}>
                      {userDetails.designation}
                    </div>
                  )}
                </Form.Item>
              </Col>
              {isEditing[0] && (
            <Col span={1} style={{ display: 'flex', justifyContent: 'center' }}>
              <Popconfirm
                title="Are you sure you want to delete this user?"
                // onConfirm={() => handleDelete(index)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined
                  style={{
                    fontSize: 20,
                    color: '#f44336',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                />
              </Popconfirm>
            </Col>
          )}
            </Row>
            {isEditing[0] && (
              <Row justify="end" style={{ marginTop: 20 }}>
        <Button type="primary"
         
          icon={<PlusOutlined />}
          onClick={handleAddUser}
          block
          
        >
          Add User
        </Button>
        </Row>
      )}
           </div>
        </Col>
        
        <Col span={24}>
          <div className={`${styles.projectCards} ${jakartaSans.className}`}>
            <Row>
              <Col span={23}>
                <Title className={jakartaSans.className} level={4}>Additional Requirements</Title>
              </Col>
              <Col span={1}>
                <EditOutlined className={styles.editOptions} 
                  style={{ fontSize: 24, color: '#fff', cursor: 'pointer' }}
                  onClick={() => handleEditToggle(1)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Maximum RDP Sessions">
                  {isEditing[1] ? (
                    <Select
                      value={requirement}
                      onChange={(value) => setRequirement(value)}
                      style={{ width: '100%' }}
                    >
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                    </Select>
                  ) : (
                    <div className={styles.readOnly}>{requirement}</div>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UsersConfiguration;
