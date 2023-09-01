import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ filterText, handleFilter }) => {
  return (
    <>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={filterText}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
