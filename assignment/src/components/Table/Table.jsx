import { PropTypes } from 'prop-types';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import styles from './Table.module.css';

export function Table({ data, columns }) {

  console.log(columns);
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHeader columns={columns}/>
          <TableBody tableData={data}/>
        </table>
      </div>

    </>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      "s.no": PropTypes.number.isRequired,
      "amt.pledged": PropTypes.number.isRequired,
      blurb: PropTypes.string.isRequired,
      by: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      "end.time": PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      "percentage.funded": PropTypes.number.isRequired,
      "num.backers": PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};
