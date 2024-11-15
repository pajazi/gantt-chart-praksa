import GanttChart from '../dashboard/ganttChart.js'
import RangePicker from '../components/tremor/DatePicker'
import PartnersSelect from '../components/partnersSelect'
import StatusSelect from '../components/statusSelect'
import ClearFilters from '../components/ClearFilters'
import styles from '../dashboard/filterBar.module.css'
import { useState } from 'react'

export default function Home() {
    const [stat, setStatus] = useState('')
    const [partner, setPartner] = useState('')
    const [dateRange, setDateRange] = useState({ from: null, to: null })
    const handleStatusChange = (newStat) => {
        setStatus(newStat)
    }
    const handelPartnerChange = (newPartner) => {
        setPartner(newPartner)
    }
    const handleDateRangeChange = (newRange) => {
        setDateRange(newRange)
    }
    console.log('Date range in index.js', dateRange)
    const handleChange = () => {
        setStatus('')
        setPartner('')
        setDateRange({ from: null, to: null })
    }
    return (
        <>
            <div className={styles.container}>
                <StatusSelect stat={stat} onStatusChange={handleStatusChange} />
                <PartnersSelect partner={partner} onPartnerChange={handelPartnerChange} />
                <RangePicker dateR={dateRange} onRangeChange={handleDateRangeChange} />
                <ClearFilters onChange={handleChange} />
            </div>

            <GanttChart stat={stat} partner={partner} dateRange={dateRange} />
        </>
    )
}
