import React, { Component } from 'react'
import { Route, Switch  } from 'react-router-dom';
import SignInSide from '../voter/signInBallot';
import PresidentBallot from './BallotPaper/President/PresidentBallot';
import ExecutiveBallot from './BallotPaper/Executive/ExecutiveBallot'

export default class Voter extends Component {
    render() {
        return (
        <div>
        <Switch>
            <Route exact path={`${this.props.match.path}/`} component={SignInSide} />
            <Route exact path={`${this.props.match.path}/PresidentBallot`} component={PresidentBallot} />
            <Route exact path={`${this.props.match.path}/ExecutiveBallot`} component={ExecutiveBallot} />
        </Switch>
        </div>
        )
    }
}
