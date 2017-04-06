import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { FixedTip } from '../components/Tip';

export class NetworkStatus extends React.Component {
  static propTypes = {
    online: PropTypes.bool.isRequired,
  }

  render() {
    if (this.props.online === false) {
      return <FixedTip>Network is Offline</FixedTip>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  online: state.online,
});

export default connect(mapStateToProps)(NetworkStatus);
