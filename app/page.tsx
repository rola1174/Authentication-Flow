// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex flex-col bg-white font-sans">
//       <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 shadow-md">
//         <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2 sm:mb-0">TinyTales</h1>
//         <div className="flex space-x-3">
//           <button
//             className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-sm sm:text-base"
//             onClick={() => router.push("/login")}
//           >
//             Sign In
//           </button>
//           <button
//             className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition text-sm sm:text-base"
//             onClick={() => router.push("/register")}
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>

//       <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-4 sm:px-10 md:px-20 py-12 sm:py-16">
//         <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//             Create Magical Stories for Kids Instantly
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base mb-6">
//             Generate AI-powered stories in seconds. Bring imagination to life with TinyTales.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
//             <button
//               className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
//               onClick={() => router.push("/login")}
//             >
//               Get Started
//             </button>
//             <button
//               className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm sm:text-base"
//               onClick={() => router.push("/register")}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>

//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src="/flat-women-s-day-superwoman-illustration_52683-81107.avif"
//             alt="TinyTales Illustration"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
//           />
//         </div>
//       </section>

//       <footer className="text-center py-6 text-gray-500 border-t text-xs sm:text-sm">
//         © 2026 TinyTales. All rights reserved.
//       </footer>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const relatedProducts = [
    {
      id: 1,
      name: "White Hoodie",
      price: 200,
      img: "/hoodie.png",
    },
    {
      id: 2,
      name: "Gray Jacket",
      price: 250,
      img: "/redhoodie.png",
    },
    {
      id: 3,
      name: "Brown Shirt",
      price: 180,
      img: "/blackhoodie.png",
    },
  ];

  return (
    <main className="bg-[#F5F5F5] min-h-screen pb-20">
      {/* ================= HERO HEADER ================= */}
      <div className="relative w-full h-[284px] bg-[#F5F5F5] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[354px] h-[1442px] bg-no-repeat bg-cover -rotate-90"
          // style={{ backgroundImage: "url('/3d-vertical-background-with-abstract-style.jpg')" }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-[91px] bg-white shadow-[0_0_52px_-24px_rgba(0,0,0,0.25)] flex items-center px-32 justify-between z-20">
          <div className="flex gap-6">
            <span className="text-gray-400 text-sm">Home</span>
            <span className="text-gray-400 text-sm">Our Category</span>
            <span className="text-gray-600 text-sm font-semibold">product details</span>
          </div>

          <div className="flex gap-4 items-center">
            <button className="w-6 h-6 border border-black rounded flex items-center justify-center">🛍</button>
            <button className="w-6 h-6 border border-black rounded flex items-center justify-center">🔔</button>
            <button className="w-6 h-6 border border-black rounded flex items-center justify-center">♡</button>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">EN</span>
              <span className="w-3 h-3 border-b border-black inline-block rotate-45"></span>
            </div>
            <button className="w-6 h-6 border border-black rounded flex items-center justify-center">👤</button>
          </div>
        </div>

        <h3 className="absolute w-[247px] h-[48px] left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 mt-[46px] text-center text-[32px] font-semibold text-[#020202]">
          Product Details
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        {/* ================= BREADCRUMB ================= */}
        <div className="bg-[#F5F5F5] rounded-xl px-6 py-3 text-sm text-gray-400 mb-10">
          Home <span className="mx-2">›</span> Our Category
          <span className="mx-2">›</span>
          <span className="text-gray-600">Product Details</span>
        </div>

        {/* ================= PRODUCT SECTION ================= */}
        <section className="bg-white rounded-[28px] p-10 shadow-sm flex flex-col lg:flex-row gap-14 relative">
          {/* -------- LEFT IMAGE AREA -------- */}
          <div className="lg:w-[520px] w-full relative">
            <div className="absolute inset-0 w-[524px] h-[565px] bg-[#F5F5F5] rounded-[24px] -z-10"></div>
            <div className="absolute top-0 left-0 w-[524px] h-[73px] bg-gradient-to-b from-[rgba(244,244,244,0.2)] to-[rgba(0,0,0,0.3)] rounded-t-[24px] -z-10"></div>

            <Image
              src="/product.png"
              alt="Product"
              width={305}
              height={514}
              className="relative rounded-2xl object-cover mx-auto"
              priority
            />

            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#CFA191] text-white shadow rounded-full p-2">
              <ChevronRight size={18} />
            </button>

            <div className="flex gap-4 mt-6 justify-center">
              {relatedProducts.map((prod) => (
                <div key={prod.id} className="w-24 h-24 bg-gray-100 rounded-xl border relative">
                  <Image
                    src={prod.img}
                    alt={prod.name}
                    width={96}
                    height={96}
                    className="rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* -------- RIGHT INFO AREA -------- */}
          <div className="flex-1">
            <span className="inline-block border border-[#E6C8BB] text-[#B67B62] px-4 py-1 rounded-full text-sm mb-5">
              T-Shirt
            </span>

            <h2 className="text-[28px] font-semibold leading-snug mb-5">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-semibold">${300}</span>
              <span className="text-gray-400 line-through">$360</span>
            </div>

            <p className="text-gray-500 leading-relaxed max-w-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt.
            </p>

            <div className="mb-6 relative w-[299px] h-[45px] bg-white border border-[rgba(0,0,0,0.15)] rounded-xl">
              <select className="w-full h-full px-4 py-3 rounded-xl outline-none border-none bg-transparent">
                <option>Cotton</option>
              </select>
            </div>

            <div className="mb-6 relative w-[299px] h-[45px] bg-white border border-[rgba(0,0,0,0.15)] rounded-xl">
              <select className="w-full h-full px-4 py-3 rounded-xl outline-none border-none bg-transparent">
                <option>2XL</option>
                <option>XL</option>
                <option>L</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="text-sm font-medium block mb-2">Colors</label>
              <div className="flex gap-4">
                {["#D90202", "#B8CCDA", "#988755", "#7198C8", "#5D5D5B"].map((color, idx) => (
                  <div key={idx} className="relative w-12 h-12 rounded-full border flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color }}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center bg-[#F4F4F4] rounded-xl px-5 py-3 gap-5">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>−</button>
                <span className="font-semibold text-lg">{qty.toString().padStart(2, "0")}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <span className="text-xl font-semibold">${(300 * qty).toFixed(2)}</span>

              <button className="flex items-center gap-2 bg-[#BE968E] text-white px-10 py-4 rounded-xl hover:opacity-90 transition">
                <span>Add To Cart</span>
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </section>
  


        {/* ================= REVIEWS ================= */}
<section className="mt-16"> {/* reduced top margin */}
  <h3 className="text-3xl font-semibold mb-8">Rating & Reviews</h3> {/* closer to top row */}

  {/* ===== TOP ROW ===== */}
  <div className="flex flex-col lg:flex-row justify-between gap-12 mb-10"> {/* smaller gap and mb */}

    {/* ===== LEFT RATING ===== */}
    <div className="min-w-[320px]">

      {/* Rating number */}
      <div className="flex items-end gap-2 mb-2">
        <span className="text-6xl font-semibold">4.5</span> {/* slightly smaller */}
        <span className="text-xl text-gray-400 pb-1">/5</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4].map((s) => (
          <span key={s} className="text-[#CFA191] text-lg">★</span>
        ))}
        <span className="text-gray-300 text-lg">★</span>
      </div>

      {/* Rating Bars */}
      {[5, 4, 3, 2, 1].map((star, idx) => {
        const percent = [67, 15, 6, 3, 9][idx];
        return (
          <div key={star} className="flex items-center gap-3 mb-2"> {/* reduced gap and mb */}
            <span className="w-5 text-sm">{star}</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-[#CFA191] h-full"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-sm text-gray-500 w-12 text-right">
              %{percent}
            </span>
          </div>
        );
      })}
    </div>

    {/* ===== RIGHT SUMMARY ===== */}
    <div className="flex flex-col items-start justify-start gap-2"> {/* added small gap */}
      <p className="text-2xl font-semibold">3.0K</p>
      <p className="text-gray-400 text-sm">Total Reviews</p>

      <button className="bg-[#CFA191] text-white px-6 py-2 rounded-xl hover:opacity-90 transition text-sm">
        Add Comment
      </button>
    </div>
  </div>

  {/* ===== COMMENTS UNDER EVERYTHING ===== */}
  <div className="space-y-8"> {/* reduced vertical spacing */}

    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="border-t pt-6"> {/* reduced top padding */}

        <div className="flex justify-between items-center mb-1">
          <div>
            <h4 className="font-semibold text-sm">Alex Daewn</h4>
            {/* Stars */}
            <div className="flex gap-1 mt-1 text-sm">
              {[1, 2, 3, 4].map((s) => (
                <span key={s} className="text-[#CFA191]">★</span>
              ))}
              <span className="text-gray-300">★</span>
            </div>
          </div>

          <span className="text-xs text-gray-400">
            4 months ago
          </span>
        </div>

        <p className="text-gray-500 leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy dolor sit Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed
        </p>

      </div>
    ))}

  </div>
</section>


        {/* ================= SIMILAR ITEMS ================= */}
        <section className="mt-20">
          <h3 className="text-2xl font-semibold mb-6">Similar Items</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                img: "/dress.png",
                category: "Dresses",
                rating: "⭐ 4.5 (2910)",
                title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
                price: "AED 900",
                colors: ["black", "#CFA191", "white"],
                favorite: false,
                inBag: false,
                discount: false,
              },
              {
                id: 2,
                img: "/techirt.jpg",
                category: "Dresses",
                rating: "⭐ 4.5 (2910)",
                title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
                price: "AED 900",
                colors: ["black", "#CFA191", "white"],
                favorite: false,
                inBag: false,
                discount: true,
              },
              {
                id: 3,
                img: "/teshirt.jpg",
                category: "Dresses",
                rating: "⭐ 4.5 (2910)",
                title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
                price: "AED 900",
                colors: ["black", "#CFA191", "white"],
                favorite: true,
                inBag: true,
                discount: false,
              },
              {
                id: 4,
                img: "/tring.jpg",
                category: "Dresses",
                rating: "⭐ 4.5 (2910)",
                title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
                price: "AED 900",
                colors: ["black", "#CFA191", "white"],
                favorite: false,
                inBag: false,
                discount: true,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-2 shadow-sm relative group hover:shadow-md transition"
              >
                {/* Discount badge */}
                {item.discount && (
                  <span className="absolute left-2 top-2 bg-white text-[#CFA191] text-[10px] px-2 py-0.5 rounded-md">
                    25% OFF
                  </span>
                )}

                {/* Icons side by side */}
                <div className="absolute right-2 top-2 flex gap-1">
                  <button className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center border border-gray-400 hover:bg-gray-100">
                    <span className="text-sm">{item.favorite ? "🖤" : "♡"}</span>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center border border-gray-400 hover:bg-gray-100">
                    <span className="text-gray-400 text-sm">🛍</span>
                  </button>
                </div>

                {/* Image */}
                <Image
                  src={item.img}
                  alt="Product"
                  width={180}
                  height={180}
                  className="rounded-lg object-cover w-full mb-2"
                />

                {/* Category + Rating */}
                <div className="flex justify-between text-xs mb-1">
                  <span>{item.category}</span>
                  <span className="text-gray-500">{item.rating}</span>
                </div>

                {/* Title */}
                <h4 className="text-xs font-medium mb-1 line-clamp-2">{item.title}</h4>

                {/* Price + Colors */}
                <div className="flex items-center justify-between mt-1">
                  <span className="font-semibold text-sm">{item.price}</span>
                  <div className="flex items-center gap-1">
                    {item.colors.map((color, idx) => (
                      <span
                        key={idx}
                        style={{ backgroundColor: color }}
                        className="w-3 h-3 rounded-full border border-gray-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
