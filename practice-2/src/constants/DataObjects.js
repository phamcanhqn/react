  const ManufacturersData = [
  {
    id: 1,
    value: 'apple',
    label: 'Apple'
  },
  {
    id: 2,
    value: 'samsung',
    label: 'Samsung'
  },
  {
    id: 3,
    value: 'xiaomi',
    label: 'Xiaomi'
  },
  {
    id: 4,
    value: 'htc',
    label: 'HTC'
  }
];

const CategoriesData = [
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
  {
    id: 4,
    value: 'accessories',
    label: 'Accessories'
  }
];

const Columns = [
  {
    name: 'code',
    display: 'Code',
    elementType: 'input',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'name',
    display: 'Name',
    elementType: 'input',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'manufacturer',
    display: 'Manufacturer',
    elementType: 'dropdown',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'description',
    display: 'Description',
    elementType: 'input',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'category',
    display: 'Category',
    elementType: 'dropdown',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'price',
    display: 'Price',
    elementType: 'input',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'quantity',
    display: 'Quantity',
    elementType: 'input',
    isAllowedSort: true,
    isAllowedFilter: true,
  },
  {
    name: 'action',
    display: 'Action',
    elementType: 'label',
    isAllowedSort: false,
    isAllowedFilter: false,
  }
];

const ProductListData = [
  {
    id: 1502683724901,
    code: 'SM0003515',
    name: 'Iphone 7',
    manufacturer: 'apple',
    description: 'New product of apple in 2017',
    category: 'smartphone',
    price: 800,
    quantity: 100
  },
  {
    id: 1502683736718,
    code: 'SM0003518',
    name: 'Iphone 5',
    manufacturer: 'apple',
    description: 'Old product of apple in 2014',
    category: 'smartphone',
    price: 200,
    quantity: 188
  },
  {
    id: 1502683749124,
    code: 'HP0000045',
    name: 'HTC HD1234',
    manufacturer: 'htc',
    description: 'The best headphone',
    category: 'headphone',
    price: 100,
    quantity: 400
  },
  {
    id: 1502683759939,
    code: 'LT0004444',
    name: 'Macpro 2017',
    manufacturer: 'apple',
    description: 'New macpro of apple in 2017',
    category: 'laptop',
    price: 800,
    quantity: 100
  },
  {
    id: 1502683770036,
    code: 'SM00011111',
    name: 'HTC M9',
    manufacturer: 'htc',
    description: 'New product of HTC in 2017',
    category: 'smartphone',
    price: 500,
    quantity: 100
  }
];

const DefaultProduct = {
  id: null,
  code: '',
  name: '',
  manufacturer: '',
  description: '',
  category: '',
  price: null,
  quantity: null
}

export {Columns, ProductListData, ManufacturersData, CategoriesData, DefaultProduct};
