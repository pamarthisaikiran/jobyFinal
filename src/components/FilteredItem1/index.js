import './index.css'

const FilteredItems1 = props => {
  const {eachSalary, onChangeSalary, key} = props
  const {salaryRangeId, label, id} = eachSalary

  const onChangeRadio = event => {
    onChangeSalary(event)
  }

  return (
    <li className="list-fil">
      <input
        value={salaryRangeId}
        onChange={onChangeRadio}
        type="radio"
        name="radio"
      />
      <label className="label">{label}</label>
    </li>
  )
}

export default FilteredItems1
