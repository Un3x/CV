import React from 'react'
import './Category.css'

const Category = (props) => (
  <div className="category">
    <div className="categoryTitle">
      {props.title}
    </div>
    <div>
      {props.children}
    </div>
  </div>
)

export default Category
