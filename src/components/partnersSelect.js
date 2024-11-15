import { useGetPartnersQuery } from '../redux/slices/partnersSlice'

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'


const PartnersSelect = ({ partner, onPartnerChange }) => {
    const { data } = useGetPartnersQuery()

    const handleChange = (e) => {
        onPartnerChange(e.target.value)
    }
    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Select a Partner</InputLabel>
            <Select
                sx={{ height: '50px' }}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={partner}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
            >
                {data &&
                    data.map((p) => (
                        <MenuItem key={p.id} value={p.id}>
                            {p.firstname} {p.lastname}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

export default PartnersSelect
