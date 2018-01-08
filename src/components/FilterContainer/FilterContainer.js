import React, { Component } from 'react'
import './FilterContainer.css'

let filters = [
  {
    name:'Brannan'
  },
  {
    name:'Brooklyn'
  },
  {
    name:'Clarendon'
  },
  {
    name:'Gingham'
  },
  {
    name:'Inkwell'
  }
]

class FilterContainer extends Component {
  constructor (props) {
  super(props)
    this.state = {
      filters: filters
    }
  }

  render() {

    let allFilters = this.state.filters.map((filter, index) => {
      return (
        <div>
          <p className='individual-filters'>{filter.name}</p>
        </div>
      )
    })

    return (
      <div className='filter-container'>
        {allFilters}
      </div>
    )
  }
}

export default FilterContainer
