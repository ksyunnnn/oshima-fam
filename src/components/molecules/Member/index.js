import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../../helpers/media-query';
import { Colors } from '../../../variables';

const Wrapper = styled.div`
  width: 188px;
  height: 253px;
  margin: 16px;
  text-align: center;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;
  :hover {
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
`;

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
  }
  render() {
    return (
      <Wrapper
        onClick={()=>this.setState(prevState => ({
          isToggle: !prevState.isToggle
        }))}
        >
        <Img src={this.state.isToggle?this.props.image:this.props.icon}/>
      </Wrapper>
    )
  }
}

export default Member;
