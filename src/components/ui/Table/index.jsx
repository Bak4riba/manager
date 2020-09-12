import React from 'react'
import MUIDataTable from "mui-datatables";
import Toolbar from './Toolbar'


class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      singular: this.props.singular,
      data: this.props.data,
      columns: this.props.columns,
      options: {
        filter: true,
        filterType: 'dropdown',
        responsive: 'vertical',
        selectableRows: 'multiple',
        customToolbar: () => {
          return (
            <Toolbar title={this.state.singular} form={this.props.form} />
          );
        },
      }
    }
  }

  render() {
    return (
      <MUIDataTable
        title={this.state.title}
        data={this.state.data}
        columns={this.state.columns}
        options={this.state.options} />
    );
  }
}

export default Table
