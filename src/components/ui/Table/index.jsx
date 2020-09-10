import React from 'react'
import MaterialTable from 'material-table'
import { Trash2, Save } from 'react-feather'
export default function Table() {
  return (
    <MaterialTable
      title="Materiais"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      actions={[
        {
          icon: Save,
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        {
          icon: Trash2,
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name)
        }
      ]}
    />

  )
}