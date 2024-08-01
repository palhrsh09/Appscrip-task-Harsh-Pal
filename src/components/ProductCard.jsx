export default function ProductCard({ product }) {
  return (
    <div className="product-card flex flex-col">
      <div className="border rounded-lg overflow-hidden flex flex-col h-full">
        <div className="relative w-full pb-[100%]">
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h3 className="font-bold text-sm sm:text-base mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-gray-700 text-sm sm:text-base">${product.price}</p>
        </div>
      </div>
    </div>
  );
}