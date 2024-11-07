// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const Credits = () => {
//   const location = useLocation();
//   const [ticket, setTicket] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.plantName) {
//       const newTicket = {
//         plantName: location.state.plantName,
//         credits: location.state.credits,
//         timestamp: location.state.timestamp,
//       };

//       // Set the ticket (only one ticket will be stored)
//       setTicket(newTicket);
//     }
//   }, [location.state]);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-extrabold mb-6 text-green-900">
//         Your Credits
//       </h1>

//       {/* Side-by-side Ticket and Earn Credit */}
//       <div className="flex flex-col md:flex-row gap-6 mb-8">
//         {/* Ticket Box */}
//         <div className="bg-white p-4 border border-gray-300 shadow w-full md:w-1/2">
//           <div className="border border-dashed border-gray-500 p-4 relative">
//             {ticket && (
//               <>
//                 <div className="absolute top-2 left-4 text-xs text-gray-500">
//                   Page Loaded: {new Date().toLocaleString()}
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">
//                   {ticket.plantName}
//                 </h2>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-500 font-semibold">Current Credits:</span>
//                   <span className="text-green-900 text-xl font-bold">{ticket.credits}</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Earn Credits Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             // Handle form submission
//           }}
//           className="bg-white p-6 border border-gray-300 shadow w-full md:w-1/2"
//         >
//           <h2 className="text-xl font-bold mb-4 text-green-900">Earn Credits</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="border border-gray-300 p-2 w-full mb-4 text-green-900"
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             className="border border-gray-300 p-2 w-full mb-4 text-green-900"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-[#8a9d68] text-white py-2 px-4 w-full uppercase font-semibold hover:bg-green-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Blockchain-Based Contract */}
//       <div className="bg-white p-6 border border-gray-300 shadow w-full mb-6">
//         <h2 className="text-xl font-bold mb-4 text-green-900">Blockchain-Based Contract</h2>
//         <p className="text-gray-600 mb-4">
//           This blockchain contract ensures transparency between farmers and merchants by eliminating middlemen. Both parties sign a secure digital contract.
//         </p>
//         <div className="bg-gray-100 p-4 flex items-center mb-6">
//           <img
//             src="https://img.icons8.com/color/96/contract.png"
//             alt="Blockchain Contract"
//             className="w-16 h-16 mr-4"
//           />
//           <div>
//             <h3 className="font-semibold text-lg text-green-900">Farmer-Merchant Agreement</h3>
//             <p className="text-gray-500">Blockchain-Secured Digital Contract</p>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <h3 className="text-lg font-semibold mb-2 text-green-900">Benefits of the Contract</h3>
//         <ul className="list-disc list-inside text-gray-600 mb-6">
//           <li>Transparency in Transactions</li>
//           <li>Eliminates the Middleman</li>
//           <li>Real-time Verification of Transactions</li>
//           <li>Secure and Tamper-Proof</li>
//         </ul>

//         {/* New Cards for Contract Features */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Card 1: Real-Time Contract Tracking */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Real-Time Contract Tracking</h3>
//             <p className="text-gray-600 mb-4">
//               Track the status of your contract in real-time, from initiation to completion, ensuring full transparency and accountability.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Track Contract
//             </button>
//           </div>

//           {/* Card 2: Dispute Resolution */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Dispute Resolution</h3>
//             <p className="text-gray-600 mb-4">
//               In case of any disputes, our blockchain-based system helps in quickly resolving conflicts, ensuring fairness for both parties.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Resolve Dispute
//             </button>
//           </div>

//           {/* Card 3: Contract Analytics */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Contract Analytics</h3>
//             <p className="text-gray-600 mb-4">
//               View analytics for all your past contracts, including completion rates, revenue generated, and more to help you make informed decisions.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               View Analytics
//             </button>
//           </div>
//         </div>

//         {/* Additional Feature Cards */}
//         <div className="flex flex-col md:flex-row gap-6 mt-6">
//           {/* Card 4: Contract Renewal */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Contract Renewal</h3>
//             <p className="text-gray-600 mb-4">
//               Renew expired contracts easily with just a few clicks, ensuring your partnership continues smoothly.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Renew Contract
//             </button>
//           </div>

//           {/* Card 5: Marketplace Access with Credits */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Marketplace Access with Credits</h3>
//             <p className="text-gray-600 mb-4">
//               Use your earned credits to get discounts and special access to our exclusive marketplace for seeds, fertilizers, and more.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Explore Marketplace
//             </button>
//           </div>

//           {/* Card 6: Partnership Programs */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Partnership Programs</h3>
//             <p className="text-gray-600 mb-4">
//               Form partnerships with other farmers or merchants to create group contracts with built-in profit-sharing capabilities.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Join Partnership
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Credits;


// //original above


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Credits = () => {
//   const location = useLocation();
//   const [tickets, setTickets] = useState([]);

//   // When redirected, capture the purchase details from the Marketplace component
//   useEffect(() => {
//     if (location.state && location.state.purchases) {
//       // Update the tickets array with the received purchases
//       setTickets(location.state.purchases);
//     }
//   }, [location.state]);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-extrabold mb-6 text-green-900">Your Credits</h1>

//       {/* Display multiple tickets */}
//       <div className="flex flex-col gap-6 mb-8">
//         {tickets.length === 0 ? (
//           <p>No tickets available</p>
//         ) : (
//           tickets.map((ticket, index) => (
//             <div key={index} className="bg-white p-4 border border-gray-300 shadow">
//               <div className="border border-dashed border-gray-500 p-4 relative">
//                 <div className="absolute top-2 left-4 text-xs text-gray-500">
//                   Ticket Created: {ticket.timestamp}
//                 </div>
//                 <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">
//                   {ticket.plantName}
//                 </h2>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-500 font-semibold">Quantity:</span>
//                   <span className="text-green-900 text-xl font-bold">{ticket.quantity}</span>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-gray-500 font-semibold">Credits Earned:</span>
//                   <span className="text-green-900 text-xl font-bold">{ticket.credits}</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="bg-white p-4 border border-gray-300 shadow w-full md:w-1/2">
         

//         {/* Earn Credits Form */}
//         <form
//           className="bg-white p-6 border border-gray-300 shadow w-full md:w-1/2"
//         >
//           <h2 className="text-xl font-bold mb-4 text-green-900">Earn Credits</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="border border-gray-300 p-2 w-full mb-4 text-green-900"
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             className="border border-gray-300 p-2 w-full mb-4 text-green-900"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-[#8a9d68] text-white py-2 px-4 w-full uppercase font-semibold hover:bg-green-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

      
//             {/* Blockchain-Based Contract */}
//        <div className="bg-white p-6 border border-gray-300 shadow w-full mb-6">
//         <h2 className="text-xl font-bold mb-4 text-green-900">Blockchain-Based Contract</h2>
//         <p className="text-gray-600 mb-4">
//           This blockchain contract ensures transparency between farmers and merchants by eliminating middlemen. Both parties sign a secure digital contract.
//        </p>
//          <div className="bg-gray-100 p-4 flex items-center mb-6">
//           <img
//             src="https://img.icons8.com/color/96/contract.png"
//             alt="Blockchain Contract"
//             className="w-16 h-16 mr-4"
//           />
//           <div>
//             <h3 className="font-semibold text-lg text-green-900">Farmer-Merchant Agreement</h3>
//             <p className="text-gray-500">Blockchain-Secured Digital Contract</p>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <h3 className="text-lg font-semibold mb-2 text-green-900">Benefits of the Contract</h3>
//         <ul className="list-disc list-inside text-gray-600 mb-6">
//           <li>Transparency in Transactions</li>
//           <li>Eliminates the Middleman</li>
//           <li>Real-time Verification of Transactions</li>
//           <li>Secure and Tamper-Proof</li>
//         </ul>

//         {/* New Cards for Contract Features */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Card 1: Real-Time Contract Tracking */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Real-Time Contract Tracking</h3>
//             <p className="text-gray-600 mb-4">
//               Track the status of your contract in real-time, from initiation to completion, ensuring full transparency and accountability.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Track Contract
//             </button>
//           </div>

//           {/* Card 2: Dispute Resolution */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Dispute Resolution</h3>
//             <p className="text-gray-600 mb-4">
//               In case of any disputes, our blockchain-based system helps in quickly resolving conflicts, ensuring fairness for both parties.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Resolve Dispute
//             </button>
//           </div>

//           {/* Card 3: Contract Analytics */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Contract Analytics</h3>
//             <p className="text-gray-600 mb-4">
//               View analytics for all your past contracts, including completion rates, revenue generated, and more to help you make informed decisions.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               View Analytics
//             </button>
//           </div>
//         </div>

//         {/* Additional Feature Cards */}
//         <div className="flex flex-col md:flex-row gap-6 mt-6">
//           {/* Card 4: Contract Renewal */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Contract Renewal</h3>
//             <p className="text-gray-600 mb-4">
//               Renew expired contracts easily with just a few clicks, ensuring your partnership continues smoothly.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Renew Contract
//             </button>
//           </div>

//           {/* Card 5: Marketplace Access with Credits */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Marketplace Access with Credits</h3>
//             <p className="text-gray-600 mb-4">
//               Use your earned credits to get discounts and special access to our exclusive marketplace for seeds, fertilizers, and more.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Explore Marketplace
//             </button>
//           </div>

//           {/* Card 6: Partnership Programs */}
//           <div className="bg-white p-4 border border-gray-300 shadow w-full">
//             <h3 className="font-bold text-green-900 text-lg mb-2">Partnership Programs</h3>
//             <p className="text-gray-600 mb-4">
//               Form partnerships with other farmers or merchants to create group contracts with built-in profit-sharing capabilities.
//             </p>
//             <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
//               Join Partnership
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Credits;

//final above

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Credits = () => {
  const location = useLocation();
  const [tickets, setTickets] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);

  // When redirected, capture the purchase details from the Marketplace component
  useEffect(() => {
    if (location.state && location.state.purchases) {
      // Update the tickets array with the received purchases
      setTickets(location.state.purchases);
    }
  }, [location.state]);

  // Calculate total credits based on tickets
  useEffect(() => {
    const credits = tickets.reduce((acc, ticket) => acc + ticket.credits, 0);
    setTotalCredits(credits);
  }, [tickets]);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting the default way
    setShowMessage(true); // Show the popup message
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-green-900">Your Credits</h1>
      
      {/* Display Total Credits */}
      <div className="bg-white p-4 border border-gray-300 shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center text-green-900">
          Total Credits: {totalCredits}
        </h2>
      </div>

      Tickets
      <div className="flex flex-col gap-6 mb-8">
  {tickets.length === 0 ? (
    <p>No tickets available</p>
  ) : (
    tickets.map((ticket, index) => (
      <div key={index} className="bg-white p-4 border border-gray-300 shadow">
        <div className="border border-dashed border-gray-500 p-4 relative">
          <div className="absolute top-2 left-4 text-xs text-gray-500">
            Ticket Created: {ticket.timestamp}
          </div>
          <div className="absolute top-2 right-4 text-xs text-gray-500">
            ID: {ticket.id}
          </div>
          <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">
            {ticket.plantName}
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-semibold">Quantity:</span>
            <span className="text-green-900 text-xl font-bold">{ticket.quantity}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500 font-semibold">Credits Earned:</span>
            <span className="text-green-900 text-xl font-bold">{ticket.credits}</span>
          </div>
        </div>
      </div>
    ))
  )}
</div>

      {/* <div className="flex flex-col gap-6 mb-8">
        {tickets.length === 0 ? (
          <p>No tickets available</p>
        ) : (
          tickets.map((ticket, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 shadow">
              <div className="border border-dashed border-gray-500 p-4 relative">
                <div className="absolute top-2 left-4 text-xs text-gray-500">
                  Ticket Created: {ticket.timestamp}
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">
                  {ticket.plantName}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-semibold">Quantity:</span>
                  <span className="text-green-900 text-xl font-bold">{ticket.quantity}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 font-semibold">Credits Earned:</span>
                  <span className="text-green-900 text-xl font-bold">{ticket.credits}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div> */}
      
      {/* <div className="bg-white p-4 border border-gray-300 shadow w-full md:w-1/2"> */}
        {/* Earn Credits Form */}
        {/* <form className="bg-white p-6 border border-gray-300 shadow w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 text-green-900">Earn Credits</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-300 p-2 w-full mb-4 text-green-900"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border border-gray-300 p-2 w-full mb-4 text-green-900"
            required
          />
          <button
            type="submit"
            className="bg-[#8a9d68] text-white py-2 px-4 w-full uppercase font-semibold hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div> */}

      {/* original above */}
      <div className="bg-white p-6 border border-gray-300 shadow-lg w-full">
      {/* Earn Credits Form */}
      <form className="bg-white p-8 border border-gray-300 shadow-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-green-900 text-center">Earn Credits</h2>
        
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 p-3 w-full text-green-900 focus:outline-none"
            required
          />
        </div>

        {/* Ticket ID Field */}
        <div className="mb-6">
          <label htmlFor="ticket-id" className="block text-lg font-medium text-gray-700 mb-2">Ticket ID</label>
          <input
            type="text"
            name="ticket-id"
            id="ticket-id"
            placeholder="Enter your ticket ID"
            className="border border-gray-300 p-3 w-full text-green-900 focus:outline-none"
            required
          />
        </div>

        {/* Address Field */}
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            className="border border-gray-300 p-3 w-full text-green-900 focus:outline-none"
            required
          />
        </div>

        {/* Upload Picture Field */}
        <div className="mb-6">
          <label htmlFor="upload-pic" className="block text-lg font-medium text-gray-700 mb-2">Upload Picture</label>
          <input
            type="file"
            name="upload-pic"
            id="upload-pic"
            className="border border-gray-300 p-3 w-full text-green-900 focus:outline-none"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#8a9d68] text-white py-3 px-6 w-full uppercase font-semibold hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>

        {/* Message Popup */}
        {showMessage && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded">
            Thank you for submitting. Your credits will be evaluated and updated.
          </div>
        )}
      </form>
    </div>
    


      {/* Blockchain-Based Contract */}
      <div className="bg-white p-6 border border-gray-300 shadow w-full mb-6">
        <h2 className="text-xl font-bold mb-4 text-green-900">Blockchain-Based Contract</h2>
        <p className="text-gray-600 mb-4">
          This blockchain contract ensures transparency between farmers and merchants by eliminating middlemen. Both parties sign a secure digital contract.
        </p>
        <div className="bg-gray-100 p-4 flex items-center mb-6">
          <img
            src="https://img.icons8.com/color/96/contract.png"
            alt="Blockchain Contract"
            className="w-16 h-16 mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg text-green-900">Farmer-Merchant Agreement</h3>
            <p className="text-gray-500">Blockchain-Secured Digital Contract</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h3 className="text-lg font-semibold mb-2 text-green-900">Benefits of the Contract</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Transparency in Transactions</li>
          <li>Eliminates the Middleman</li>
          <li>Real-time Verification of Transactions</li>
          <li>Secure and Tamper-Proof</li>
        </ul>

        {/* New Cards for Contract Features */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1: Real-Time Contract Tracking */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Real-Time Contract Tracking</h3>
            <p className="text-gray-600 mb-4">
              Track the status of your contract in real-time, from initiation to completion, ensuring full transparency and accountability.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Track Contract
            </button>
          </div>

          {/* Card 2: Dispute Resolution */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              In case of any disputes, our blockchain-based system helps in quickly resolving conflicts, ensuring fairness for both parties.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Resolve Dispute
            </button>
          </div>

          {/* Card 3: Contract Analytics */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Contract Analytics</h3>
            <p className="text-gray-600 mb-4">
              View analytics for all your past contracts, including completion rates, revenue generated, and more to help you make informed decisions.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              View Analytics
            </button>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Card 4: Contract Renewal */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Contract Renewal</h3>
            <p className="text-gray-600 mb-4">
              Renew expired contracts easily with just a few clicks, ensuring your partnership continues smoothly.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Renew Contract
            </button>
          </div>

          {/* Card 5: Marketplace Access with Credits */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Marketplace Access with Credits</h3>
            <p className="text-gray-600 mb-4">
              Use your earned credits to get discounts and special access to our exclusive marketplace for seeds, fertilizers, and more.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Explore Marketplace
            </button>
          </div>

          {/* Card 6: Partnership Programs */}
          <div className="bg-white p-4 border border-gray-300 shadow w-full">
            <h3 className="font-bold text-green-900 text-lg mb-2">Partnership Programs</h3>
            <p className="text-gray-600 mb-4">
              Form partnerships with other farmers or merchants to create group contracts with built-in profit-sharing capabilities.
            </p>
            <button className="bg-[#8a9d68] text-white py-2 px-4 w-full font-semibold hover:bg-green-700 transition duration-300">
              Join Partnership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const CreditsPage = () => {
// //     const [tickets, setTickets] = useState([]);

// //     useEffect(() => {
// //         // Fetch tickets from backend API
// //         axios.get('/api/tickets')
// //             .then(response => setTickets(response.data))
// //             .catch(error => console.error("Error fetching tickets:", error));
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Credits Page</h1>
// //             <div className="tickets-container">
// //                 {tickets.map((ticket, index) => (
// //                     <div className="ticket" key={index}>
// //                         <h3>Plant: {ticket.plantName}</h3>
// //                         <p>Purchased on: {new Date(ticket.timestamp).toLocaleString()}</p>
// //                         <p>Credits Used: {ticket.credits}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default CreditsPage;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const CreditsPage = () => {
// //   const [purchases, setPurchases] = useState([]);
  
// //   useEffect(() => {
// //     // Fetch all purchases for the user
// //     const fetchPurchases = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/purchase/user/USER_ID`); // Replace with actual user ID
// //         setPurchases(response.data);
// //       } catch (error) {
// //         console.error('Error fetching purchases:', error);
// //       }
// //     };

// //     fetchPurchases();
// //   }, []);
  
// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6">Your Purchase History</h1>
// //       {purchases.length > 0 ? (
// //         <div className="space-y-4">
// //           {purchases.map((purchase, index) => (
// //             <div key={index} className="bg-white p-4 shadow-md rounded-lg">
// //               <h2 className="text-xl font-bold">{purchase.plantName}</h2>
// //               <p>Quantity: {purchase.quantity}</p>
// //               <p>Total Price: ${purchase.totalPrice}</p>
// //               <p>Purchase Date: {new Date(purchase.date).toLocaleDateString()}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p>No purchases found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default CreditsPage;




// // Credits.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const Credits = () => {
//   const location = useLocation();
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     if (location.state) {
//       const newTicket = {
//         plantName: location.state.plantName,
//         credits: location.state.credits,
//         timestamp: location.state.timestamp,
//       };

//       setTickets((prevTickets) => [...prevTickets, newTicket]);
//     }
//   }, [location.state]);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-extrabold mb-6 text-green-900">
//         Your Credits
//       </h1>

//       {/* Display all tickets */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
//         {tickets.length > 0 ? (
//           <div className="space-y-4">
//             {tickets.map((ticket, index) => (
//               <div key={index} className="bg-white p-4 border border-gray-300 shadow">
//                 <div className="border border-dashed border-gray-500 p-4">
//                   <h2 className="text-xl font-semibold mb-4 text-center uppercase tracking-wide text-green-900">
//                     {ticket.plantName}
//                   </h2>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-semibold">Credits Earned:</span>
//                     <span className="text-green-900 text-xl font-bold">{ticket.credits}</span>
//                   </div>
//                   <div className="text-gray-500 mt-2 text-right">
//                     <span>{ticket.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No purchase history available.</p>
//         )}
//       </div>

//       {/* Additional content here */}
//     </div>
//   );
// };

// export default Credits;
