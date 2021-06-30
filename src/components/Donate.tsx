import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';

// image imports

class Donate extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <a>Hello!</a>

      </div>
    );
  }
}

export default withAlert()(Donate);
