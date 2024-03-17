import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000"
  },
  {
    id: 2,
    title: "Apple iPhone 13",
    price: "Rs. 70,000"
  },
  {
    id: 3,
    title: "Google Pixel 7",
    price: "Rs. 50,000"
  },
  {
    id: 4,
    title: "Nokia 1100",
    price: "Rs. 2,000"
  },
  {
    id: 5,
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000"
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  }
];

export default function Products() {
    return (
    <div>
        {products.map((product) => {
        return <ProductCard product={product} key={product.title}/>
        })}
    </div>
    );
}

// Usecase : 10x ProductCards with individual numbering
// pass parameter ex: name="1", price="20"
// hardcoded values are wrong, need to loop through

// map function in JS - cleaner version of for loop
// map(fn(item,index)) - reference
// [1,2,3] => [2,4,6] (double)
// Array.prototype.double = function() {
//    return this.map((item) => item*2);
// }

// Warning : Each child in a list should have a unique "key" prop.
// Because of the use of map, all have same identifier, no separation
// We need id in order to compare in Virual DOM.
// In this case, key={product.title} adds uniqueness
// It is required only in loops