import React, {Component} from 'react';
import Root from './src/router/index';

export default class App extends Component {
  render() {
    const {
      baseurl,
      username,
      sitename,
      selectedid,
      refreshToken,
      accessToken,
      isLoggedIn,
      extra,
      useraccountlist,
      avatar,
    } = this.props;

    return (
      <Root
        baseurl={baseurl}
        username={username}
        sitename={sitename}
        selectedid={selectedid}
        refreshToken={refreshToken}
        accessToken={accessToken}
        isLoggedIn={isLoggedIn}
        extra={extra}
        useraccountlist={useraccountlist}
        avatar={avatar}
      />
    );
  }
}
