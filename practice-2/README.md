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
```
  <button
    type="button"
    name={props.name}
    className={props.className}
    onClick={props.handleClick}>
    {props.label}
  </button>
```
* Use it
```
  <Button
      name="btn-filter"
      className="btn"
      handleClick={this.handleFilterAction}
      label="Filter"/>
```
### Input
### SortIcon
### Dropdown

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
