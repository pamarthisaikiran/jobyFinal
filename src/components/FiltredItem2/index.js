import './index.css'

const FilteredItems2 = props => {
  const {eachDetailss, onChangeEmpId, key} = props
  const {employmentTypeId, label, id} = eachDetailss

  const onChangeCheckBox = event => {
    onChangeEmpId(event)
  }

  return (
    <li className="list-fil">
      <input
        id="emptyp"
        className="check"
        value={employmentTypeId}
        onChange={onChangeCheckBox}
        type="checkbox"
      />
      <label htmlFor="emptyp" className="label">
        {label}
      </label>
    </li>
  )
}

export default FilteredItems2
