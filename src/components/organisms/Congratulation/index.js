import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from 'variables';

import { Modal } from 'semantic-ui-react'
import EnvelopeImage from 'assets/envelope.svg';

const EnvelopeWrapper = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  > img {
    // margin-bottom: 24px;
  }
`;

const MessageWrapper = styled.div`
  min-height: 240px;
  background: ${Colors.white};
  margin: 8px;
`;

class Congratulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { name, msg, relate } = this.props;
    return (
      <Modal trigger={(
        <EnvelopeWrapper>
          <img src={EnvelopeImage} />
          <div>{name}</div>
        </EnvelopeWrapper>
        )}>

        <Modal.Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <MessageWrapper>
          </MessageWrapper>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Congratulation;
