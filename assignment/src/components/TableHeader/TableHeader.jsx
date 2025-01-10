import PropTypes from "prop-types";

export function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns?.map((colItem) => (
          <th key={colItem}>{colItem}</th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};
