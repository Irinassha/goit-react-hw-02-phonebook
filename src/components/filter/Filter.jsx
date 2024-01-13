export const Filter = ({ filter, filterName }) => {
  return (
    <div>
      <h3>Find contact by name</h3>
      <input type="text" name="filter" value={filter} onChange={filterName}></input>
    </div>
  );
};