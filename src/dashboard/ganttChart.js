import { Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useEffect, useMemo, useState } from 'react'
import styles from './filterBar.module.css'
import ModalEvent from '../components/modal/ModalEvent'

const GanttChart = ({ stat, partner, dateRange }) => {
    const [tasksStat, setTaskStatsus] = useState([])
    const [tasksPart, setTaskPartners] = useState([])
    const [dateR, setTaskDate] = useState([])
    const [modal, showModal] = useState(false)
    const [id, setID] = useState('')

    const { data: events, isLoading, isError, error } = useGetGanttEventsQuery()

    const tasks = useMemo(() => {
        return (
            events?.map((ev) => ({
                start: new Date(ev.dateStart),
                end: new Date(ev.dateEnd),
                name: `${ev.name} (${ev.status}) `,
                id: ev.id,
                idPartner: `${ev.partner.id},${ev.partner.firstname},${ev.partner.lastname}`,
                type: ev.status,
                isDisabled: true,
                styles: { backgroundColor: '#e30f7a', backgroundSelectedColor: '#e30f7a' },
            })) || []
        )
    }, [events])

    const tasksBuild = useMemo(() => {
        return (
            events?.map((ev) => {
                const start =
                    ev.dateBuildStart == null ? new Date('2023-06-01') : new Date(ev.dateBuildStart)
                const end =
                    ev.dateBuildEnd == null ? new Date('2023-12-01') : new Date(ev.dateBuildEnd)
                return {
                    start,
                    end,
                    name: `${ev.name} (Build)`,
                    id: ev.id + 1000,
                    idPartner: `${ev.partner.id},${ev.partner.firstname},${ev.partner.lastname}`,
                    type: 'Build',
                    isDisabled: true,
                    styles: { backgroundColor: '#5caff4', backgroundSelectedColor: '#5caff4' },
                }
            }) || []
        )
    }, [events])

    const allTasks = useMemo(() => {
        const maxLength = Math.max(tasks.length, tasksBuild.length)
        const combined = []
        for (let i = 0; i < maxLength; i++) {
            if (i < tasks.length) combined.push(tasks[i])
            if (i < tasksBuild.length) combined.push(tasksBuild[i])
        }
        return combined
    }, [tasks, tasksBuild])

    const displayModal = (id) => {
        showModal(true)
        setID(id)
        console.log(modal)
    }
    const normalizeToUTC = (dateStr) => {
        const date = new Date(dateStr)
        date.setHours(0, 0, 0, 0)
        return date
    }
    useEffect(() => {
        if (!isLoading && !isError) {
            const filteredTasks = tasks.filter((task) => {
                const matchedStatus = stat ? task.type == stat : true
                const matchedPartner = partner ? task.idPartner.split(',')[0] == partner : true
                const matchedDate = dateRange
                    ? normalizeToUTC(task.start) >= normalizeToUTC(dateRange.from) &&
                      normalizeToUTC(task.end) <= normalizeToUTC(dateRange.to)
                    : true

                return matchedStatus && matchedPartner && matchedDate
            })

            setTaskStatsus(filteredTasks.filter((task) => task.type == stat))
            setTaskPartners(filteredTasks.filter((task) => task.idPartner.split(',')[0] == partner))
            setTaskDate(
                filteredTasks.filter(
                    (task) =>
                        normalizeToUTC(task.start) >= normalizeToUTC(dateRange.from) &&
                        normalizeToUTC(task.end) <= normalizeToUTC(dateRange.to),
                ),
            )
        }
    }, [tasks, stat, partner, dateRange, isLoading, isError])

    const filteredAll = [...tasksStat, ...tasksPart, ...dateR]
    const finalTask = filteredAll.filter(
        (task, index, self) => index === self.findIndex((t) => t.id === task.id),
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error?.message || 'Smt went wrong'}</div>
    }

    return (
        <div>
            {tasksStat.length === 0 &&
            tasksPart.length === 0 &&
            dateR.length === 0 &&
            !stat &&
            !partner &&
            !dateRange ? (
                <Gantt tasks={allTasks} onClick={displayModal} listCellWidth={200} />
            ) : tasksStat.length === 0 && tasksPart.length === 0 && dateR.length === 0 ? (
                <div className={styles.noMatch}>
                    <b>ⓘ There are no events from the specified criteria.</b>
                </div>
            ) : (
                <>{<Gantt tasks={finalTask} onClick={displayModal} listCellWidth={200} />}</>
            )}
            {modal && <ModalEvent open={modal} handleClose={() => showModal(false)} idEv={id} />}
        </div>
    )
}
export default GanttChart
