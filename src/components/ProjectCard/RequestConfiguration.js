'use client';
import React, { useState } from 'react';
import { Row, Col, Radio, Pagination, Card } from 'antd';
import Title from 'antd/es/typography/Title';
import styles from '../../app/component.module.scss'; 
import { Plus_Jakarta_Sans } from "next/font/google"; 
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const mockData = {
    pending: [
      { title: 'Request Download', description: 'Request for downloading the research paper created in the project research on Diabetes.' },
      { title: 'Request Import', description: 'Request for Importing some content in the project research on Diabetes.' },
      { title: 'Request Import', description: 'Request for Importing some content in the project research on Diabetes.' },
      { title: 'Request Import', description: 'Request for Importing some content in the project research on Diabetes.' },
      { title: 'Request Import', description: 'Request for Importing some content in the project research on Diabetes.' },
    ],
    declined: [],
    approved: [],
    all: [],
  };

const RequestConfiguration = () => {
    const [filter, setFilter] = useState('pending');
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const onChangeFilter = (e) => {
        setFilter(e.target.value);
        setPage(1);
      };
    
      const onChangePage = (page) => {
        setPage(page);
      };
    
      const data = mockData[filter] || [];
      const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);
  return (
   <>
 <Row className={jakartaSans.className}>
    <div className={styles.projectCards}>
      <Col span={24}>
      <Radio.Group
  className={styles.requestradioboxes}
  value={filter}
  onChange={onChangeFilter}
  style={{ marginBottom: 20 }}
>
  <Radio value="pending">Pending</Radio>
  <Radio value="declined">Declined</Radio>
  <Radio value="approved">Approved</Radio>
  <Radio value="all">All</Radio>
</Radio.Group>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '30px' }}>
          {paginatedData.map((item, index) => (
            <Card className={styles.requestConfigCards}
              key={index} >
              <h3 className={jakartaSans.className} >{item.title}</h3>
              <p className={jakartaSans.className} >{item.description}</p>
            </Card>
          ))}
        </div>

        {data.length > pageSize && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Pagination
              current={page}
              total={data.length}
              pageSize={pageSize}
              onChange={onChangePage}
              showSizeChanger={false}
              style={{ background: '#000' }}
              itemRender={(page, type, originalElement) => {
                if (type === 'page') {
                  return <span style={{ color: '#fff' }}>{page}</span>;
                }
                return originalElement;
              }}
            />
          </div>
        )}
      </Col>
      </div>
    </Row>
   </>
  )
}

export default RequestConfiguration