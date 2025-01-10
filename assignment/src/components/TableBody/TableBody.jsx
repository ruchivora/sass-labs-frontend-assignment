import PropTypes from "prop-types";

export function TableBody({tableData}) {
  return(
    <tbody>
      {tableData.map((item, index) => (
        <tr key={item["s.no"]} aria-label={index}>
          <td >{item["s.no"]}</td>
          <td>{item["percentage.funded"]}</td>
          <td>{item["amt.pledged"]}</td>
        </tr>
      ))}
    </tbody> 
  )
}

TableBody.propTypes = {
  tableData: PropTypes.arrayOf(
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
};