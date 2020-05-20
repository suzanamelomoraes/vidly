import React, { Component } from "react";

// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
  render() {
    raiseSort = (path) => {
      const sortColumn = { ...this.props.sortColumn };
      if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      else {
        sortColumn.path = path;
        sortColumn.order = "asc";
      }
      this.props.onSort(sortColumn);
    };
    return(
        <thead>
        <tr>
    {this.props.columns.map(column => <th>{column.label}</th>)}
        </tr>
      </thead>
    )
  }
};

export default TableHeader;
