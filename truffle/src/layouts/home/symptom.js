import React, { Component } from 'react'
import './symptom_selector/selector.css'
import './symptom_selector/fontawesome/assets/css/font-awesome.min.css'
import './libs/jquery-1.12.2.min.js'
import './libs/json2.js'
import './libs/jquery.imagemapster.min.js'
import './libs/typeahead.bundle.js'
import './symptom_selector/selector.js'
import './symptom_selector/symptom.js'
class Symptom extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }
    /*  <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Change these details in UPort to see them reflected here.</p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
          </div>
        </div>
      </main>*/
  render() {
    return(
   <table class="container-table">
       <tr>
           <td valign="middle" colspan="2" class="td-header box-white bordered-box width50"><h4 class="header" id="selectSymptomsTitle"><span class="badge pull-left badge-primary visible-lg margin5R">1</span></h4></td>
           <td valign="middle" class="td-header bordered-box box-white width25"><h4 class="header" id="selectedSymptomsTitle"><span class="badge pull-left badge-primary visible-lg margin5R">2</span></h4></td>
           <td valign="middle" class="td-header bordered-box box-white width25"><h4 class="header" id="possibleDiseasesTitle"><span class="badge pull-left badge-primary visible-lg margin5R">3</span></h4></td>
       </tr>
       <tr>
           <td valign="top" class="selector_container bordered-box box-white width25"><div id="symptomSelector"></div></td>
           <td valign="top" class="selector_container bordered-box box-white width25"><div id="symptomList"></div></td>
           <td valign="top" class="selector_container bordered-box box-white width25"><div id="selectedSymptomList"></div></td>
           <td valign="top" class="selector_container bordered-box box-white width25"><div id="diagnosisList"></div></td>
       </tr>
   </table>
    )
  }
}

export default Symptom