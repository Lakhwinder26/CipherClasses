

import React from 'react';
import PropTypes from 'prop-types';  

class Todoitem extends React.Component{
render()
      {
    return <li className="list">
    {this.props.todo}
    <button className="btn2" onClick={this.props.onDelete}>Remove</button>
    </li>
      }
}
Todoitem.propTypes ={
    todo: PropTypes.string,
    onDelete: PropTypes.func
}

export default Todoitem