import React from 'react';

function ItemWrapper(WrappedComponent){
  return class extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      return <WrappedComponent {...this.props} />
    }
  }
}

export default ItemWrapper;
