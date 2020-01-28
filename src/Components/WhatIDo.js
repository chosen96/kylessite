import  React, { Component } from  'react';
import { BrowserRouter as Router, Route, Link} from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Switch, Dropdown} from 'antd';
import 'antd/dist/antd.css';

import  Fade from 'react-reveal/Fade';

const { Header, Content, Footer, Sider }  = Layout;

class  WhatIDo  extends  Component {

  constructor(props) {
    super(props);
    this.state  = {
    }
  }

  render() {

      const contentText = {
        fontFamily:'adobe-garamond-pro',
        fontSize:'18px',
        fontWeight:'500',
        lineHeight:'1.6em',
        color:'rgba(26, 26, 26, .7)'
      }

      const headingText = {
        fontWeight: '400',
        fontSize:'22px',
        letterSpacing:'2px',
        lineHeight:'1.2em',
        textRendering:'optimizeLegibility',
        color:'#b09a40',
        paddingTop: '1rem',
        paddingBottom:'0.5rem',
      }

      const contentHeader = {
        textAlign: "left",
        alignSelf: "left",
        color:'blue',
        fontSize:'1.5rem',
        fontStyle:'bold',
        marginLeft: '0.75rem',
        marginBottom: '0.5rem'
      }

      var leftWrapper;
      var rightWrapper;

      leftWrapper = {
        marginLeft: '5%',
        marginRight: '0%',
      }
      rightWrapper = {
        width: 'auto',
        marginRight: '0%',
      };

    return (
      <React.Fragment>

        <Fade bottom>
        <div style={{backgroundColor:'#ffffff', zIndex:'2', marginTop:'72px', marginLeft: leftWrapper.marginLeft}}>
          <h2 style={{fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>
            Rooted in Raleigh
          </h2>
          <h2 style={headingText}> ESTABLISHED IN 2019 </h2>
          <p style={contentText}>
             <strong> Creative. Collaborative. Curious. Compassionate. </strong>
          </p>
          <p style={contentText}>
            These are the words I strive to push for when working with a team.
          </p>
        </div>
        </Fade>

        <Fade bottom>
        <div style={{backgroundColor:'#ffffff', zIndex:'2', marginTop:'72px', marginLeft: leftWrapper.marginLeft}}>
          <h2 style={{fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>
            Get into my brain
          </h2>
          <h2 style={headingText}> FIRST YEAR IN THE REAL WORLD </h2>
          <p style={contentText}>
            The first six months out of college felt like a lifetime. I accomplished a lot, but made many mistakes that I want to
            help you avoid. Here are the life-changing lessons that I learned after adjusting to the professional world, from the
            craziest, most rewording period of my life so far.
          </p>
          <p style={contentText}>
          </p>
        </div>
        </Fade>

        <Fade bottom>
        <div style={{backgroundColor:'#ffffff', zIndex:'2', marginTop:'72px', marginLeft: leftWrapper.marginLeft}}>
          <h2 style={{fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>
            Here's what I've done so far
          </h2>
          <h2 style={headingText}> RUNNING TEAM: LEAN </h2>
          <p style={contentText}>
            Lean Description
          </p>

          <h2 style={headingText}> COLLEGE STARTUP: VIVA </h2>
          <p style={contentText}>
            My first experience with a startup
          </p>

          <h2 style={headingText}> D1 TRACK & CROSS COUNTRY </h2>
          <p style={contentText}>
            Grind and relentless pursuit
          </p>
        </div>
        </Fade>
      </React.Fragment>
      )
    }
  }

export  default  WhatIDo;
