import React from 'react';
import { Route, Switch  } from 'react-router-dom';


import NotFoundPage from '../NotFoundPage';
import Login from '../components/Login/login';
import Admin from '../components/Admin/Admin'
import Intake from '../components/Intake/Intake';

import Adminprotected from './adminProtected.route'
import IntakeProtected from './intakeProtected.route'
import VoterProtected from './voterProtected.route'

import Voter from '../components/voter/voter'

import ResultAll from '../components/Result/ResultAll';
import ResultLive from '../components/Result/ResultLive';

// import ResultPresident from '../components/Result/ResultPresident';
// import ResultExecutive from '../components/Result/ResultExecutive';
// import PresidentBallot from '../components/voter/BallotPaper/President/PresidentBallot';
// import ExecutiveBallot from '../components/voter/BallotPaper/Executive/ExecutiveBallot';
// import Thanks from '../components/thanks/thanks';
// import Loader from '../components/thanks/loader';
// import VoterSlipEnableForm from '../components/VoterSlip/VoterSlipEnableForm';
// import Booth from '../components/Booth/Booth'



const BaseRouter = () =>(
    <div>
        <Switch>
        <Route exact path = '/' component = {Login} />
        <VoterProtected path = '/voter' component = {Voter} />
        <Adminprotected path = '/admin' component = {Admin} />
        <IntakeProtected path = '/intake' component = {Intake} />

        <Route exact path = '/ResultAll' component = {ResultAll} />
        <Route exact path = '/ResultLive' component = {ResultLive} />

        {/* Testing part below */}


        {/* <Route exact path = '/PresidentBallot' component = {PresidentBallot} />
        <Route exact path = '/ExecutiveBallot' component = {ExecutiveBallot} />
        <Route exact path = '/ResultPresident' component = {ResultPresident} />
        <Route exact path = '/ResultExecutive' component = {ResultExecutive} />
        <Route exact path = '/Thanks' component = {Thanks} />
        <Route exact path = '/Loader' component = {Loader} />
        <Route exact path = '/voterSlipEnable' component = {VoterSlipEnableForm} />
        <Route path = '/getbooth' component = {Booth} /> */}

        {/* Testing part end */}

        <Route component={NotFoundPage} />

       
        </Switch>
    </div>
);


export default BaseRouter;