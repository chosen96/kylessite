import  React, { Component } from  'react';
import { Route, Link } from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Switch, Dropdown} from 'antd';
import 'antd/dist/antd.css';
import {useTransition, animated} from 'react-spring';

import  LeanContent  from  './LeanContent';
import  NavBar  from  './NavBar';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

import { Helmet } from 'react-helmet'
const { Header, Content, Footer, Sider }  = Layout;

class  About  extends  Component {

  constructor(props) {
      super(props);
      this.state  = {
        hover: false,
        width: window.innerWidth,
        aboutMenu: false,
      }
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
  }

  componentDidMount() {
    document.title    = "Lean | About";
    window.addEventListener('resize', this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleAboutMenu() {
    console.log(this.state.aboutMenu);
    this.setState( prevState => ({
      aboutMenu: !prevState.aboutMenu
    }))
  }

  showAboutMenu(event) {
    if(event === true){
      return {paddingBottom:'25px', marginLeft:'-10px'}
    } else {
      return {display:'none'}
    }
  }

  onHover(e){
    this.setState({ hover: e.target.name });
  }

  offHover(){
    this.setState({ hover: false });
  }

  setHoverEffect(tab){
    let aboutSubheader = {
      textAlign: "left",
      alignSelf: "left",
      fontSize:'1.0rem',
      fontStyle:'bold',
      marginLeft: '0.75rem',
      padding: '5.25rem',
      letterSpacing: '2px',
      fontSize:'22px',
      lineHeight:'1.25rem'
    }
  }

  setNoHover(){
    return {
      textAlign: "left",
      alignSelf: "left",
      color: 'rgba(26,26,26,.4)',
      fontSize:'1.0rem',
      fontStyle:'bold',
      fontWeight:'700',
      marginLeft: '0.75rem',
      letterSpacing: '2px',
      fontSize:'14px',
      fontFamily:'sans-serif',
      fontWeight:'600',
      fontStyle:'normal',
      lineHeight:'1.25rem'
    }
  }

  setHover(){
    return {
      textAlign: "left",
      alignSelf: "left",
      color: 'black',
      fontSize:'1.0rem',
      fontStyle:'bold',
      fontWeight:'700',
      marginLeft: '0.75rem',
      letterSpacing: '2px',
      fontSize:'14px',
      fontFamily:'sans-serif',
      fontWeight:'600',
      fontStyle:'normal',
    }
  }

  render() {

    const leftImg = {
      zIndex: 0,
      resizeMode:'cover',
      position: 'absolute',
      width:'50%',
      height:this.state.width/3,
      backgroundColor: 'rgba(0,0,0,.6)',
      float: 'left',
      marginRight:'50%'
    }

    const rightImg = {
      zIndex: 0,
      resizeMode:'cover',
      position: 'absolute',
      width:'50%',
      height:this.state.width/3,
      backgroundColor: 'rgba(0,0,0,.6)',
      float: 'right',
      marginLeft:'50%'
    }

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
      color:'blue',
      paddingTop: '1rem',
      paddingBottom:'0.5rem',
    }

    var storySubheader    = this.setHover();
    var approachSubheader = this.setNoHover();
    var valueSubheader    = this.setNoHover();
    var eventSubheader    = this.setNoHover();
    if (this.state.hover === 'approach'){
      approachSubheader   = this.setHover();
    } else if (this.state.hover === 'value'){
      valueSubheader      = this.setHover();
    } else if (this.state.hover === 'event'){
      eventSubheader      = this.setHover();
    }

    var isMobile;
    var screenWidth = this.state.width;
    if (screenWidth <= 600){
      isMobile = true;
    } else {
      isMobile = false;
    }

    if (!isMobile){

      const contentHeader = {
        textAlign: "left",
        alignSelf: "left",
        color:'blue',
        fontSize:'1.5rem',
        fontStyle:'bold',
        marginLeft: '0.75rem',
        marginBottom: '0.5rem'
      }

      const ourStory = {
        zIndex: 1,
        textAlign: "center",
        alignSelf: "center",
        color:'white',
        fontSize:'5rem',
        width:'100%',
        marginTop:'10%',
        fontStyle:'bold',
      }

      var leftWrapper;
      var rightWrapper;
      if (screenWidth > 1020){
        leftWrapper = {
          marginLeft: (screenWidth/2)-510,
          marginRight: '5%',
        };
        rightWrapper = {
          width: '700px',
          marginRight: '32px',
        };

      } else {
        leftWrapper = {
          marginLeft: '5%',
          marginRight: '0%',
        }
        rightWrapper = {
          width: 'auto',
          marginRight: '0%',
        };

      }

      console.log("WIDTH: ", this.state.width);

    return (
      <React.Fragment>
        <div style={{width:'100%', height:this.state.width/3}}>
          <img src="/kyle.jpg" style={leftImg}/>
          <img src="/eli.jpg" style={rightImg}/>
            <Slide left>
              <NavBar navColor={'white'} style={{backgroundColor:'black'}}/>
            </ Slide>

          <span style={{display:'flex', width:'100%', color:'black', backgroundColor:'#ffffff'}}>
            <Fade>
              <h1 style={ourStory}> OUR STORY</h1>
            </ Fade>
          </span>
        </div>
        <div style={{backgroundColor:'#ffffff', zIndex:'2', marginTop:'72px', marginLeft: leftWrapper.marginLeft}}>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} >
              <Fade top>
                <Link style={contentHeader} to="/about"> About</Link>
                < br />
              </ Fade>
              <Fade bottom>
                <Link style={storySubheader}
                      name={'story'}
                      to="/about"> OUR STORY </Link>
                < br />
                <Link style={approachSubheader}
                      name={'approach'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
                      to="/approach"> LEAN APPROACH</Link>
                < br />
                <Link style={valueSubheader}
                      name={'value'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
                      to="/principles"> LEAN VALUES</Link>
                < br />
                <Link style={eventSubheader}
                      name={'event'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}to="/events"> EVENTS</Link>
              </ Fade>
            </Col>
            <Col xs={{ span: 16, offset: 1 }} lg={{ span: 16, offset: 1}}>
            <div style={{width:rightWrapper.width, marginRight:rightWrapper.marginRight}}>
            <h2 style={{fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>
              Rooted in Raleigh
            </h2>
            <h2 style={headingText}> ESTABLISHED IN 2019 </h2>
            <p style={contentText}>
              We are not a group, social movement, or track club. We are a <strong>community </strong>
              that supports and encourages each other in pursuit of achieving goals
              defined by our members using the Lean Approach.
            </p>
            <p style={contentText}>
              One of our many community goals is to have athletes establish a firm vision
              of the goals that are important to them and achieve those athletic goals
              with the Lean Approach. </p>
            <h2 style={headingText}>  OUR MISSION: </h2>
            <p style={contentText}>
             Winning local races and inspiring local athletes to achieve their best goals </p>
            <ul>
              <li> Community Races </li>
              <li> Road Races </li>
              <li> Track Races </li>
              <li> State Championships </li>
              <li> USA Championships </li>
              <li> Olympic Trials </li>
            </ul>
            <h2 style={headingText}>   OUR VISION: </h2>
            <p style={contentText}> Vision Statement </p>
            </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
      )
    } else {

      const contentHeader = {
        textAlign: "left",
        alignSelf: "left",
        color:'blue',
        fontSize:'1.5rem',
        fontStyle:'bold',
        marginLeft: '0.75rem',
        marginBottom: '0.5rem'
      }

      const ourStory = {
        zIndex: 1,
        textAlign: "center",
        alignSelf: "center",
        color:'white',
        fontSize:'32px',
        width:'100%',
        fontStyle:'bold',
      }

      const dropdownStyle = {
        zIndex:1,
        float:'right',
        backgroundColor: 'transparent',
        color:'#00008b',
        position:'absolute',
        fontSize:'0.9rem',
        marginRight:'1rem',
        position:'right'
      }

      return (
        <React.Fragment>
          <div style={{width:'100%', height:'auto', display:'block'}}>
            <img src="/kyle.jpg" style={leftImg}/>
            <img src="/eli.jpg" style={rightImg}/>
              <Slide left>
                <NavBar navColor={'white'} style={{backgroundColor:'black'}}/>
              </ Slide>

            <span style={{display:'flex', width:'100%', marginTop:'100%', backgroundColor:'#ffffff'}}>
              <Fade>
                <h1 style={ourStory}> OUR STORY </h1>
              </ Fade>
            </span>
          </div>
          <div style={{marginLeft:'16px', marginRight:'16px', paddingTop:'80px'}}>
            <div style={this.showAboutMenu(!this.state.aboutMenu)}>
            <Fade>
              <Button ghost style={{float:'right', position:'block', zIndex:'1', width:'75px', height:'60px'}} onClick={() => {this.toggleAboutMenu()}} >
                <Icon type="plus" style={dropdownStyle}/>
              </Button>
            </Fade>
            </div>
            <div style={this.showAboutMenu(this.state.aboutMenu)}>
              <Fade>
                <Button ghost style={{float:'right', position:'block', zIndex:'2', width:'75px', height:'60px'}} onClick={() => {this.toggleAboutMenu()}} >
                  <Icon type="close" style={dropdownStyle}/>
                </Button>

                <Link style={approachSubheader}
                      name={'approach'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
                      to="/approach"> LEAN APPROACH
                </Link>
                < br />
                <Link style={valueSubheader}
                      name={'value'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
                      to="/principles"> LEAN VALUES
                </Link>
                < br />
                <Link style={eventSubheader}
                      name={'event'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
                      to="/events"> EVENTS
                </Link>
              </ Fade>
            </div>
            <h2 style={{fontFamily:'adobe-garamond-pro', fontWeight: '400', fontSize:'32px', lineHeight:'1.2rem'}}>
              Rooted in Raleigh
            </h2>
            <h2 style={headingText}> ESTABLISHED IN 2019 </h2>
            <p style={contentText}>
              We are not a group, social movement, or track club. We are a <strong>community </strong>
              that supports and encourages each other in pursuit of achieving goals
              defined by our members using the Lean Approach.
            </p>
            <p style={contentText}>
              One of our many community goals is to have athletes establish a firm vision
              of the goals that are important to them and achieve those athletic goals
              with the Lean Approach. </p>
            <h2 style={headingText}>  OUR MISSION: </h2>
            <p style={contentText}>
             Winning local races and inspiring local athletes to achieve their best goals </p>
            <ul>
              <li> Community Races </li>
              <li> Road Races </li>
              <li> Track Races </li>
              <li> State Championships </li>
              <li> USA Championships </li>
              <li> Olympic Trials </li>
            </ul>
            <h2 style={headingText}>   OUR VISION: </h2>
            <p style={contentText}> Vision Statement </p>
          </div>
        </ React.Fragment>

      );
    }
  }
}

export  default  About;
