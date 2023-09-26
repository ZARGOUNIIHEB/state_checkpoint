import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './App.css';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Russell Crowe',
        bio: 'A passionate individual with various interests.',
        imgSrc: require('./profile.jpg'),
        profession: 'Software Engineer',
      },
      show: true,
      timeMark: null
    };
  }


  showProfile = () => {
    (this.state.show) ? this.setState({ show: false }) : this.setState({ show: true });
  }

  componentDidMount() {
    this.setState({
      timeMark: new Date(),
    });
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="App">
        <div className="firstDiv">
          <div className="underDiv1">
            {this.state.show ? <Profile {...this.state.person} timer={this.state.timer} /> : null}
          </div>
          <div className="underDiv2">
            <Button variant="secondary" size="lg" className="Toggler" onClick={this.showProfile}>Button</Button>
          </div>
          <div className="underDiv3">
            <td className="td1"><p>Time interval since mount:</p></td>
            <td className="td2">{Math.floor((new Date() - this.state.timeMark) / 1000)}</td>
            <td className="td3"><p>seconds</p></td>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
