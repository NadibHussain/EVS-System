import React, { Component } from 'react'
import { Route, Switch  } from 'react-router-dom';
import IntakeLayout from '../../containers/IntakeLayout'
import Search from '../Search/Search';
import VoterListTable from '../VoterList/voterListTable'
import Booth from '../Booth/Booth'

class Intake extends Component {
    
    render() {
        return (
        <div>
            <IntakeLayout>
                <Switch>
                    <Route exact path={`${this.props.match.path}/`} component={Search} />
                    <Route exact path={`${this.props.match.path}/VoterList`} component={VoterListTable} />
                    <Route exact path = {`${this.props.match.path}/getbooth`} component = {Booth} />
                </Switch>
            </IntakeLayout>
        </div>
        )
    }
}

export default Intake;