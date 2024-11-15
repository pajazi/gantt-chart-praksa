import { DateRangePicker } from '@tremor/react'
import { Box } from '@mui/material'

const RangePicker = ({ dateR, onRangeChange }) => {
    const handleChange = (dateRange) => {
        onRangeChange(dateRange)
    }

    return (
        <Box
            sx={{
                '*': {
                    boxSizing: 'border-box',
                    borderWidth: '0',
                    borderStyle: 'solid',
                    backgroundColor: 'white',
                },
                button: {
                    height: '40px !important',
                    display: 'inline-block',
                    margin: 0,
                    padding: 0,
                    textAlign: 'left',
                    textTransform: 'none',
                    WebkitAppearance: 'button',

                    cursor: 'pointer',
                },
                svg: {
                    maxWidth: '40px',
                    maxHeight: '40px',
                },

                '.tremor-DateRangePicker-calendarIcon': {
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    alignItems: 'center',
                    marginRight: '10px',
                },

                '.truncate': {
                    p: {
                        display: 'block',
                        maxWidth: '300px',
                        maxHeight: '40px',

                        whiteSpace: 'nowwrap',
                    },
                },
                '.w-full.rounded-tremor-default': {
                    display: 'flex',
                    flexDirection: 'row',
                },
                '.rdp': {
                    position: 'absolute',
                    width: '200px',
                    textAlign: 'center',
                    top: '150px',
                    right: '100px',
                    zIndex: '1000',

                    button: {
                        width: '30px',
                        position: 'relative',
                        backgroundColor: 'gray',
                    },
                },
            }}
        >
            <div className="flex flex-col items-center gap-y-4">
                <DateRangePicker
                    placeholder="Select"
                    enableSelect={false}
                    value={dateR}
                    onValueChange={handleChange}
                    enableYearNavigation
                    className="w-60"
                />
            </div>
        </Box>
    )
}

export default RangePicker
