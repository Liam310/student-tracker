import React, { Component } from 'react';
import { fetchExtraInfo } from '../api';

class ExtraStudentInfo extends Component {
  state = {
    info: []
  };
  render() {
    const { info } = this.state;
    return (
      <div>
        <h3>Block History: </h3>
        {info.map(block => {
          return <li>{block.name}</li>;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.addExtraInfo();
  }
  addExtraInfo = async () => {
    const { id } = this.props;
    const extraInfo = await fetchExtraInfo(id);
    this.setState({ info: extraInfo.blockHistory });
  };
}

export default ExtraStudentInfo;
