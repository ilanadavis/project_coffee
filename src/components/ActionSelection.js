import React from 'react';

class ActionSelection extends React.Component {
 actionSelection = React.createRef();
 
  goToAction = (event) => {
   event.preventDefault();
   const actionSelected = this.actionSelection.value;
   this.props.history.push(`/action/${actionSelected}`);
  }
 
 render() {
   return (
    <React.Fragment> { /* can also import fragment and then remove react. in this line */ }
      <button onSubmit={this.goToAction} type="submit" className="actionSelected">New Hire</button><br />
      <button onSubmit={this.goToAction} type="submit" className="actionSelected">Change</button><br />
      <button onSubmit={this.goToAction} type="submit" className="actionSelected">Term</button>
    </React.Fragment>
     )
 } 
}

export default ActionSelection;