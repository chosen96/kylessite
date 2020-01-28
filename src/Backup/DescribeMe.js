import  React, { Component } from  'react';
import { BrowserRouter as Router, Route, Link} from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Switch, Dropdown} from 'antd';

import  Fade from 'react-reveal/Fade';

class  DescribeMe  extends  Component {

render() {

  let color1 = '#b09a40';
  let color2 = '#ffffff';


  return(
    <React.Fragment>
    <div style={{background:`linear-gradient(${color1}, ${color2})`, zIndex:'2', paddingTop:'72px', height:'300px'}}>
      <Row gutter={[16, 16]} style={{height:'150px'}}>
        <Col xs={{ span: 8, offset: 1 }} lg={{ span: 8, offset: 1 }}>
          <Fade top>
            <p style={{float:'right', fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>Creative Director </p>
          </ Fade>
        </Col>
        <Col xs={{ span: 8, offset: 1 }} lg={{ span: 8, offset: 1}}>
        <Fade top>
          <p style={{float:'right', fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>Collegiate Athlete </p>
        </ Fade>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{height:'150px'}}>
        <Col xs={{ span: 8, offset: 1 }} lg={{ span: 8, offset: 1 }} >
          <Fade top>
            <p style={{float:'right', fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>Software Engineer</p>
          </ Fade>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 1}}>
        <Fade top>
          <p style={{float:'right', fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>Relenteless Entreprenuer</p>
        </ Fade>
        </Col>
      </Row>
    </div>

    <div>
      <h2> Hey, I'm Kyle. A software enbgineer based in Raligh, NC. Creating neat apps for user experiences. </h2>
    </div>
    </React.Fragment>
  )
  }
}

export  default  DescribeMe;
