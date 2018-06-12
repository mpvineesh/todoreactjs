import React from 'react';
import Item from './Item.js';

import List from './List.js';

class TodoContent extends React.Component{

  constructor(){
    super();
    this.state={
      item:"",
      taskLeft:0,
      currentList:0,
      checkList:[
        {name:"Todays List",todos:[]}
      ],
      showAdd:false,
      newListItem:"",

    }
  }

  handleChange=(event)=>{
    this.setState({item:event.target.value});
  }

  handleListChange = (listIndex)=>{
    console.log(listIndex);
    this.setState({currentList:listIndex});
    let taskLeft = this.state.checkList[listIndex].todos.filter((item) => item.status == 0).length
    this.setState({taskLeft:taskLeft});
  }

  handleItemChange = (e) => {
    let checkList = this.state.checkList;
    let taskLeft = this.state.taskLeft;

    if(e.target.checked){
      checkList[this.state.currentList].todos[e.target.dataset.idx].status = 1;
      taskLeft--;
    }else{
      checkList[this.state.currentList].todos[e.target.dataset.idx].status = 0;
      taskLeft++;
    }
    this.setState({
      taskLeft:taskLeft,
      checkList:checkList
    });
  }

  addItem=()=>{
    let checkList = this.state.checkList;
    if(!this.state.item.length){
      alert('Please enter some text');
      return false;
    }
    let taskLeft = this.state.taskLeft;
    taskLeft++;
    const item = {value:this.state.item,status:0,idx:this.state.checkList[this.state.currentList].todos.length}
    checkList[this.state.currentList].todos.push(item);
    this.setState({
      item:"",
      taskLeft:taskLeft,
      checkList:checkList
    });
  }
  handleAddClick = (e)=>{
    this.setState({
      showAdd:true
    });
  }

  addList = (e)=>{
    let checkList = this.state.checkList;
    const newList = {name:this.state.newListItem,todos:[]};
    checkList.push(newList);
    console.log(checkList);
    this.setState({
      checkList:checkList,
      newListItem:"",
      showAdd:false
    });
  }

  handleAddListItemChange = (e)=>{
      this.setState({
        newListItem:e.target.value
      });
  }

  handleDeleteClick = (e) => {
    let checkList = this.state.checkList;
    let taskLeft = this.state.taskLeft;
    const ItemIndex = e.target.dataset.idx;

    if(!checkList[this.state.currentList].todos[ItemIndex].status){
      taskLeft--;
    }
    checkList[this.state.currentList].todos.splice(ItemIndex,1);
    checkList[this.state.currentList].todos = checkList[this.state.currentList].todos.map(item=>{
      item.idx > ItemIndex ? item.idx = item.idx-1:item.idx;
      return item;
    });

    this.setState({
      taskLeft:taskLeft,
      checkList:checkList
    });

  }

  render(){
    return(
      <div className="main">
        <div className="row">
          <div className="left-menu col-md-2">
            <div className="task-count">{this.state.taskLeft}</div>
            <div className="centre">TASKS LEFT</div>
            <List
              list={this.state.checkList}
              handleAddClick = {this.handleAddClick}
              handleListChange = {this.handleListChange}
              currentList = {this.state.currentList}
              showAdd = {this.state.showAdd}
              handleAddListItemChange = {this.handleAddListItemChange}
              addList = {this.addList}
              newListItem = {this.state.newListItem}
            />
          </div>

          <div className="todo-list col-md-9">
              <div className="content add-item">
                  <h3>{this.state.checkList[this.state.currentList].name}</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control col-md-12"
                      value={this.state.item} id="item"
                      placeholder="Add a new item"
                      onChange={this.handleChange}
                      />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.addItem}>Add Item</button>
              </div>
              <Item
                items={this.state.checkList[this.state.currentList].todos}
                onChange={this.handleItemChange}
                onDeleteClick={this.handleDeleteClick}
              />
              <h4>Completed Items</h4>
              <Item
                items={this.state.checkList[this.state.currentList].todos}
                status={1}
                onChange={this.handleItemChange}
                onDeleteClick={this.handleDeleteClick}
                />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoContent;
