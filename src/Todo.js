import React from 'react';
import Header from './Header.js'
import TodoContent from './TodoContent.js';


class Todo extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Header/>
        <TodoContent/>
      </div>
    );
  }

}

export default Todo;
