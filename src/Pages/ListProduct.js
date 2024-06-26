import React, { useState } from "react";
import products from "../Api/Product";

function ListProduct() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductHover = (productId) => {
    setHoveredProduct(productId);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-10">
        <div className="flex">
          <ul className="text-none flex px-10 text-[11px] font-thin text-[#999]  ">
            <li className="px-2 py-4">
              <a href="/">TRANG CHỦ </a>
            </li>
            <li className="px-2 py-4">
              <a href="/">BÁNH & THỰC PHẨM CHẾ BIẾN SẴN </a>
            </li>
            <li className="px-2 py-4">
              <a href="/">BÁNH </a>
            </li>
            <li className="px-2 py-4 text-black ">
              <a href="/">BÁNH MẶN - NGỌT </a>
            </li>
          </ul>
        </div>
        <div className="mx-10 flex bg-white justify-between items-center p-3 text-[13px]">
          <div className="font-bold text-1.5xl">BÁNH MẶN - NGỌT</div>
          <div className="flex items-center">
            <div className="mr-2">Sắp xếp theo : </div>
            <select className="p-1 border rounded">
              <option value="default">Mặc định</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="name-desc">Tên Z-A</option>
              <option value="price-desc">Giá thấp - cao</option>
              <option value="price-asc">Giá cao - thấp</option>
              <option value="price-voteasc">Bình chọn - cao nhất</option>
              <option value="price-votedesc">Bình chọn - thấp nhất</option>
              <option value="best-seller">Best selling</option>
            </select>
          </div>
        </div>
        <div className="mx-10  bg-white mt-1 cursor-pointer grid grid-cols-5 gap-0.5">
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-4 rounded shadow transition duration-300 ${
                hoveredProduct === product.id ? "hover:shadow-2xl sha" : ""
              }`}
              onMouseEnter={() => handleProductHover(product.id)}
              onMouseLeave={handleProductLeave}
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center pl-2">
                <div className="flex items-center">
                  <div className="voteStart mr-2">{product.rating} ★</div>
                </div>
                <div className="text-left justify-between items-center mb-2">
                  <div
                    className={`nameProduct font-thin ${
                      hoveredProduct === product.id
                        ? "hover:text-amber-500"
                        : ""
                    } pb-2`}
                  >
                    {product.name}
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <div className="price font-bold text-[14px]">
                      {product.price}
                    </div>
                    <button className="flex  bg-white px-2 py-2 rounded border-2 hover:bg-amber-500 ">
                      <i className="fa-solid fa-heart hover:text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListProduct;
