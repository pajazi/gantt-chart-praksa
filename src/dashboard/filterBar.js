import PartnersSelect from '../components/partnersSelect'
import StatusSelect from '../components/statusSelect'
import styles from './filterBar.module.css'
const FilterBar = () => {
    return (
        <div className={styles.container}>
            <StatusSelect />
            <PartnersSelect />
        </div>
    )
}

export default FilterBar
