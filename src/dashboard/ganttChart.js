import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useState, useEffect } from 'react'
const GanttChart = () => {
    const [tasks, setTasks] = useState([])
    const { data } = useGetGanttEventsQuery()

    console.log(data)

    const array =
        data &&
        data.map((ev) => ({
            name: ev.name,
            id: ev.id,
            start: ev.dateStart ? new Date(ev.dateStart) : null,
            end: ev.dateEnd ? new Date(ev.dateEnd) : null,
            type: ev.status,
            progress: 100,
            isDisabled: true,
            styles: { progressColor: '#e30f7a' },
        }))
    useEffect(() => {
        setTasks(array)
    }, [data])

    console.log('Mapped tasks:', tasks) //nekad je undefined nekad je ok

    return <Gantt tasks={tasks} />
}
export default GanttChart
