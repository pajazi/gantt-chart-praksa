import { useGetPartnersQuery } from '../redux/slices/partnersSlice'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}
function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    }
}

const PartnersSelect = () => {
    const { data: partners } = useGetPartnersQuery()

    const theme = useTheme()
    const [personName, setPersonName] = useState('')

    const handleChange = (event) => {
        setPersonName(event.target.value)
    }
    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Select a Partner</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
            >
                {partners &&
                    partners.map((p) => (
                        <MenuItem
                            key={p.id}
                            value={p.firstname}
                            style={getStyles(p, personName, theme)}
                        >
                            {p.firstname} {p.lastname}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

export default PartnersSelect
