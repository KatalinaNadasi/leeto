import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import '../index.css';
import player from './player.svg';
import { Icon, Row, Col, Button, Card } from 'antd';

const Wrapper = styled.div`
  padding: 4rem 6rem;
`;

const Left = styled.div`
  float: left;
`;

const Clear = styled.div`
  clear: both;
`;

const GreyText = styled.span`
  color: '#8C8C8C';
  margin: 0 1rem 0 0.3rem;
`;

const BlackText = styled.p`
  color: '#00';
  margin-top: 1rem;
  font-size: 14px;
  line-height: 22px;
  text-align: initial;
`;

const IconAndText = (props) => {
  return (
    <React.Fragment>
      <Icon type={props.type} color={props.color} />
      <GreyText>{props.text}</GreyText>
    </React.Fragment>
  )
}

const TwoCols = (props) => {
  return (
    <Row style={{ margin: '1rem 0' }}>
      <Col span={8}>
        <Left>
          <h1>Subvention Sport</h1>
        </Left>
      </Col>
      <Col span={8} offset={8}>
        <Button type="primary" style={{ float: 'right' }}>
          <IconAndText type="edit" text="Editer" />
        </Button>
      </Col>
    </Row>
  )
}

const CardContent = () => {
  return (
    <Card style={{ width: '100%', borderRadius: '12px' }} >
      <div style={{ float: 'left' }}>
        <img src={player} alt="Player" />
      </div>
      <div>
        <Left style={{ marginLeft: '1rem'}}>
          <span>
            <Button style={{ color: '#EB2F96', border: '1px solid #EB2F96', marginRight: '1rem' }}>Subvention</Button>
          </span>
          <span>
            <IconAndText type="calendar" text="Inscriptions : 01/01/2019 - 27/12/2019" />
          </span>
          <span>
            <IconAndText type="clock-circle" text="165 jours restants avant la fermeture" />
          </span>
        </Left>
        <Left style={{ marginLeft: '1rem'}}>
          <Col span={11}>
          <BlackText>
            Remboursement des activités sportives des salariés à hauteur de 150€
            sur présentation de factures nominatives de licence sportives,
            d'adhésion à un club de sport ou d'achat de billetterie pour des événements sportifs.
          </BlackText>
        </Col>
        </Left>
      </div>
    </Card>
  )
}


const Subvention = () => {
  return (
    <Wrapper>
      <Left style={{ color: '#8C8C8C' }}>
        <IconAndText type="left" text="Avantages" />
      </Left>
      <Clear />
      <TwoCols />
      <CardContent />
    </Wrapper>
  );
}

export default Subvention;
