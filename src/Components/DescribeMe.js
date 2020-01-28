import  React, { Component } from  'react';
import { BrowserRouter as Router, Route} from  'react-router-dom';
import {Button, Row, Col, Layout, Menu, Breadcrumb, Icon, Switch, Dropdown} from 'antd';
import Modal from 'react-awesome-modal';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Ticker from 'react-ticker';
import './DescribeMe.css';

import  Fade from 'react-reveal/Fade';

class  DescribeMe  extends  Component {

  constructor(props) {
    super(props);
    this.state  = {
      width:          window.innerWidth,
      lastScrollY:    window.scrollY,
      letsTalk: false,

      about:false,

      showMe:false,
      insta:false,
      github:false,
      linkedIn:false,
      bookGrid:'false'
    }
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
  }

  componentDidMount() {
    document.themeColor =  "#b09a40";
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
    this.resize();
    this.handleScroll();
  }

  handleScroll = () => {
    console.log("HEIGHT: " + this.state.lastScrollY)
    this.setState({lastScrollY:    window.scrollY});
  }

  resize = () => {
      this.setState({width:    window.innerWidth});
  }

  onHover = (e, name) => {
    console.log(name)
    this.setState({ [name]: true });
  }

  offHover = (e, name) => {
    console.log(name)
    this.setState({ [name]: false });
  }

  doShow(e){
    if(e === true){
      return {}
    } else {
      return {display:'none'}
    }
  }

  toggleBooks() {
    this.setState( prevState => ({
      bookGrid: !prevState.bookGrid
    }))
  }

  openContact = () => {
    console.log("TRUE");
    console.log(this.state.letsTalk);
    this.setState({
        letsTalk : true,
    })
  }

