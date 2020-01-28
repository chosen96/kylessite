import  React, { Component } from  'react';
import { BrowserRouter as Router, Route} from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Switch, Dropdown} from 'antd';
import 'antd/dist/antd.css';
import Typist from 'react-typist';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import MouseTrail from './MouseTrail';
import  DescribeMe  from  './DescribeMe';
import  WhatIDo  from  './WhatIDo';
import  PageFooter from './PageFooter';
import  NavBar  from  './NavBar';
import  Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { CSSTransition } from "react-transition-group";
import './Landing.css';

const { Header, Content, Footer, Sider }  = Layout;

class  Landing  extends  Component {

  constructor(props) {
    super(props);
    this.state  = {
      resizeNotifier: () => {},
      width:          window.innerWidth,
      lastScrollY:    window.scrollY,
      xMain:         0,
      yMain:         0,
      xTrailing:     0,
      yTrailing:     0,

      introBackground: true,
      startText:      false,
      endText:        false,
      startAnimation: true,
      showSite:       false,
      showSite:       false,
      loadMessage: "Time for a run",
    }
  }

  componentDidMount() {
    document.title    = "I'm Kyle Christ";
    document.themeColor =  "#b09a40";
    document.cursor = 'crosshair'
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
    this.resize();
    const chooseMessage = ["Time for a run", "Your patience is appreciated", "Loading the pixels on your screen"];
    const chooseNumber = Math.floor(Math.random(2)*3);
    this.setState({loadMessage:    chooseMessage[chooseNumber]});
  }

  resize = () => {
      this.setState({width:    window.innerWidth});
  }

  handleScroll = () => {
    this.setState({lastScrollY:    window.scrollY});
  }

  handleMouseMove = (e) => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e;

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState({
      xMain: clientX,
      yMain: clientY,
    }, () => {
      // this callback is invoked after the first setState finishes
      //
      // here we schedule saving the trailing coordinates in state 100ms
      // after the main coordinates have been set to simulate the trailing
      setTimeout(() => {
        this.setState({
          xTrailing: clientX,
          yTrailing: clientY,
        })
      }, 100);
    })
  }

  _onMouseMove = (e) => {
       const width = this.refs.titleContainer.clientWidth;
       const height = this.refs.titleContainer.clientHeight;
       const oX = (e.nativeEvent.offsetX/width) * 100;
       const oY = (e.nativeEvent.offsetY/height) * 100;
       console.log(Math.floor(oX), Math.floor(oY));
       this.setState({
           xMain: oX,
           yMain: oY
       });
   }

  render() {

    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;

    var loadingText;
    if (this.state.width > 1200){
      loadingText = {
        fontFamily: 'sans-serif',
        fontWeight: '400',
        fontSize: '2.5vw',
        color: '#fff',
        lineHeight: '2.25vw'
      }
    } else if (this.state.width > 700){
      loadingText = {
        fontFamily: 'sans-serif',
        fontWeight: '400',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '24px'
      }
      } else {
        loadingText = {
          fontFamily: 'sans-serif',
          fontWeight: '400',
          fontSize: '18px',
          color: '#fff',
          lineHeight: '24px'
      }
    }

    return(
      <React.Fragment>
      <div ref="titleContainer" onMouseMove={this._onMouseMove} onMouseOut={this._onMouseOut}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={5000}
          classNames="box--loader"
        >
          <div class="box--loader">
            <div class="text-loading-wrap">
              <div class="text-loading">
                <h4 style={loadingText}> {this.state.loadMessage} </h4>
              </div>
            </div>
          </div>
        </CSSTransition>
        <DescribeMe/>
        <PageFooter />
      </div>
      </React.Fragment>
    )
  }
}

export  default  Landing;
