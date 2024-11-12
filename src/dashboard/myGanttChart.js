import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'

import { Fragment } from 'react'

const MyGanttChart = () => {
    const { data: events } = useGetGanttEventsQuery()

    const startDate = new Date('2023-08-20')
    const endDate = new Date('2023-09-15')

    const dates = []
    while (startDate <= endDate) {
        dates.push(new Date(startDate))
        startDate.setDate(startDate.getDate() + 1)
    }

    const formatDate = (dateS) => {
        const date = new Date(dateS)
        const options = { weekday: 'short' }
        const weekday = date.toLocaleDateString('en-US', options)
        const day = String(date.getDate()).padStart(2, 0)
        return `${weekday}, ${day}`
    }
    const formatDate2 = (dateS) => {
        const date = new Date(dateS)
        const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' }
        const formattedDate = date.toLocaleDateString('en-US', options)
        const parts = formattedDate.split(', ')
        const [weekday, dayMonth, year] = parts
        const [day, month] = dayMonth.split(' ')
        const finalDate = `${weekday} ${day} ${month} ${year}`
        return finalDate
    }
    return (
        <TableContainer component={Paper} sx={{ border: '1px solid black', width: 'max-content' }}>
            <Table sx={{ borderCollapse: 'collapse' }} stripe="odd">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>From</TableCell> <TableCell>To</TableCell>
                        {dates &&
                            dates.map((date, index) => (
                                <TableCell key={index}>{formatDate(date)}</TableCell>
                            ))}
                    </TableRow>
                </TableHead>
                <TableBody sx={{ border: '1px solid black' }}>
                    {events &&
                        events.map((row) => {
                            const eventStartDate = new Date(row.dateStart)
                            const eventEndDate = new Date(row.dateEnd)
                            const eventBuildStartDate = new Date(row.dateBuildStart)
                            const eventBuildEndDate = new Date(row.dateBuildEnd)

                            return (
                                <Fragment key={row.id}>
                                    <TableRow>
                                        <TableCell>
                                            {row.name} ({row.status})
                                        </TableCell>
                                        <TableCell>{formatDate2(row.dateStart)}</TableCell>
                                        <TableCell>{formatDate2(row.dateEnd)}</TableCell>
                                        {dates.map((date, index) => {
                                            const isInRange =
                                                date >= eventStartDate && date <= eventEndDate
                                            return (
                                                <TableCell
                                                    key={index}
                                                    align="center"
                                                    style={{ position: 'relative' }}
                                                >
                                                    {isInRange ? (
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                height: '30px',
                                                                backgroundColor: '#e30f7a',
                                                            }}
                                                        ></div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>{row.name} (Build)</TableCell>
                                        <TableCell>{formatDate2(row.dateBuildStart)}</TableCell>
                                        <TableCell>{formatDate2(row.dateBuildEnd)}</TableCell>
                                        {dates.map((date, index) => {
                                            const isInRange =
                                                date >= eventBuildStartDate &&
                                                date <= eventBuildEndDate
                                            return (
                                                <TableCell
                                                    key={index}
                                                    align="center"
                                                    style={{ position: 'relative' }}
                                                >
                                                    {isInRange ? (
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                width: '100%',
                                                                height: '30px',
                                                                backgroundColor: '#5caff4',
                                                            }}
                                                        ></div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                </Fragment>
                            )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MyGanttChart
