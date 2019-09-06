import React, { Component } from 'react'
import { Route, Switch  } from 'react-router-dom';
import AdminLayout from '../../containers/AdminLayout'
import Search from '../Search/Search';
import ResultExecutive from '../Result/ResultExecutive'
import ResultPresident from '../Result/ResultPresident';
import AddNewVoter from '../VoterRegistration/AddNewVoter'
import AddNewPresident from '../VoterRegistration/AddNewPresident';
import AddNewExecutive from '../VoterRegistration/AddNewExecutive';
import PresidentListTable from '../VoterList/PresidentList';
import ExecutiveListTable from '../VoterList/ExecutiveList';
import VoterSlipEnableForm from '../VoterSlip/VoterSlipEnableForm';
import VoterListForAdmin from '../VoterList/VoterListForAdmin';
import Booth from '../Booth/Booth'
// import VoterListTable from '../VoterList/voterListTable'


export default class Admin extends Component {
    render() {
        return (
        <div>
        <AdminLayout>
        <Switch>
            <Route exact path={`${this.props.match.path}/`} component={Search} />
            <Route exact path={`${this.props.match.path}/ResultExecutive`} component={ResultExecutive} />
            <Route exact path={`${this.props.match.path}/ResultPresident`} component={ResultPresident} />
            <Route exact path={`${this.props.match.path}/register`} component={AddNewVoter} />
            <Route exact path={`${this.props.match.path}/register/president`} component={AddNewPresident} />
            <Route exact path={`${this.props.match.path}/register/executive`} component={AddNewExecutive} />
            <Route exact path={`${this.props.match.path}/VoterList`} component={VoterListForAdmin} />
            <Route exact path={`${this.props.match.path}/PresidentList`} component={PresidentListTable} />
            <Route exact path={`${this.props.match.path}/ExecutiveList`} component={ExecutiveListTable} />
            <Route exact path={`${this.props.match.path}/VoterSlipEnable`} component={VoterSlipEnableForm} />
            <Route exact path={`${this.props.match.path}/BoothList`} component={Booth} />
        </Switch>
        </AdminLayout>
        </div>
        )
    }
}
