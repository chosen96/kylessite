import  React, { Component } from  'react';
import { BrowserRouter as Router, Switch, Route, Link} from  'react-router-dom';
import { Menu, Icon, Drawer, Button} from 'antd';
import VideoCover from 'react-video-cover'

import  Landing  from  './Landing';
import  About  from  './About';

const { SubMenu } = Menu;

/* Video Code
<div style={style} >
<VideoCover
  videoOptions={videoOptions}
  remeasureOnWindowResize
  getResizeNotifier={resizeNotifier => {
    this.setState({
      resizeNotifier,
    });
  }}
/>

*/

class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state  = {
        current: 'mail',
        resizeNotifier: () => {},
        width: window.innerWidth,
        drawyer: false,
      }
      this.onHover = this.onHover.bind(this);
      this.offHover = this.offHover.bind(this);
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showDrawer = () => {
    this.setState({ drawer: true });
  };

  onClose = () => {
    this.setState({ drawer: false, });
  };

  onHover(e){
  this.setState({ hover: e.target.name });
}

offHover(){
  this.setState({ hover: false });
}

setHover(){
  return {
    marginLeft:'1.0rem',
    color:'blue',
  }
}

setNoHover(){
  return {
    color: 'grey',
    marginLeft:'1.0rem',
  }
}

  render() {

  var isMobile;
  var halfScreen;
  if (this.state.width <= 600){
    isMobile = true;
    halfScreen = false;
  } else if (this.state.width <= 1100){
    halfScreen = true;
    isMobile = false;
  } else {
    isMobile = false;
    halfScreen = false;
  }

  if ((!isMobile) && (!halfScreen)){
  const videoOptions = {
    src: '/LEAN_richmond.mp4',
    autoPlay: true,
    loop: true,
    muted: true
  };
  const style = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    margin: 'auto',
    top: '-10vh',
    left: '-10vw',
    zIndex: -2,
    opacity: .5
  };
  const logoStyle = {
    zIndex:1,
    margin:'1rem',
    width:'auto',
    height:'auto',
    maxWidth:'150px',
    position:'absolute',
    float:'left',
    backgroundColor: 'transparent'
  }
  const menuStyle = {
    zIndex:1,
    float:'right',
    backgroundColor: 'transparent',
    position:'absolute',
    color:this.props.navColor,
    fontSize:'0.9rem'
  }

  return (
    <div style={{ width:'100%', backgroundColor:'black', zIndex:1}}>
      <div style={{ width:'35%', float:'right', marginRight:'2.5rem', marginTop:'2.5rem'}}>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={menuStyle}>
          <Menu.Item key="about" as={Link}>
            <span> LEAN </span>
            <Link to="/lean"></Link>
          </Menu.Item>
          <Menu.Item key="europe" as={Link}>
              <span> EUROPE </span>
              <Link to="/europe"></Link>
          </Menu.Item>

          <Menu.Item key="AMA" as={Link}>
            <span> ASK ME ANYTHING <Icon type="message" style={{marginLeft:'0.4rem'}}/> </span>
            <Link to="/ama"></Link>
          </Menu.Item>
        </Menu>
      </div>
  </div>

  );
}   else if ((!isMobile) && (halfScreen)) {

  const logoStyle = {
    zIndex:1,
    margin:'0.25rem',
    width:'auto',
    height:'auto',
    maxWidth:'100px',
    position:'absolute',
    float:'left',
    backgroundColor: 'transparent'
  }
  const style = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    margin: 'auto',
    top: '-10vh',
    left: '-10vw',
    zIndex: -2,
    opacity: .5
  };
  const menuStyle = {
    zIndex:1,
    float:'right',
    backgroundColor: 'transparent',
    color:'#00008b',
    position:'absolute',
    color:this.props.navColor,
    fontSize:'0.9rem',
    marginTop:'1rem',
    marginRight:'1rem',
    position:'right'
  }

  const drawerStyle = {
    backgroundColor: '#202020',
    color:'#A9A9A9',
    height:'100%',
    fontSize:'1.25rem',
  }

  var homeDrawyer     = this.setNoHover();
  var aboutDrawyer    = this.setNoHover();
  var leanDrawyer     = this.setNoHover();
  var amaDrawyer      = this.setNoHover();
  var eventsDrawyer   = this.setNoHover();
  var supportDrawyer  = this.setNoHover();
  if (this.state.hover === 'home'){
    homeDrawyer        = this.setHover();
  } else if (this.state.hover === 'about'){
    aboutDrawyer       = this.setHover();
  } else if (this.state.hover === 'lean'){
    leanDrawyer        = this.setHover();
  } else if (this.state.hover === 'ama'){
    amaDrawyer         = this.setHover();
  } else if (this.state.hover === 'events'){
    eventsDrawyer      = this.setHover();
  } else if (this.state.hover === 'support'){
    supportDrawyer     = this.setHover();
  }

  return (
    <div style={{ width:'100%', backgroundColor:'black', zIndex:1}}>
        <Button type="primary" onClick={this.showDrawer} style={menuStyle} icon="menu-fold" >
        </Button>
        <Drawer
          width={"300px"}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.drawer}
          bodyStyle={drawerStyle}
          as={Link}
        >
          <p>
          <Link to="/lean"  name="lean"  style={leanDrawyer}    onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
              LEAN
          </Link>
          </p>

          <p>
          <Link to="/europe" name="events" style={eventsDrawyer} onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
              EUROPE
          </Link>
          </p>

          <p>
          <Link to="/ama"   name="ama" style={amaDrawyer}   onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
                ASK ME ANYTHING
              <Icon type="message" style={{marginLeft:'0.75rem'}}/>
          </Link>
          </p>
        </Drawer>
    </div>
  );

} else {
  const logoStyle = {
    zIndex:1,
    margin:'0.25rem',
    width:'auto',
    height:'auto',
    maxWidth:'60px',
    position:'absolute',
    float:'left',
    backgroundColor: 'transparent'
  }
  const style = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    margin: 'auto',
    top: '-10vh',
    left: '-10vw',
    zIndex: -2,
    opacity: .5
  };
  const menuStyle = {
    zIndex:1,
    float:'right',
    backgroundColor: 'transparent',
    color:'#00008b',
    position:'absolute',
    color:this.props.navColor,
    fontSize:'0.9rem',
    marginTop:'1rem',
    marginRight:'1rem',
    position:'right'
  }

  const drawerStyle = {
    backgroundColor: '#202020',
    color:'#A9A9A9',
    height:'100%',
    fontSize:'1.25rem',
  }

  var homeDrawyer     = this.setNoHover();
  var aboutDrawyer    = this.setNoHover();
  var leanDrawyer     = this.setNoHover();
  var amaDrawyer      = this.setNoHover();
  var eventsDrawyer   = this.setNoHover();
  var supportDrawyer  = this.setNoHover();
  if (this.state.hover === 'home'){
    homeDrawyer        = this.setHover();
  } else if (this.state.hover === 'about'){
    aboutDrawyer       = this.setHover();
  } else if (this.state.hover === 'lean'){
    leanDrawyer        = this.setHover();
  } else if (this.state.hover === 'ama'){
    amaDrawyer         = this.setHover();
  } else if (this.state.hover === 'events'){
    eventsDrawyer      = this.setHover();
  } else if (this.state.hover === 'support'){
    supportDrawyer     = this.setHover();
  }

  return (
    <div style={{ width:'100%', backgroundColor:'black', zIndex:1}}>
        <Button type="primary" onClick={this.showDrawer} style={menuStyle} icon="menu-fold" >
        </Button>
        <Drawer
          width={"300px"}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.drawer}
          bodyStyle={drawerStyle}
          as={Link}
        >

        <p>
        <Link to="/lean"  name="lean"  style={leanDrawyer}    onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
            LEAN
        </Link>
        </p>

        <p>
        <Link to="/europe" name="events" style={eventsDrawyer} onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
            EUROPE
        </Link>
        </p>

        <p>
        <Link to="/ama"   name="ama" style={amaDrawyer}   onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
              ASK ME ANYTHING
            <Icon type="message" style={{marginLeft:'0.75rem'}}/>
        </Link>
        </p>

        </Drawer>
    </div>
    );
    }
  }
}

export default Navbar;
