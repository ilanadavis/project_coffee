import React from 'react';

class ActionSelection extends React.Component {
 render() {
   return (
    <React.Fragment> { /* can also import fragment and then remove react. in this line */ }
      <button type="submit" className="paf-selection" href="paf_hire_index.html">New Hire</button><br />
      <button type="submit" className="paf-selection" href="paf_change_index.html">Change</button><br />
      <button type="submit" className="paf-selection" href="paf_termination_index.html">Term</button>
    </React.Fragment>
     )
 } 
}

export default ActionSelection;