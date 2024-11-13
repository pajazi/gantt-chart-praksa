import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'

const data = [
    { id: 1, value: 'Production' },
    { id: 2, value: 'Closed' },
    { id: 3, value: 'Offer' },
    { id: 4, value: 'Cancelled' },
]
const StatusSelect = () => {
    const [statusValue, setStatus] = useState('')

    const handleChange = (event) => {
        setStatus(event.target.value)
    }
    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Select a Status</InputLabel>
            <Select
                sx={{ height: '50px' }}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={statusValue}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
            >
                {data &&
                    data.map((p) => (
                        <MenuItem key={p.id} value={p.value}>
                            {p.value}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

export default StatusSelect
