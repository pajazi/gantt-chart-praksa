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
                    borderRadius: '10px',
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
                '.p-1': {
                    border: '1px solid gray',
                    color: 'gray',
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
                    width: '250px',
                    textAlign: 'center',
                    top: '70px',
                    right: '40px',
                    zIndex: '1000',
                    border: '0.5px solid gray',
                    '.h-9': {
                        color: 'gray',
                    },
                    button: {
                        width: '30px',
                        position: 'relative',
                        borderRadius: '5px',
                        textAlign: 'center',
                    },
                },
                '.justify-between': {
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                    '.space-x-1': {
                        display: 'flex',
                        flexDirection: 'row',
                    },
                    '.text-tremor-default': {
                        margin: '15px',
                        fontWeight: 'bold',
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
                    color="pink"
                />
            </div>
        </Box>
    )
}

export default RangePicker
