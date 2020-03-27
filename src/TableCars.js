import React, { Component } from 'react';

class TableCars extends Component{
  render(){
    return (
      <div>
      <div className="tr head-tr">
        <div className="td">ID</div>
        <div className="td">MARCA</div>
        <div className="td">MODELO</div>
        <div className="td">ANO</div>
      </div>
        {this.props.arrayCars.map(
          row=>
          <div className="tr" key="{row.id}">
            <div className="td">{row.id}</div>
            <div className="td">{row.brand}</div>
            <div className="td">{row.model}</div>
            <div className="td">{row.year}</div>
          </div>
        )}
      </div>
    );
  }
}

export default TableCars;
