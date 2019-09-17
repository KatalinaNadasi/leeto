import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import '../index.css';
import player from './player.svg';
import { Icon, Typography, Row, Col, Button, Card } from 'antd';
const { Title } = Typography;
const { Meta } = Card;

const Wrapper = styled.div`
  padding: 4rem 6rem;
`;

const Before = styled.div`
  float: left;
  position: relative;
`;

const Clear = styled.div`
  clear: both;
`;

const GreyText = styled.span`
  margin: 1rem 2rem;
  color: grey;
`;

const MainTitle = styled(Title)`
  float: left;
`;

const Subvention = () => {
  return (
    <Wrapper>
      <Before>
        <Icon type="left" style={{ fontSize: '1.3rem', color: 'grey', position: 'absolute', top: '-1px' }} />
        <GreyText>Avantages</GreyText>
      </Before>
      <Clear />
      <Row style={{ margin: '1rem 0' }}>
        <Col span={8}>
          <MainTitle>
            <h2>Subvention Sport</h2>
          </MainTitle>
        </Col>
        <Col span={8} offset={8}>
          <Button type="primary" style={{ float: 'right' }}>
            <Icon type="edit"/>
            Editer
          </Button>
        </Col>
      </Row>
      <Card style={{ width: '100%', borderRadius: '12px' }} >
        <img src={player} alt="Player" style={{ float: 'left' }}/>
          <Meta
            style={{ float: 'left', margin: '0 1rem' }}
            title="Card title"
          />
      </Card>
    </Wrapper>
  );
}

export default Subvention;
