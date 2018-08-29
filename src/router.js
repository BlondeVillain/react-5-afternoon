import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';
import NextBtn from './components/NextBtn/NextBtn';
import { Switch, Route } from 'react-router-dom';

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";

const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  function reducer( state = initialState, action ) { 
    switch(action.type){
    case  UPDATE_LOAN_TYPE:
        return Object.assign( {}, state, { loanType: action.payload } );

    case UPDATE_PROPERTY_TYPE:
        return Object.assign( {}, state, { propertyType: action.payload } );

    case UPDATE_CITY:
        return Object.assign( {}, state, { city: action.payload } );
        default: return state;
}}
export function updateLoanTyp(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }}
export function updatePropertyType(property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }}
export function updateCity( city ) {
    return {
      type: UPDATE_CITY,
      payload: city
    }}
export default (
    <Switch>
  
        <Route component={NextBtn} exact path= '/'/>
        <Route component={WizardOne}  path='/wOne'/>
        <Route component={WizardTwo}  path="/wTwo"/>
        <Route component={WizardThree} path="/wThree"/>
        <Route component={WizardFour} path="/wFour"/>
        <Route component={WizardFive} path="/wFive"/>
        <Route component={WizardSix} path="/wSix"/>
        <Route component={WizardSeven} path="/wSeven"/>
        <Route component={WizardEight} path="/wEight"/>
        <Route component={WizardNine} path="/wNine"/>
        <Route component={WizardTen} path="/wTen"/>
        <Route component={WizardEleven} path="/wEleven"/>
        <Route component={Finish} path='/finish'/>
  
      </Switch>
  )
  export default reducer; 