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

const HeaderColumns = [
  {
    name: 'code',
    display: 'Code',
    isAllowedSort: true
  },
  {
    name: 'name',
    display: 'Name',
    isAllowedSort: true
  },
  {
    name: 'manufacturer',
    display: 'Manufacturer',
    isAllowedSort: true
  },
  {
    name: 'description',
    display: 'Description',
    isAllowedSort: true
  },
  {
    name: 'category',
    display: 'Category',
    isAllowedSort: true
  },
  {
    name: 'price',
    display: 'Price',
    isAllowedSort: true
  },
  {
    name: 'quantity',
    display: 'Quantity',
    isAllowedSort: true
  },
  {
    name: 'action',
    display: 'Action',
    isAllowedSort: false
  }
];

const ProductListData = {
  data: [
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
  ]
};

const DefaultProduct = {
  id: new Date().valueOf(),
  code: '',
  name: '',
  manufacturer: '',
  description: '',
  category: '',
  price: null,
  quantity: null
}
export {HeaderColumns, ProductListData, ManufacturersData, CategoriesData, DefaultProduct};
