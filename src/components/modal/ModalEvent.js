import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const ModalEvent = ({ open, handleClose, idEv }) => {
    
    return (
        <form>
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
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={idEv.name.split(' ')[0]}
                        fullWidth
                    ></TextField>
                    <TextField
                        id="outlined-basic"
                        label="Status"
                        variant="outlined"
                        value={idEv.type}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Partner First Name"
                        value={idEv.idPartner.split(',')[1]}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Partner Last Name"
                        value={idEv.idPartner.split(',')[2]}
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        sx={{
                            background: '#e30f7a',
                            color: 'white',
                            textTransform: 'none',
                            maxHeight: '40px',
                        }}
                        type="submit"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}
export default ModalEvent
