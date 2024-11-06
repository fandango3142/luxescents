import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

export function Cart() {
  const [cartItems] = useState<CartItem[]>([]);
  const total = cartItems.reduce((sum, item) => {
    const price = item.product.isOnSale ? 
      (item.product.salePrice || 0) : 
      item.product.sizes.find(s => s.size === item.size)?.price || 0;
    return sum + (price * item.quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Start shopping to add items to your cart</p>
          <Link
            to="/catalog"
            className="mt-6 inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow">
          {cartItems.map((item) => (
            <div key={`${item.product.id}-${item.size}`} className="flex items-center p-6 border-b">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                <p className="text-gray-500">{item.size}</p>
                <div className="mt-1 flex items-center">
                  <select
                    value={item.quantity}
                    onChange={() => {}}
                    className="border rounded-md text-gray-900 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button className="ml-4 text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="ml-6">
                <p className="text-lg font-medium text-gray-900">
                  ${item.product.isOnSale ? item.product.salePrice : 
                    item.product.sizes.find(s => s.size === item.size)?.price}
                </p>
              </div>
            </div>
          ))}
          
          <div className="p-6">
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-gray-900 text-white px-6 py-3 text-center rounded-md hover:bg-gray-800"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;