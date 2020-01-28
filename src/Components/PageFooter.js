import  React, { Component } from  'react';
import { BrowserRouter as Router, Switch, Route, Link} from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Dropdown} from 'antd';
import 'antd/dist/antd.css';
import { SocialIcon } from 'react-social-icons';


const { Header, Content, Footer, Sider }  = Layout;

class  PageFooter  extends  Component {

  constructor(props) {
      super(props);
      console.log(props.width);
      this.state  = {
        width: window.innerWidth,
      }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {

    const preFooter = {
      width:'100%',
      backgroundColor:'#333',
      height:'120px',
      zIndex:'2',
      marginTop:'-20px'
    };

    const footer  = {
      width:'100%',
      backgroundColor:'#222',
      height:'300px',
    };

    const outerIconStyle = {
      fontSize:'40px',
      paddingTop:'30px',
      paddingBottom:'30px',
      color:'white',
    }

    const middleIconStyle = {
      fontSize:'40px',
      paddingTop:'30px',
      paddingBottom:'30px',
      paddingLeft:'50px',
      paddingRight:'50px',
      color:'white',
    }

    const middleTextFont= {
      fontSize:'13px',
      letterSpacing:'2px',
      fontWeight:'500',
      color:'white',
      fontFamily:'sans-serif',
      paddingLeft:'40px',
      paddingRight:'40px',
    }

    if (this.state.width >= 600){

      const textFont= {
        fontSize:'13px',
        letterSpacing:'2px',
        fontWeight:'500',
        color:'white',
        fontFamily:'sans-serif',
      }

      return (
        <React.Fragment>
          <div style={preFooter}>
            <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Icon type="mail"       style={outerIconStyle}/>
            <Icon type="instagram"  style={middleIconStyle}/>
            <Icon type="message"    style={outerIconStyle}/>
            </div>
          </div>

          <div style={footer}>
            <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'70px'}}>
            <Link to="/about">
              <p style={textFont}>
                MY MISSION
              </p>
            </Link>
            <Link to="/team">
              <p style={middleTextFont}>
                LEAN APPROACH
              </p>
            </Link>
            <Link to="/approach">
              <p style={textFont}>
                ASK ME ANYTHING
              </p>
            </Link>
            </div>
          <p style={{textAlign:'center', fontSize:'13px',
                    letterSpacing:'2px', fontWeight:'400',
                    color:'white', fontFamily:'sans-serif', paddingTop:'30px'}}>
          KJCHRIS3@NCSU.EDU
          </p>

          <p style={{textAlign:'center', fontSize:'18px',
                    fontWeight:'550', lineHeight:'1.6rem',
                    color:'rgba(255,255,255,.4)', fontFamily:'adobe-garamond-pro', paddingTop:'30px'}}>
          Raleigh, North Carolina
          </p>

          </div>
        </React.Fragment>
      )
    } else {

      const textFont= {
        fontSize:'12px',
        letterSpacing:'2px',
        fontWeight:'500',
        color:'white',
        fontFamily:'sans-serif',
        justifyContent:'center',
        display:'flex'
      }

      return (
        <React.Fragment>
          <div style={preFooter}>
            <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Icon type="mail"       style={outerIconStyle}/>
            <React.Fragment>
              <Icon type="instagram"  style={middleIconStyle} />
            </React.Fragment >
            <Icon type="message"    style={outerIconStyle}/>
            </div>
          </div>

          <div style={footer}>
            <div style={{width:'100%', justifyContent:'center', alignItems:'center', paddingTop:'30px'}}>
            <p >
              <Link style={textFont}>
              MY MISSION
              </Link>
              < br/>
              <Link style={textFont}>
              LEAN APPROACH
              </Link >
              < br/>
              <Link style={textFont}>
              ASK ME ANYTHING
              </Link>
            </p>
            </div>
          <p style={{textAlign:'center', fontSize:'12px',
                    letterSpacing:'2px', fontWeight:'400',
                    color:'white', fontFamily:'sans-serif', paddingTop:'30px'}}>
          KJCHRIS3@NCSU.EDU
          </p>

          <p style={{textAlign:'center', fontSize:'18px',
                    fontWeight:'550', lineHeight:'1.6rem',
                    color:'rgba(255,255,255,.4)', fontFamily:'adobe-garamond-pro', paddingTop:'30px'}}>
          Raleigh, North Carolina
          </p>

          </div>

        </React.Fragment>
      )
    }
  }
}

export  default  PageFooter;
