import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './Logo.js';
import './App.css';

var App=React.createClass({
      apikey:'9f12be837c048948b384ec6d3a35d36f',
      getInitialState: function() {
    return {searchTerm:"", searchUrl:""};
  },
  //handle keys
  handleKeyUp :function(e){
    //if enter key is enter and the state search is not empty
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
        //searchurl with the search term and apply api key
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl:searchUrl});
    }
  },
    // handles change in search term

   handleChange : function(e){
      this.setState({searchTerm : e.target.value});    
  },render: function() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
          <UserProfile />
          
        </header>
        
      </div>
    );
  }
});

//Profile

var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Bruno Salapic</div>
          <div className="image"><img src="https://avatars1.githubusercontent.com/u/8978785?v=3&s=460" alt="profile" /></div>
        </div>
      </div>
    );
  }
});


var Navigation = React.createClass({
  render: function() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>My list</li>
            <li>Top picks</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    );
  }
});




export default App;
