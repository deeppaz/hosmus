import React, { Component } from 'react'
import './style.css'

class Skeleton extends Component {
	render() {
		return (
			<div className="SkeletonContainer">
				<span className="SkeletonImg skeleton"></span>
				<span className="SkeletonPaletteImage skeletonColor"></span>
				<span className="SkeletonButton skeleton"></span>
			</div>
		)
	}
}

export default Skeleton
