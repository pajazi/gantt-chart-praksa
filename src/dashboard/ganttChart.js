import { Gantt } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useState, useEffect, useMemo } from 'react'
import './filterBar.module.css'
const GanttChart = ({ stat, partner }) => {
    const { data, isLoading, isError, error } = useGetGanttEventsQuery()

    const tasks = useMemo(() => {
        return (
            data?.map((ev) => ({
                start: new Date(ev.dateStart),
                end: new Date(ev.dateEnd),
                name: `${ev.name} (${ev.status}) `,
                id: ev.id,
                type: ev.status,
                progress: 100,
                isDisabled: true,
                styles: { progressColor: '#e30f7a' },
            })) || []
        )
    }, [data])

    const tasksBuild = useMemo(() => {
        return (
            data?.map((ev) => ({
                start: new Date(ev.dateBuildStart),
                end: new Date(ev.dateBuildEnd),
                name: `${ev.name} (Build) `,
                id: ev.id + 1000,
                type: ev.status,
                progress: 100,
                isDisabled: true,
                styles: { progressColor: '#5caff4' },
            })) || []
        )
    }, [data])

    const allTasks = useMemo(() => {
        const maxLength = Math.max(tasks.length, tasksBuild.length)
        const combined = []
        for (let i = 0; i < maxLength; i++) {
            if (i < tasks.length) combined.push(tasks[i])
            if (i < tasksBuild.length) combined.push(tasksBuild[i])
        }
        return combined
    }, [tasks, tasksBuild])
    console.log(allTasks)

    const filtered = []
    const taskStatus = allTasks.filter((at) => at.type == stat)
    filtered.push(taskStatus)

    console.log(filtered)
    //type

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error?.message || 'Smt went wrong'}</div>
    }

    return (
        <div>
            {/* {filtered && !isLoading ? <Gantt tasks={filtered} /> : <Gantt tasks={allTasks} />} */}
            <Gantt tasks={allTasks} />
        </div>
    )
}
export default GanttChart
