const datalayer = {
  event: "add_to_cart",
  gtm: {uniqueEventId: 8, start: 1770048422903},
  pagePostType: "product",
  pagePostType2: "single-product",
  pagePostAuthor: "wordpress",
  productRatingCounts: [],
  productAverageRating: 0,
  productReviewCount: 0,
  productType: "simple",
  productIsVariable: 0,

  
  ecommerce: { currency: "USD",
    value: 35, 
    items: [
      {
        item_id: 168,
        item_name: "Assorted Coffee",
        sku: 168,
        price: "35.00",
        stocklevel: null,
        stockstatus: "instock",
        google_business_vertical: "retail",
        item_category: "Juice",
        id: 168,
        item_list_name: "Related Products",
        index: 1,
        product_type: "simple",
        item_brand: "",
        quantity: "1"
      },
      {
        item_id: 174,
        item_name: "Farm Fresh Eggs",
        sku: 174,
        price: "34.00",
        stocklevel: null,
        stockstatus: "instock",
        google_business_vertical: "retail",
        item_category: "Juice",
        id: 174,
        item_list_name: "Related Products",
        index: 2,
        product_type: "simple",
        item_brand: ""
      },
      {
        item_id: 157,
        item_name: "Cashew Butter",
        sku: 157,
        price: "25.00",
        stocklevel: null,
        stockstatus: "instock",
        google_business_vertical: "retail",
        item_category: "Juice",
        id: 157,
        item_list_name: "Related Products",
        index: 3,
        product_type: "simple",
        item_brand: ""
      }
    ]
  } 
} ;


let a = datalayer.ecommerce.items;

console.log (a);