  optOut = () => {
    console.log("FALSE");
    this.setState({
        letsTalk : false,
    })
  }

render() {

  let color1 = '#b09a40';
  let color2 = '#ffffff';

  if (this.state.width < 700){

    var setbkgColor;
    var setTextColor;
    var transition  = '0.3s ease-out';
    if (this.state.lastScrollY >600){
      setbkgColor   = 'black';
      setTextColor  = 'white';

    } else {
      setbkgColor   = 'white';
      setTextColor  = 'black';
    }

    let mainText = {
      zIndex:1,
      fontSize:'32px',
      lineHeight: '20px',
      letterSpacing: '1.5px',
      fontWeight:'300',
      fontFamily:'SuisseIntl-Light,Helvetica,sans-serif',
      color:setTextColor,
      width:'100%',
      position:'absolute',
      transition: transition,
    }

    let imgStyle = {
      zIndex:0,
      resizeMode:'cover',
      width:'70%',
      height:'auto',
      float: 'right',
      justifyContent:'right',
      position:'relative',
      marginTop:'25px'
    }

    let leftTraitText = {
      width:'60%',
      textAlign:'left',
      fontFamily:'adobe-garamond-pro',
      fontWeight: '400',
      fontSize:'18px',
      lineHeight:'1.4rem',
      paddingLeft:'40px',
    }

    let rightTraitText = {
      textAlign:'left',
      fontFamily:'adobe-garamond-pro',
      fontWeight: '400',
      fontSize:'18px',
      lineHeight:'1.4rem',
      paddingRight:'40px'
    }

    let landingContainer = {
      paddingLeft:'20px',
      paddingRight:'20px',
      display:'inline-block',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let letsTalk = {
      fontSize:'16px',
      float:'right',
      paddingTop:'30px',
      marginRight:'40px',
      color:setTextColor,
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let introContainer = {
      width:'100%',
      height:'auto',
      paddingTop:'20px',
      backgroundColor:setbkgColor,
      paddingLeft:'20px',
      paddingRight:'20px',
      display:'block',
      transition: transition,
    }

    let marqueeText = {
      height:'auto',
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'15px',
      lineHeight:'1.3rem',
      color:setTextColor,
      paddingTop:'40px',
      backgroundColor:setbkgColor,
      width:'60px',
      overflow:'hidden',
      transition: transition,
    }

    let stayInTouchText = {
      height:'auto',
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'15px',
      lineHeight:'1.3rem',
      color:setTextColor,
      paddingTop:'40px',
      backgroundColor:setbkgColor,
      width:'130px',
      overflow:'hidden',
      scrollAmount:"1",
      transition: transition,
    }

    let introText = {
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'15px',
      lineHeight:'1.3rem',
      color:setTextColor,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let secondIntroText = {
      fontFamily:'sans-serif',
      fontWeight: '300',
      fontSize:'14px',
      lineHeight:'1.3rem',
      color:'darkgrey',
      paddingBottom:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let connectContainer = {
      width:'100%',
      height:'auto',
      backgroundColor:setbkgColor,
      paddingLeft:'20px',
      paddingRight:'20px',
      paddingBottom:'60px',
      marginTop:'-20px',
      transition: transition,
    }

    let connectText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'16px',
      lineHeight:'1.3rem',
      color:setTextColor,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
    }

    let hiddenConnectText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'18px',
      lineHeight:'1.3rem',
      color:setTextColor,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
    }

    let hiddenText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'18px',
      lineHeight:'1.3rem',
      color:color1,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
    }

    let readContainer = {
      width:'100%',
      paddingBottom:'60px',
      color:setTextColor,
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let readText = {
      fontFamily:'sans-serif',
      fontWeight: '400',
      textAlign:'center',
      fontSize:'24px',
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


    return(
      <React.Fragment>
      <div style={{background:`linear-gradient(${color1}, ${color2})`, zIndex:'2', paddingTop:'40px', height:'200px'}}>

        <span style={{display:'flex'}}>
          <Fade top>
          <p style={leftTraitText}>Software <br />Engineer  </p>
          <p style={rightTraitText}>Relentless <br /> Entreprenuer</p>

          </Fade>
        </span>
        <span style={{display:'flex', paddingTop:'20px'}}>
          <Fade bottom>
          <p style={leftTraitText}>Collegiate <br /> Athlete </p>
          <p style={rightTraitText}>Creative <br /> Director</p>
          </Fade>
        </span>
      </div>

      <div style={landingContainer}>
        <Fade top>
        <p style={mainText}> Hey, <u>I'm Kyle.</u> A </p>
        <br /> <br />
        <p style={mainText}> software engineer </p>
        <br /> <br />
        <p style={mainText}> based in Raleigh,</p>
        <br /> <br />
        <p style={mainText}> NC. Crafting neat </p>
        <br /> <br />
        <p style={mainText}> apps for user </p>
        <br /> <br />
        <p style={mainText}> experiences. </p>

        <img src="/profile.jpg" style={imgStyle}/>
        </Fade>
        <p style={letsTalk} onClick={this.openContact}> <u>Lets Talk</u> </p>

      </div>

      <div style={introContainer}>
        <p style={marqueeText}>
          <marquee scrollAmount={3}>
          <u>INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; </u>
          </marquee>
        </p>
        <p style={introText}> I'm a 23 year old software engineer living in Raleigh, NC. currently
        working at <u> SAS</u>. I believe great design is the result of a
        deep process of understanding the problem you're trying to solve
        combined with a beautifully executed solution.
        </p>

        <p style={secondIntroText}> I'm passionate about using software to deliver
        extraordinary creative solutions for enthusiatic users. In my spare time
        you can find me running, weightlifting, or reading a good book.
        </p>
      </div>

      <div style={connectContainer}>
        <p style={stayInTouchText}>
          <marquee scrollAmount={3}>
          <u>STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; </u>
          </marquee>
        </p>
          <div style={this.doShow(!this.state.insta)}>
            <p style={connectText} onMouseEnter={((e) => this.onHover(e, "insta"))} onMouseLeave={((e) => this.offHover(e, "insta"))}> Instagram →</p>
          </div>
          <div style={this.doShow(this.state.insta)}>
            <a href="https://www.instagram.com/kylechristxc/" target="_blank">
              <span style={{display:'flex'}}>
                <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "insta"))} onMouseLeave={((e) => this.offHover(e, "insta"))}> <u>Instagram</u> →</p>
                <p style={hiddenText}> @kylechristxc </p>
              </span>
            </a>
          </div>

          <div style={this.doShow(!this.state.linkedIn)}>
            <p style={connectText} onMouseEnter={((e) => this.onHover(e, "linkedIn"))} onMouseLeave={((e) => this.offHover(e, "linkedIn"))}> LinkedIn → </p>
          </div>
          <div style={this.doShow(this.state.linkedIn)}>
            <a href="https://www.linkedin.com/in/kyle-christ-912aabba/" target="_blank">
              <span style={{display:'flex'}}>
                <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "linkedIn"))} onMouseLeave={((e) => this.offHover(e, "linkedIn"))}> <u>LinkedIn</u> → </p>
                <p style={hiddenText}> Lets Connect </p>
              </span>
            </a>
          </div>

