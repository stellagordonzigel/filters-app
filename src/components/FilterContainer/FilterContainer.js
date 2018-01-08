import React, { Component } from 'react'
import './FilterContainer.css'
import $ from 'jquery'

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
      filters: filters,
      buttonClicked: false,
      filterChoice: ''
    }
  }

  onClickFilter (e) {
    e.preventDefault()
    this.setState({
      buttonClicked: true,
      filterChoice: e.target.name
    }, () => {
      let filter = this.state.filterChoice.toLowerCase()
      $('#images')[0].className=''
      $('#images')[0].className= filter
    })
  }

  render() {
    let allFilters = this.state.filters.map((filter, index) => {
      return (
        <div key={index}>
            <button className='individual-filters' name={filter.name} onClick={e => this.onClickFilter(e)}>
              {filter.name}
            </button>
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
