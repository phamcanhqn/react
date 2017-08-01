import React, {Component} from 'react';

class ProductCategoryRow extends Component {
	render() {
		return (
			<tr>
				<th colSpan='2'>{this.props.category}</th>
			</tr>
		);
	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	handleSearchTextChange = (event) => this.props.onTextSearchChange(event.target.value)
	handleInStockCheckChange = (event) => this.props.onInStockCheckChange(event.target.checked)

	render() {
		return (
			<form>
				<input
					type='text'
					value={this.props.searchText}
					placeholder='Search...'
					onChange={this.handleSearchTextChange} />
				<p>
					<input
						type='checkbox'
						checked={this.props.inStockOnly}
						onChange={this.handleInStockCheckChange} />
				</p>
				Only show products in stock.
			</form>
		);
	}
}

class ProductTable extends Component {
	render() {
		var rows = [];
		var lastCategory = null;

		this.props.products.forEach((product) => {
			if (product.name.indexOf(this.props.searchText) === -1 ||
				(!product.stocked && this.props.inStockOnly)) {
				return;
			}

			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}

			rows.push(<ProductRow product={product} key={product.name} />);

			lastCategory = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

class ProductRow extends Component {
	render() {
		const name = this.props.product.stocked ?
			this.props.product.name :
			<span style={{color: 'red'}}>
				{this.props.product.name}
			</span>

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);

		this.state = {searchText: '', inStockOnly: false};
	}

	handleSearchTextInput = (text) => this.setState({searchText: text})
	handleInStockInput = (inStockOnly) => this.setState({inStockOnly: inStockOnly})

	render() {
		return (
			<div>
				<SearchBar
					searchText={this.state.searchText}
					onTextSearchChange={this.handleSearchTextInput}
					inStockOnly={this.state.inStockOnly}
					onInStockCheckChange={this.handleInStockInput} />
				<ProductTable
					products={this.props.products}
					searchText={this.state.searchText}
					inStockOnly={this.state.inStockOnly} />
			</div>
		);
	}
}

export default FilterableProductTable;