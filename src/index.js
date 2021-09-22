import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CalendarElement extends React.Component {
  render() {
    return (
        <div>Calendar Element Goes Here</div>
    );
  }
}

class GamesElement extends React.Component {
  render() {
    return (
        <div>Games Element Goes Here</div>
    );
  }
}

class MembersElement extends React.Component {
  render() {
    return (
        <div>Members Element Goes Here</div>
    );
  }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          element: 'default'
        };
        this.element = 'default';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(element) {
      this.setState( {element} )
    }

    renderSwitch(element) {
      switch(element) {
        case "calendar" :
          return <CalendarElement />
        case "games" :
          return <GamesElement />
        case "members" :
          return <MembersElement />
    }
  }

  render() {
     const { condition } = this.state;
     return (
     <>
         <div><p>Hello World; Welcome to React Testbed</p></div>
         <div>
             <button onClick={() => this.handleClick("calendar")}>Calendar</button>
             <button onClick={() => this.handleClick("games")}>Games</button>
             <button onClick={() => this.handleClick("members")}>Members</button>
             </div>
             {this.renderSwitch(element)}
     </>
     )
  }
}

ReactDOM.render(<App />, document.getElementById('root')
);