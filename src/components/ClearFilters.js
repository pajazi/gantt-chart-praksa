import Button from '@mui/material/Button'

const ClearFilters = () => {
    const handleRefresh = () => {
      
        window.location.reload()
    }
    return (
        <Button
            sx={{ background: '#e30f7a', color: 'white', textTransform: 'none', maxHeight: '40px' }}
            disableRipple
            onClick={handleRefresh}
        >
            Clear filters
        </Button>
    )
}

export default ClearFilters
