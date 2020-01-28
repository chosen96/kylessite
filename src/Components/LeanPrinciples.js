import  React, { Component } from  'react';
import { Route, Link } from  'react-router-dom';
import {Row, Col, Layout, Menu, Breadcrumb, Icon, Switch} from 'antd';
import 'antd/dist/antd.css';
import {useTransition, animated} from 'react-spring';

import  LeanContent  from  './LeanContent';
import  NavBar  from  './NavBar';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';


const { Header, Content, Footer, Sider }  = Layout;

class  About  extends  Component {

  constructor(props) {
      super(props);
      this.state  = {
        hover: false
      }
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
  }


  componentDidMount() {
    document.title    = "Lean Principles";
  };

  onHover(e){
    console.log(e.target.name);
    this.setState({ hover: e.target.name });
  }

  offHover(){
    this.setState({ hover: false });
  }

  setHoverEffect(tab){
    let aboutSubheader = {
      textAlign: "left",
      alignSelf: "left",
      color:'grey',
      fontSize:'1.0rem',
      fontStyle:'bold',
      marginLeft: '0.75rem',
      padding: '5.25rem',
      letterSpacing: '0.175rem',
    }
  }

  setNoHover(){
    return {
      textAlign: "left",
      alignSelf: "left",
      color: '#bfbfbf',
      fontSize:'1.0rem',
      fontStyle:'bold',
      fontWeight:'700',
      marginLeft: '0.75rem',
      letterSpacing: '0.175rem',
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
      letterSpacing: '0.175rem',
    }
  }

  noStoryHover(){
    return {
      zIndex: 1,
      textAlign: "center",
      alignSelf: "center",
      color:'white',
      fontSize:'5rem',
      width:'100%',
      marginTop:'20%',
      fontStyle:'bold',
    }
  }

  setStoryHover(){
    return {
      zIndex: 1,
      textAlign: "center",
      alignSelf: "center",
      color:'blue',
      fontSize:'10rem',
      width:'100%',
      marginTop:'20%',
      fontStyle:'bold',
    }
  }

  render() {

    const leftImg = {
      zIndex: 0,
      resizeMode:'cover',
      position: 'absolute',
      width:'50%',
      height:'auto',
      backgroundColor: 'rgba(0,0,0,.6)',
      float: 'left',
      marginRight:'50%'
    }
    const rightImg = {
      zIndex: 0,
      resizeMode:'cover',
      position: 'absolute',
      width:'50%',
      height:'auto',
      backgroundColor: 'rgba(0,0,0,.6)',
      float: 'right',
      marginLeft:'50%'
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

    var ourStory          = this.noStoryHover();
    var storySubheader    = this.setNoHover();
    var approachSubheader = this.setNoHover();
    var valueSubheader    = this.setHover();
    var eventSubheader    = this.setNoHover();
    if (this.state.hover === 'story') {
      storySubheader      = this.setHover();
    } else if (this.state.hover === 'approach'){
      approachSubheader   = this.setHover();
    } else if (this.state.hover === 'event'){
      eventSubheader      = this.setHover();
    } else if (this.state.hover === 'ourStory'){
      ourStory            = this.setStoryHover();
    }


    return (
      <React.Fragment>
        <div style={{width:'100%', height:'auto'}}>
          <img src="/kyle.jpg" style={leftImg}/>
          <img src="/eli.jpg" style={rightImg}/>
            <Slide left>
              <NavBar navColor={'white'} style={{backgroundColor:'black'}}/>
            </ Slide>

          <span style={{display:'flex', width:'100%', marginTop:'100%', backgroundColor:'#ffffff'}}>
            <Fade>
              <h1 style={ourStory}> LEAN PRINCIPLES </h1>
            </ Fade>
          </span>
        </div>
        <div style={{backgroundColor:'#ffffff', zIndex:'2'}}>
          <Row gutter={[16, 16]} style={{marginTop:'8%', marginLeft:'10%'}}>
            <Col xs={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} >
              <Fade top>
                <Link style={contentHeader} to="/about"> About</Link>
                < br />
              </ Fade>
              <Fade bottom>
                <Link style={storySubheader}
                      name={'story'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}
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
                      to="/principles"> LEAN VALUES</Link>
                < br />
                <Link style={eventSubheader}
                      name={'event'}
                      onMouseEnter={this.onHover}
                      onMouseLeave={this.offHover}to="/events"> EVENTS</Link>
              </ Fade>
            </Col>
            <Col xs={{ span: 12, offset: 1 }} lg={{ span: 12, offset: 1 }}>
              <p> We believe that we are at our best when we are pursuing our ideal selves. </p>
              <p> We believe that in order to pursue our ideal selves, we must know our current selves.</p>
              <p> We believe that in order to know our current selves, we must be self-aware.</p>
              <p> We recognize that self-awareness takes time and vulnerability.</p>
              < br />

              <p> We believe that in order to pursue our ideal self, we must have a vision.</p>
              <p> We believe that in order to have a vision, we must know what we desire.</p>
              <p> We believe that knowing our desires requires self-awareness.</p>
              <p> We recognize that self-awareness takes time and vulnerability.</p>
              < br />

              <p> We believe that individuals are at their best when pursuing their vision of ideal self.</p>
              <p> We believe that communities large and small work the same way</p>
              < br />

              <p> We believe that the quality of our values are determined by the source of our beliefs</p>
              <p> We believe that in order to strengthen our beliefs, we must know our self-worth</p>
              <p> We believe that knowing our self-worth requires self-acceptance</p>
              <p> We recognize that self-acceptance takes time and vulnerability.</p>
            </Col>
          </Row>
        </div>
      </React.Fragment>
      )
    }
  }

export  default  About;
