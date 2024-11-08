import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodItems from "./components/FoodItems";
import Teams from "./components/Teams";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/food" element={<FoodItems/>} />
        <Route path="/teams" element={<Teams />} />
        

      </Routes>
    </Router>
  );
};

export default App;





































// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:3000/api/food";

// const App = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [formData, setFormData] = useState({ name: "", quantity: "", expiryDate: "" });

//   // Fetch all food items
//   const fetchFoodItems = async () => {
//     const res = await axios.get("http://localhost:3000/api/food/get");
//     setFoodItems(res.data);
//   };

//   useEffect(() => {
//     fetchFoodItems();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:3000/api/food/post", formData);
//     fetchFoodItems(); // Refresh list
//     setFormData({ name: "", quantity: "", expiryDate: "" });
//   };

//   // Delete an item
//   const deleteItem = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchFoodItems(); // Refresh list
//   };

//   return (
//     <div>
//       <h1>Food Saver App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Food Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={formData.quantity}
//           onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//           required
//         />
//         <input
//           type="date"
//           value={formData.expiryDate}
//           onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
//           required
//         />
//         <button type="submit">Add Food Item</button>
//       </form>

//       <h2>Food Items</h2>
//       <ul>
//         {foodItems.map((item) => (
//           <li key={item._id}>
//             {item.name} - {item.quantity} - Expiry: {new Date(item.expiryDate).toLocaleDateString()}
//             <button onClick={() => deleteItem(item._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
