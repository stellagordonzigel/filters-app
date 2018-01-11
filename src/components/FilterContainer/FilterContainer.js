import React, { Component } from 'react'
import './FilterContainer.css'
import $ from 'jquery'

let filters = [
  {
    name:'Amaro'
  },
  {
    name:'Aden'
  },
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
    name:'Hudson'
  },
  {
    name:'Inkwell'
  },
  {
    name:'Lofi'
  },
  {
    name:'Mayfair'
  },
  {
    name:'Nashville'
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
      let filterClass = filter.name.toLowerCase()
      return (
        <div className='sample-filter-image-container' key={index}>
          <img className={filterClass} src="https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg" alt='Filter previews'/>

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
