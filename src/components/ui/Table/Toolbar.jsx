import React, { useRef } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'

function Toolbar(props) {
  const formRef = useRef()
  const Form = props.form

  function handleOpenModal() {
    formRef.current.handleClickOpen()
  }

  return (
    <React.Fragment>
      <Form ref={formRef} />

      <Tooltip title={`Adicionar ${props.title}`}>
        <IconButton onClick={handleOpenModal}>
          <Add />
        </IconButton>
      </Tooltip>

      {
        false &&
        <Tooltip title={`Adicionar Estoque`}>
          <IconButton>
            <Add />
          </IconButton>
        </Tooltip>
      }

    </React.Fragment>
  )
}

export default Toolbar
