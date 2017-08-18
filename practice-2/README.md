# Practice 2: Create Product Managenent Application

## Time
* 4 days

## Target
* Apply what learned about React basic and advanced to this practice
* Know how to breakdown components
* Know how to create a component
* Know when we need use state or props
* Apply some HOC functions to this practice

## Requirements:
* Show a product list
* User can filter product by specific data
* User can sort desc or asc on product lis
* User can CRUD a product on list

## Component Examples
### Button
* Use it

```
let clickFucntion = () => {
  alert('Button clicked!');
}

let name = 'btn-button;
  <Button
      name={name}
      className="btn"
      handleClick={clickFucntion}
      label="Button"/>
}

```

### Input
* Use it

```
let name = 'product-name';
let class = 'name-input';
let nameValue = 'Sony';
let changeDataFunction = () => {
  alert('User is editing!')
}

<Input
  name={name}
  className={class}}
  value={nameValue}
  handleChange={changeDataFunction} />

```

### SortIcon
* Use it

```
let sortClass = 'sort-icon desc-sort';

<SortIcon className={sortClass} />

```
### Dropdown
* Use it

```
let name = 'categories';
let className = 'category-select';
let options = [
  {
    id: 1,
    value: 'smartphone',
    label: 'Smartphone'
  },
  {
    id: 2,
    value: 'laptop',
    label: 'Laptop'
  },
  {
    id: 3,
    value: 'headphone',
    label: 'Headphone'
  },
];
let value = 'laptop';
let changeFunction = () => {
  alert('User has changed!')
}
<DropdownSelect
  name={name}
  className={className}
  options={options}
  value={value}
  handleChange={changeFunction} />

```

### Filter Product
* Use it

```
let filterValueInput = {
  description :"Apple des",
  name: "Iphone"
};

let filterFields = [
  {
    name: 'name',
    display: 'Name',
    elementType: 'input',
    isAllowedFilter: true,
  },
  {
    name: 'description',
    display: 'Description',
    elementType: 'input',
    isAllowedFilter: true,
  }
];

let manufacturers = [
  {
    id: 1,
    value: 'apple',
    label: 'Apple'
  },
  {
    id: 2,
    value: 'samsung',
    label: 'Samsung'
  }
];

let categories= [
  {
    id: 1,
    value: 'smartphone',
    label: 'Smartphone'
  },
  {
    id: 2,
    value: 'laptop',
    label: 'Laptop'
  },
];

<FilterProduct
  formRef={form => {this.filterForm = form}}
  filterValue={filterValueInput}
  filterColumns={filterFields}
  manufacturerOptions={manufacturers}}
  categoryOptions={categories}
  handleFilterAction={handleFillterAction}
  handleClearAction={handleClearAction}
  handleChangeFilterValue={handleChangeFilterValue} />

```

### Header Product List

* Use it

```
let handleSortAction = () => {
  alert('User is sorted!')
}
let columns = [{
    name: 'name',
    display: 'Name',
    elementType: 'input',
    isAllowedSort: true
  },
  {
    name: 'description',
    display: 'Description',
    elementType: 'input',
    isAllowedSort: true
  }
];
let sortType = 'asc-sort';
let sortBy = 'name';
<ProductListHeader
  handleSortClick={handleSortAction}
  headerColumns={columns}
  sortType={sortType}
  sortBy={sortBy} />

```
### Product Row

* Use it

```
let productId =
let isEditMode = false;
let productData = {
  id: 1502683724901,
  name: 'Iphone 7',
  description: 'New product of apple in 2017'
};
let dataColumns = [{
    name: 'name',
    display: 'Name',
    elementType: 'input'
  },
  {
    name: 'description',
    display: 'Description',
    elementType: 'input'
  }
];
let manufacturerOptions = [
  {
    id: 1,
    value: 'apple',
    label: 'Apple'
  },
  {
    id: 2,
    value: 'samsung',
    label: 'Samsung'
  }
];
let categoryOptions = [
  {
    id: 1,
    value: 'smartphone',
    label: 'Smartphone'
  },
  {
    id: 2,
    value: 'laptop',
    label: 'Laptop'
  },
];

let handleEditAction = () => {
  alert('User edit product');
}
let handleSaveAction = () => {
  alert('User Save product');
}
let handleCancelAction = () => {
  alert('User cancel product');
}
let handleDeleteAction = () => {
  alert('User delete product');
}
let handleChangeValueAction = () => {
  alert('User change data product');
}
<ProductRow
  id={productId}
  isEditMode={isEditMode}
  key={productId}
  product={productData}
  dataColumns={dataColumns}
  manufacturerOptions={manufacturerOptions}
  categoryOptions={categoryOptions}
  handleButtonEdit={handleEditAction}
  handleButtonSave={handleSaveAction}
  handleButtonCancel={handleCancelAction}
  handleButtonDelete={handleDeleteAction}
  handleChangeValue={handleChangeValueAction} />

```
### Product List

* Use it

```
let manufacturers = [
  {
    id: 1,
    value: 'apple',
    label: 'Apple'
  },
  {
    id: 2,
    value: 'samsung',
    label: 'Samsung'
  }
];
let categories = [
  {
    id: 1,
    value: 'smartphone',
    label: 'Smartphone'
  },
  {
    id: 2,
    value: 'laptop',
    label: 'Laptop'
  },
];
let columns = [{
    name: 'name',
    display: 'Name',
    elementType: 'input'
  },
  {
    name: 'description',
    display: 'Description',
    elementType: 'input'
  }
];
let productEditing = {
  id: 1502683724901,
  name: 'Iphone 7',
  description: 'New product of apple in 2017'
};
let handleEditAction = () => {
  alert('User edit product');
}
let handleSaveAction = () => {
  alert('User Save product');
}
let handleCancelAction = () => {
  alert('User cancel product');
}
let handleDeleteAction = () => {
  alert('User delete product');
}
let handleChangeValueAction = () => {
  alert('User change data product');
}
<ProductList
  manufacturerOptions={manufacturers}
  categoryOptions={categories}
  dataColumns={columns}
  products={products}
  productEditing={productEditing}
  handleChangeValueAction={handleChangeValueAction}
  handleEditAction={handleEditAction}
  handleSaveAction={handleSaveAction}
  handleCancelAction={handleCancelAction}
  handleDeleteAction={handleDeleteAction} />

```

## Run Practice

mkdir react-practice-2

cd react-practice-2

git clone git@gitlab.asoft-python.com:g-canhpham/react-training.git

git checkout -b feature/practice-2

git pull origin feature/practice-2

cd practice-2

npm install

npm start

Run local: `http://localhost:3000`

## Link reference
* [React](https://facebook.github.io/react)
