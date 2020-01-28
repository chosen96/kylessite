import  React, { Component } from  'react';
import { Route, Link } from  'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Switch} from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider }  = Layout;

class  LeanContent  extends  Component {

  constructor(props) {
      super(props);
      this.state  = {

      }
  }

  componentDidMount() {

  };

  render() {

      return (
        <div style={{width:'100%'}}>
          <h1> LEAN CONTENT </h1>
        </div>
      )
    }
  }

export  default  LeanContent;
