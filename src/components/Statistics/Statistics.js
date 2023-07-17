import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({stats, title}) => { 
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title && 'Upload stats'}</h2>

            <ul className={styles.statList}>
                {
                    stats.map(({ id, label, percentage }) => {
                        return (
                        <li className={styles.item} key={id}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.percentage}>{percentage}%</span>
                            </li>  
                        )
                    })
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })),
    title: PropTypes.string,
}

export default Statistics;