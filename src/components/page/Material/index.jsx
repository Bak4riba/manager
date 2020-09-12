import React from 'react';
import Table from '../../ui/Table'
import Form from './Form'

export default function Material() {
  const columns = [
    {
      label: 'Nome',
      name: 'name'
    }
  ]

  const data = [
    {
      name: 'Leandro'
    },
    {
      name: 'Corno'
    },
    {
      name: 'Viadão'
    }
  ]

  return (
    <div>
      <Table
        title="Materiais"
        singular="Material"
        data={data}
        columns={columns}
        form={Form} />
    </div>

  );
}