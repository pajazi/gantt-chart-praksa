import Button from '@mui/material/Button'

const ClearFilters = ({ onChange }) => {
    return (
        <Button
            sx={{ background: '#e30f7a', color: 'white', textTransform: 'none', maxHeight: '40px' }}
            disableRipple
            onClick={onChange}
        >
            Clear filters
        </Button>
    )
}

export default ClearFilters
