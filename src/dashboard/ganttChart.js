import { Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useEffect, useMemo, useState } from 'react'
import './filterBar.module.css'
import ModalEvent from '../components/ModalEvent'
const GanttChart = ({ stat, partner }) => {
    const [tasksStat, setTaskStatsus] = useState([])
    const [tasksPart, setTaskPartners] = useState([])
    const [partAndStat, setTaskPartnersAndStatus] = useState([])
    const [modal, showModal] = useState(false)

    const { data: events, isLoading, isError, error } = useGetGanttEventsQuery()

    const tasks = useMemo(() => {
        return (
            events?.map((ev) => ({
                start: new Date(ev.dateStart),
                end: new Date(ev.dateEnd),
                name: `${ev.name} (${ev.status}) `,
                id: ev.id,
                idPartner: ev.partner.id,
                type: ev.status,
                progress: 100,
                isDisabled: true,
                styles: { progressColor: '#e30f7a' },
            })) || []
        )
    }, [events])

    const tasksBuild = useMemo(() => {
        return (
            events?.map((ev) => ({
                start: new Date(ev.dateBuildStart),
                end: new Date(ev.dateBuildEnd),
                name: `${ev.name} (Build) `,
                id: ev.id + 1000,
                idPartner: ev.partner.id + 100,
                type: ev.status,
                progress: 100,
                isDisabled: true,
                styles: { progressColor: '#5caff4' },
            })) || []
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

    const onDblClick = () => {
        showModal(true)
        console.log(modal)
    }
    useEffect(() => {
        if (!isLoading && !isError) {
            const taskStatus = tasks.filter((at) => at.type == stat)
            setTaskStatsus(taskStatus)
        }
    }, [tasks, stat, isLoading, isError, events])

    useEffect(() => {
        if (!isLoading && !isError) {
            const taskPartner = tasks.filter((ev) => ev.idPartner == partner)
            setTaskPartners(taskPartner)
        }
    }, [partner, isLoading, isError, tasks])

    useEffect(() => {
        if (!isLoading && !isError) {
            const taskPartnerAndStatus = tasks.filter(
                (ev) => ev.idPartner == partner && ev.type == stat,
            )
            setTaskPartnersAndStatus(taskPartnerAndStatus)
        }
    }, [partner, stat, isLoading, isError, tasks])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error?.message || 'Smt went wrong'}</div>
    }

    return (
        <div>
            {tasksStat.length === 0 && tasksPart.length === 0 && partAndStat.length === 0 ? (
                <Gantt tasks={allTasks} onClick={onDblClick} />
            ) : (
                <>
                    {tasksStat.length > 0 && !tasksPart.length > 0 && (
                        <Gantt tasks={tasksStat} onClick={onDblClick} />
                    )}
                    {tasksPart.length > 0 && !tasksStat.length > 0 && (
                        <Gantt tasks={tasksPart} onClick={onDblClick} />
                    )}
                    {partAndStat.length > 0 && <Gantt tasks={partAndStat} onClick={onDblClick} />}
                </>
            )}
            {modal && <ModalEvent open={modal} handleClose={() => showModal(false)} />}
        </div>
    )
}
export default GanttChart
