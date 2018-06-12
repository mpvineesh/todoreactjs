import React from 'react';
import PropTypes from 'prop-types';

import ItemWrapper from './ItemWrapper.js';
class Item extends React.Component{

  render(){

    const props = Object.assign({}, this.props);
    let items = props.items;
    items  = items.filter(item => item.status == props.status);
    const listItems = items.map((item,index) =>
        <div className="checkbox" key={index}>
          <label  className={props.status ? "done" : ""} >
            <input
             type="checkbox"
             checked={props.status ? true : false}
             value={index}
             data-idx={item.idx}
             onChange={(e)=>props.onChange(e)}
             />
            {item.value}
          </label>
          <span className="delete" title="Delete" data-idx={item.idx} onClick={(e)=>props.onDeleteClick(e)}>X</span>
        </div>
    );
    return (
      <div className="content list">
        {listItems}
      </div>
    )
  }
}

Item.propTypes =  {
  status: PropTypes.oneOf([1,0]),
  onChange: PropTypes.func,
  items: PropTypes.array
}

Item.defaultProps = {
  status:0
}

const enhancedItem = ItemWrapper(Item);
export default enhancedItem;
