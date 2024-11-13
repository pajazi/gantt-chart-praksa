import { Button } from '@mui/material'

const ClearFilters = () => {
    return (
        <Button
            sx={{ background: '#e30f7a', color: 'white', textTransform: 'none', maxHeight: '40px' }}
            disableRipple
        >
            Clear filters
        </Button>
    )
}

export default ClearFilters
