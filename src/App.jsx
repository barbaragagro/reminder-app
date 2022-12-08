import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addReminder, deleteReminder, clearReminders} from './actions';
import moment from 'moment';


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      text: '',
      dueDate: '',
      updatedTextInput: ''
    }
  }

  handleChange=(event)=>{
    this.setState({text:event.target.value});
  };
  

  addReminder(){
    this.props.addReminder(this.state.text, this.state.dueDate);
    document.getElementById('inp1').value='';
    this.setState({text:''});


  }

  deleteReminder(id){

    this.props.deleteReminder(id);

  }

  clearReminders(){
    this.props.clearReminders();

   
}  



 

  renderReminders(){
    const { reminders } = this.props;
  
    return (
      <ul className='list-group col-sm-4 paddingClass' >
        {reminders.map(reminder=>{
          return(
            <li key={reminder.id} className='list-group-item remindersClass'>
              <div className='list-item '>
                <div>{reminder.text}</div>
                <div><em>{moment(new Date (reminder.dueDate)).fromNow()}</em></div>
                </div>

              <div className='list-item delete-button' onClick={()=>this.deleteReminder(reminder.id)}>
                &#x2715;
              </div>
            </li>
          )
        })
      }
      </ul>
    )

  }

render(){
  return (

    <div className="App" >
        <div className='title'>
          REMINDER APP
        </div>
        <div>
          <div className='paddingClass'>
            <input id='inp1' className='form-control remindersClass' type='text' placeholder='I have to...' onChange={event=>this.handleChange(event)}>
            </input>
            <input className='form-control remindersClass' type='datetime-local' onChange={event=>this.setState({dueDate:event.target.value})}>
            </input>
          </div>
          <div>
            <button type='button' className='btn btn-success' onClick={()=>this.addReminder()} disabled={this.state.text===''}>
              Add Reminder
            </button>
            {this.renderReminders()}
            <button className='btn btn-danger' id='myBtn' onClick={()=> this.props.clearReminders()} disabled={this.props.reminders.length<1}>Clear All Reminders</button>
          </div>
        </div>
    </div>
  );
}
}

function mapStateToProps(state){
  // console.log('state', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
