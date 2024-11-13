import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import FilterBar from '../dashboard/filterBar.js'
//import GanttChart from '../dashboard/ganttChart.js'
import GanttChart from '../dashboard/ganttChart.js'
import RangePicker from '../components/tremor/DatePicker'
import PartnersSelect from '../components/partnersSelect'
import StatusSelect from '../components/statusSelect'
import ClearFilters from '../components/ClearFilters'
import styles from '../dashboard/filterBar.module.css'
import { useState } from 'react'

export default function Home() {
    // const { isFetching: isFetchingEvents } = useGetGanttEventsQuery()

    // const isFetching = isFetchingEvents
    const [stat, setStatus] = useState('')
    const [partner, setPartner] = useState('')
    const handleStatusChange = (newStat) => {
        setStatus(newStat)
    }
    const handelPartnerChange = (newPartner) => {
        setPartner(newPartner)
    }
    return (
        <>
            {/* <FilterBar /> */}
            <div className={styles.container}>
                <StatusSelect onStatusChange={handleStatusChange} />
                <PartnersSelect onPartnerChange={handelPartnerChange} />
                <RangePicker />
                <ClearFilters />
            </div>

            <GanttChart stat={stat} partner={partner} />
        </>
    )
}
