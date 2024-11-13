import RangePicker from '../components/tremor/DatePicker'
import PartnersSelect from '../components/partnersSelect'
import StatusSelect from '../components/statusSelect'
import ClearFilters from '../components/ClearFilters'
import styles from './filterBar.module.css'
const FilterBar = () => {
    
    return (
        <div className={styles.container}>
            <StatusSelect  />
            <PartnersSelect />
            <RangePicker />
            <ClearFilters />
        </div>
    )
}

export default FilterBar