        <div style={this.doShow(!this.state.github)}>
          <p style={connectText} onMouseEnter={((e) => this.onHover(e, "github"))} onMouseLeave={((e) => this.offHover(e, "github"))}> Github →</p>
        </div>
          <div style={this.doShow(this.state.github)}>
          <span style={{display:'flex'}}>
            <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "github"))} onMouseLeave={((e) => this.offHover(e, "github"))}> <u>Github</u> → </p>
            <p style={hiddenText}> My Side Projects </p>
          </span>
        </div>
      </div>

      <div style={readContainer}>
        <Fade top>
          <p style={readText}>
            4 Recent Reads in 2020
          </p>
        </Fade>

      <Row gutter={[16, 16]}>
        <Col xs={{ span: 10, offset: 3 }} lg={{ span: 10, offset: 3}}>
          <Fade bottom delay={100}>
              <img src="/shoedog.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 10, offset: 3 }} lg={{ span: 10, offset: 3}}>
          <Fade bottom delay={100}>
            <img src="/outliers.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 10, offset: 3 }} lg={{ span: 10, offset: 3}}>
          <Fade bottom delay={100}>
              <img src="/moneyball.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 10, offset: 3 }} lg={{ span: 10, offset: 3}}>
          <Fade bottom delay={100}>
            <img src="/rework.jpg"/>
          </Fade>
        </Col>
      </Row>
      </div>

      </React.Fragment>
    )
  } else {

    var setbkgColor;
    var setTextColor;
    var navStick;
    var transition  = '0.3s ease-out';
    if (this.state.lastScrollY >830){
      setbkgColor   = 'black';
      setTextColor  = 'white';
    } else {
      setbkgColor   = 'white';
      setTextColor  = 'black';
    }

    if(this.state.lastScrollY >80){
      navStick = true;
    } else {
      navStick = false;
    }

    let mainText = {
      zIndex:1,
      fontSize:'3.25vw',
      letterSpacing: '1.5px',
      paddingLeft:'150px',
      fontWeight:'300',
      fontFamily:'SuisseIntl-Light,Helvetica,sans-serif',
      color:setTextColor,
      width:'1500px',
      position:'absolute'
    }

    let fixedText = {
      zIndex:1,
      fontSize:'65px',
      lineHeight: '20px',
      letterSpacing: '1.5px',
      fontWeight:'300',
      fontFamily:'SuisseIntl-Light,Helvetica,sans-serif',
      color:'black',
      position:'relative'
    }

    let imgStyle = {
      zIndex:0,
      resizeMode:'cover',
      width:'40%',
      height:'auto',
      float: 'right',
      justifyContent:'right',
      paddingRight:'150px',
      position:'relative'
    }

    let traitText = {
      float:'right',
      fontFamily:'adobe-garamond-pro',
      fontWeight: '400',
      fontSize:'20px',
      lineHeight:'1.2rem'
    }

    let landingContainer = {
      paddingLeft:'20px',
      paddingRight:'20px',
      display:'inline-block',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let letsTalkContainer = {
      paddingTop:'30px',
      paddingRight:'200px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let letsTalk = {
      fontSize:'18px',
      float:'right',
      color:setTextColor,
      transition: transition,
    }

    let rowContainer = {
      paddingTop:'200px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let connectContainer = {
      width:'100%',
      height:'auto',
      backgroundColor:setbkgColor,
      paddingBottom:'60px',
      transition: transition,
      paddingLeft:'20px',
    }

    let stayInTouchText = {
      height:'auto',
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'1.25rem',
      lineHeight:'1.25rem',
      color:setTextColor,
      backgroundColor:setbkgColor,
      width:'160px',
      overflow:'hidden',
      scrollAmount:"2",
      paddingTop:'10px',
      transition: transition,
    }

    let connectText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'1.5em',
      lineHeight:'1.5em',
      color:setTextColor,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let hiddenConnectText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'1.5em',
      lineHeight:'1.5em',
      color:setTextColor,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let hiddenText = {
      fontFamily:'sans-serif',
      fontWeight: '600',
      fontSize:'1.50em',
      lineHeight:'1.50em',
      color:color1,
      paddingTop:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let introContainer = {
      width:'100%',
      height:'auto',
      backgroundColor:setbkgColor,
      display:'block',
      transition: transition,
    }

    let marqueeText = {
      height:'50px',
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'1.2rem',
      lineHeight:'2rem',
      color:setTextColor,
      backgroundColor:setbkgColor,
      width:'70px',
      overflow:'hidden',
      transition: transition,
    }

    let introText = {
      fontFamily:'sans-serif',
      fontWeight: '400',
      fontSize:'1.7em',
      lineHeight:'1.5em',
      color:setTextColor,
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let secondIntroText = {
      fontFamily:'sans-serif',
      fontWeight: '300',
      fontSize:'1.6em',
      lineHeight:'1.5em',
      color:'darkgrey',
      paddingBottom:'20px',
      backgroundColor:setbkgColor,
      transition: transition,
    }

    let readContainer = {
      width:'100%',
      backgroundColor:setbkgColor,
      transition: transition,
      paddingTop:'100px'
    }

    let readText = {
      fontFamily:'sans-serif',
      fontWeight: '400',
      paddingLeft:'5em',
      float:'left',
      fontSize:'2.25vw',
      lineHeight:'1.5em',
      color:setTextColor,
      backgroundColor:setbkgColor,
      transition: transition,
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

    const navText = {
      color: setTextColor,
      transition: transition,
    }

    return(
      <React.Fragment>
      <div style={this.doShow(navStick)}>
        <div class="nav" style={{paddingTop:'25px'}}>
          <div class="nav-wrapper">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 3, offset: 2 }} lg={{ span: 3, offset: 2 }}>
              <div class="nav--logo">
                <Fade top>
                   <p style={navText}> <p className="navText"> KC - 20 © </p> </p>
                </ Fade>
              </div>
            </Col>
            <Col xs={{ span: 3, offset: 13 }} lg={{ span: 3, offset: 13}}>
              <span style={{display:'flex'}}>
                <Fade top>
                 <p style={navText}> <p className="navText"> About   </p> </p>
                 <p style={navText}> <p className="navText"> Work    </p> </p>
                 <p style={navText}> <p className="navText"> Contact </p> </p>
                </ Fade>
              </span>
            </Col>
          </Row>
          </div>
        </div>
      </div>

      <div style={{background:`linear-gradient(${color1}, ${color2})`, zIndex:'2', paddingTop:'72px', height:'300px'}}>
        <Row gutter={[16, 16]} style={{height:'150px'}}>
          <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Fade top>
              <p style={traitText}>Software Engineer  </p>
            </ Fade>
          </Col>
          <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1}}>
          <Fade top>
            <p style={traitText}>Collegiate Athlete </p>
          </ Fade>
          </Col>
          <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} >
            <Fade top>
              <p style={traitText}>Creative Director</p>
            </ Fade>
          </Col>
          <Col xs={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0}}>
          <Fade top>
            <p style={traitText}>Relentless Entreprenuer</p>
          </ Fade>
          </Col>
        </Row>
      </div>

      <div style={landingContainer}>
        <img src="/profile.jpg" style={imgStyle}/>
        <p style={mainText}> Hey, <u>I'm Kyle.</u> A software  </p>
        <br /> <br /> <br /> <br />
        <p style={mainText}> engineer based in Raleigh, NC. </p>
        <br /> <br /> <br /> <br />
        <p style={mainText}> Creating neat apps for user </p>
        <br /> <br /> <br /> <br />
        <p style={mainText}> experiences.  </p>
      </div>

      <div style={letsTalkContainer}>
        <p style={letsTalk} onClick={this.openContact}> <u>Lets Talk</u> </p>
      </div>

      <Row gutter={[16, 16]} style={rowContainer}>
        <Col xs={{ span: 7, offset: 2 }} lg={{ span: 7, offset: 2}}>
        <div style={connectContainer}>
          <p style={stayInTouchText}>
            <marquee scrollAmount={2}>
            <u>STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; STAY IN TOUCH &nbsp;&nbsp; </u>
            </marquee>
          </p>
            <div style={this.doShow(!this.state.insta)}>
              <p style={connectText} onMouseEnter={((e) => this.onHover(e, "insta"))} onMouseLeave={((e) => this.offHover(e, "insta"))}> Instagram &nbsp;&nbsp;→</p>
            </div>
            <div style={this.doShow(this.state.insta)}>
              <a href="https://www.instagram.com/kylechristxc/" target="_blank">
                <span style={{display:'flex'}}>
                  <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "insta"))} onMouseLeave={((e) => this.offHover(e, "insta"))}> <u>Instagram</u>&nbsp;&nbsp;&nbsp;→</p>
                  <p style={hiddenText}>&nbsp;&nbsp;&nbsp; @kylechristxc </p>
                </span>
              </a>
            </div>

            <div style={this.doShow(!this.state.linkedIn)}>
              <p style={connectText} onMouseEnter={((e) => this.onHover(e, "linkedIn"))} onMouseLeave={((e) => this.offHover(e, "linkedIn"))}> LinkedIn &nbsp;&nbsp;→</p>
            </div>
            <div style={this.doShow(this.state.linkedIn)}>
              <a href="https://www.linkedin.com/in/kyle-christ-912aabba/" target="_blank">
                <span style={{display:'flex'}}>
                  <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "linkedIn"))} onMouseLeave={((e) => this.offHover(e, "linkedIn"))}> <u>LinkedIn</u>&nbsp;&nbsp;&nbsp;→</p>
                  <p style={hiddenText}>&nbsp;&nbsp;&nbsp; Lets Connect </p>
                </span>
              </a>
            </div>

          <div style={this.doShow(!this.state.github)}>
            <p style={connectText} onMouseEnter={((e) => this.onHover(e, "github"))} onMouseLeave={((e) => this.offHover(e, "github"))}> Github &nbsp;&nbsp;→</p>
          </div>
            <div style={this.doShow(this.state.github)}>
            <span style={{display:'flex'}}>
              <p style={hiddenConnectText} onMouseEnter={((e) => this.onHover(e, "github"))} onMouseLeave={((e) => this.offHover(e, "github"))}> <u>Github</u>&nbsp;&nbsp;&nbsp;→</p>
              <p style={hiddenText}>&nbsp;&nbsp;&nbsp; My Side Projects </p>
            </span>
          </div>
        </div>
        </Col>
        <Col xs={{ span: 10, offset: 2 }} lg={{ span: 10, offset: 2 }}>
          <div style={introContainer}>
            <p style={marqueeText}>
              <marquee scrollAmount={2}>
              <u>INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; INTRO &nbsp;&nbsp; </u>
              </marquee>
            </p>
            <p style={introText}> I'm a 23 year old software engineer living in Raleigh, NC. currently
            working at <u> SAS</u>. I believe great design is the result of a
            deep process of understanding the problem you're trying to solve
            combined with a beautifully executed solution.
            </p>

            <p style={secondIntroText}> I'm passionate about using software to deliver
            extraordinary creative solutions for enthusiatic users. In my spare time
            you can find me running, weightlifting, or reading a good book.
            </p>
          </div>
        </Col>
      </Row>

      <div style={readContainer}>
        <Fade top>
          <p style={readText}>
            <span style={{display:'flex'}}>
            Pursuit of Knowledge
            </span>
          </p>
        </Fade>
      </div>

      <div style={{backgroundColor:setbkgColor, transition: transition, paddingTop:'100px', height:'1200px'}}>

      <Row gutter={[16, 16]} style={{height:'500px', margin:'0', padding:'0'}}>
        <Col xs={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 2}}>
          <Fade bottom delay={200}>
              <img src="/shoedog.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset:  1}} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={400}>
            <img src="/outliers.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={600}>
              <img src="/fastandslow.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset:  1}} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={800}>
            <img src="/rework.jpg"/>
          </Fade>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{height:'500px'}}>
        <Col xs={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 2}}>
          <Fade bottom delay={800}>
            <img src="/leaderseatlast.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset:  1}} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={600}>
            <img src="/winfriends.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={400}>
              <img src="/moneyball.jpg"/>
          </Fade>
        </Col>
        <Col xs={{ span: 4, offset:  1}} lg={{ span: 4, offset: 1}}>
          <Fade bottom delay={200}>
            <img src="/emoint.jpg"/>
          </Fade>
        </Col>
      </Row>
      </div>

      </React.Fragment>
    )
  }
  }
}

export  default  DescribeMe;
