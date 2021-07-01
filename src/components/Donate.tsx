import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';

// image imports

class Donate extends Component<{}, {amount: number}> {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <header className="text-left m-2">Hello! Click a button or put in your own amount</header>
        <div className="btn-group" role="group">
          <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: 5 })}>5</button>
          <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: 10 })}>10</button>
          <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: 15 })}>15</button>
          <button className="btn btn-primary m-1" type="button" onClick={() => this.setState({ amount: 20 })}>20</button>
          <div className="input-group m-1">
            <input type="text" className="form-control" value={this.state.amount} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Donate!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(Donate);
