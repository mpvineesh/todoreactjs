import React from 'react';
import add from './add.png';

function List(props){


  let checkList = props.list;
  checkList = checkList.map((item,index) =>
      <span key={index}
        onClick={()=>props.handleListChange(index)}
        className={props.currentList == index?'selected items':'items'}>{item.name}
      </span>
  );

  return(
    <div className="add-list checklist">
      <h4>Your Lists</h4>
      {checkList}
      <span className="add" onClick={props.handleAddClick}>Add New</span>
      <input
        type="text"
        className={props.showAdd ? 'show form-control col-md-8':'hide form-control col-md-8'}
        value={props.newListItem} id="list-item"
        onChange={props.handleAddListItemChange}
        />
        <img
            src={add}
            className={props.showAdd ? 'show':'hide'}
            onClick={props.addList} alt="logo"
        />
    </div>
  )

}

export default List;
