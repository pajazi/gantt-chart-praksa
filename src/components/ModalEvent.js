import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ModalEvent = ({ open, handleClose, id }) => {
    console.log(id)
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault()

                        handleClose()
                    },
                }}
            >
                <DialogTitle sx={{ height: '20px' }}>Hehe</DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '500px',
                    }}
                >
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Status" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Partner Name" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Partner Last Name" variant="outlined" fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button
                        sx={{
                            background: '#e30f7a',
                            color: 'white',
                            textTransform: 'none',
                            maxHeight: '40px',
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default ModalEvent
