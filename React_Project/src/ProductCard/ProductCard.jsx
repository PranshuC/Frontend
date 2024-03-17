import "./ProductCard.css"
export default function ProductCard(props) {
    return (
    <div className="card">
        Product Card 
        <span>{props.product.title}</span>
        <div>{props.product.price}</div>
    </div>
    );
}

// JS can parse only values within {}
// props can be named anything, ex : p
// passed from parent, called "props" but not keyword
// props is anything that can customise based on input
// className instead of class because JSX
// & class is a keyword in JS

// Files can have extension "jsx"/"js" - React understands both
// "jsx" - more recognised