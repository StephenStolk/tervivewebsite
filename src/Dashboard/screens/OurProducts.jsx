// import pic1 from "../../images/pic1.jpg"; // Ensure pic1 exists
// import pic3 from "../../images/pic3.jpg"; // Ensure pic3 exists
// import tervivetop from "../../images/tervivetop.webp"; // Import the top image

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     imageUrl: pic1,
//     price: '$25.00',
//     link: 'https://www.amazon.in/Ugaoo-Cow-Manure-Kg-Fertilizer/dp/B07RGTVD1P/ref=mp_s_a_1_1_sspa?psc=1',
//   },
//   {
//     id: 3,
//     name: 'Product 2',
//     imageUrl: pic3,
//     price: '$35.00',
//     link: 'https://www.amazon.in/TrustBasket-Organic-Vermicompost-Fertilizer-Manure/dp/B07PRXV7MJ',
//   },
//   // Add more products as needed
// ];

// const OurProducts = () => {
//   return (
//     <div className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2>
        
//         {/* Use the imported image */}
//         <div className="w-full">
//             <img src={tervivetop} alt="Products" className="object-cover h-[25rem] mx-auto mb-8 w-full"/>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map(product => (
//             <div key={product.id} className="bg-white shadow-lg flex items-center border border-gray-200 rounded-md overflow-hidden">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-1/2 h-full object-cover"
//               />
//               <div className="p-6 w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
//                   <p className="text-lg font-semibold text-gray-600">{product.price}</p>
//                 </div>
//                 <a
//                   href={product.link}
//                   className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-semibold text-center rounded-lg hover:bg-blue-600 transition duration-300"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurProducts;


import pic1 from "../../images/pic1.jpg"; // Ensure pic1 exists
import pic3 from "../../images/pic3.jpg"; // Ensure pic3 exists
import tervivetop from "../../images/tervivetop.webp"; // Import the top image
import pic2 from "../../images/pic2.jpg";

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: pic1,
    price: 'Rs.125.00',
    link: 'https://www.amazon.in/Ugaoo-Cow-Manure-Kg-Fertilizer/dp/B07RGTVD1P/ref=mp_s_a_1_1_sspa?psc=1',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: pic2,
    price: 'Rs. 35.00',
    link: 'https://www.amazon.in/Ugaoo-Cow-Manure-Kg-Fertilizer/dp/B07RGTVD1P/ref=mp_s_a_1_1_sspa?adgrpid=59227356232&dib=eyJ2IjoiMSJ9.YKRt-FvgguZswQqccB18uu2wRizfvJK7y2tFGgMYkOIc7S-gOVhATWITs_JbTa7oSJNEoMhogJkpfL8s91A08eyoDp4cfrkeT773pFtnZf5B1g_7CDFFj9vYB4fZ-K_o-pZ7IImhwIyI4_6Ibh3_1F46pmWontiOW6--wbomCSzPJsv1kXhplCNzXrLEdI5EYXjVVTzG8Ql25US3ajb53A.GNNlQQCqGYGg2fKAFpp1gdtRE4CjI_FK3egkmg6sDew&dib_tag=se&ext_vrnc=hi&hvadid=294132202693&hvdev=m&hvlocphy=9061952&hvnetw=g&hvqmt=b&hvrand=2474232457163286425&hvtargid=kwd-297385223465&hydadcr=3337_1805713&keywords=manure+for+plants&qid=1726036689&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9waG9uZV9zZWFyY2hfYXRm&psc=1',
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: pic3,
    price: 'Rs.99.00',
    link: 'https://www.amazon.in/TrustBasket-Organic-Vermicompost-Fertilizer-Manure/dp/B07PRXV7MJ',
  },
  // Add more products as needed
];

const OurProducts = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2>
        
        {/* Use the imported image */}
        <div className="w-full">
            <img src={tervivetop} alt="Products" className="object-cover h-[25rem] mx-auto mb-8 w-full"/>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg flex items-center border border-gray-200 rounded-md overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-1/2 h-full object-cover"
              />
              <div className="p-6 w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-lg font-semibold text-gray-600">{product.price}</p>
                </div>
                <a
                  href={product.link}
                  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-semibold text-center rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Subscription Plan</h2>
          
          <div className="flex justify-center">
            <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscribe for only ₹100/month</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Exclusive access to premium content</li>
                <li>Discounts on all products</li>
                <li>Free monthly plant care guide</li>
                <li>Priority customer support</li>
              </ul>
              <p className="text-lg font-semibold text-gray-800 mb-6">Price: ₹100.00</p>
              <a
                href="/subscribe"
                className="block px-6 py-3 bg-green-500 text-white font-semibold text-center hover:bg-green-600 transition duration-300"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OurProducts;
