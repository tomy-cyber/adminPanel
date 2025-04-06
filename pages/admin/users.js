// import { useEffect, useState } from "react";

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/api/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">All Users</h1>
//       <table className="min-w-full bg-white border border-gray-300 mt-4">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2 text-left">ID</th>
//             <th className="p-2 text-left">Name</th>
//             <th className="p-2 text-left">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user.id} className="border-b">
//                 <td className="p-2">{user.id}</td>
//                 <td className="p-2">{user.name}</td>
//                 <td className="p-2">{user.email}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="p-2 text-center">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }







// "use client";
// import React, { useState, useEffect } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [value, setValue] = useState("");

//   // Fetch all users
//   useEffect(() => {
//     fetch("http://localhost:3001/api/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // Handle update request
//   const handleUpdate = async () => {
//     if (!selectedUser) {
//       alert("Please select a user.");
//       return;
//     }

//     const response = await fetch("http://localhost:3001/api/numbers", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: selectedUser, value }),
//     });

//     if (response.ok) {
//       alert("Number updated successfully!");
//     } else {
//       alert("Failed to update number.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Admin Panel - Update User's Value</h2>

//       {/* User Selection */}
//       <select
//         className="border p-2 rounded mb-4 w-full"
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user.id} value={user.id}>
//             {user.name} ({user.email})
//           </option>
//         ))}
//       </select>

//       {/* Value Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter new value"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />

//       {/* Update Button */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleUpdate}
//       >
//         Update Value
//       </button>
//     </div>
//   );
// };

// export default AdminUsers;



// "use client";
// import React, { useState, useEffect } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [btc, setBtc] = useState("");
//   const [usd, setUsd] = useState("");

//   // Fetch all users
//   useEffect(() => {
//     fetch("http://localhost:3001/api/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // Handle update request
//   const handleUpdate = async () => {
//     if (!selectedUser) {
//       alert("Please select a user.");
//       return;
//     }

//     const response = await fetch("http://localhost:3001/api/numbers", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: selectedUser, btc, usd }),
//     });

//     if (response.ok) {
//       alert("User's BTC & USD updated successfully!");
//     } else {
//       alert("Failed to update user's numbers.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Admin Panel - Update User's BTC & USD</h2>

//       {/* User Selection */}
//       <select
//         className="border p-2 rounded mb-4 w-full"
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user.id} value={user.id}>
//             {user.name} ({user.email})
//           </option>
//         ))}
//       </select>

//       {/* BTC Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter BTC value"
//         value={btc}
//         onChange={(e) => setBtc(e.target.value)}
//       />

//       {/* USD Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter USD value"
//         value={usd}
//         onChange={(e) => setUsd(e.target.value)}
//       />

//       {/* Update Button */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleUpdate}
//       >
//         Update Values
//       </button>
//     </div>
//   );
// };

// export default AdminUsers;

// this working
// "use client";
// import React, { useState, useEffect } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [btc, setBtc] = useState("");
//   const [usd, setUsd] = useState("");

//   // Fetch all users
//   useEffect(() => {
//     // Update to the correct backend URL
//     fetch("http://localhost:3001/api/users") // Make sure this is pointing to your backend
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // Handle update request
//   const handleUpdate = async () => {
//     if (!selectedUser) {
//       alert("Please select a user.");
//       return;
//     }

//     // Validation for numeric values
//     if (isNaN(btc) || isNaN(usd)) {
//       alert("BTC and USD values must be valid numbers.");
//       return;
//     }

//     // Update to the correct backend URL
//     const response = await fetch("http://localhost:3001/api/numbers", { // Make sure this is pointing to your backend
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: selectedUser, btc, usd }),
//     });

//     if (response.ok) {
//       alert("User's BTC & USD updated successfully!");
//     } else {
//       alert("Failed to update user's numbers.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Admin Panel - Update User's BTC & USD</h2>

//       {/* User Selection */}
//       <select
//         className="border p-2 rounded mb-4 w-full"
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user._id} value={user._id}> {/* Change `user.id` to `user._id` if necessary */}
//             {user.name} ({user.email})
//           </option>
//         ))}
//       </select>

//       {/* BTC Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter BTC value"
//         value={btc}
//         onChange={(e) => setBtc(e.target.value)}
//       />

//       {/* USD Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter USD value"
//         value={usd}
//         onChange={(e) => setUsd(e.target.value)}
//       />

//       {/* Update Button */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleUpdate}
//       >
//         Update Values
//       </button>
//     </div>
//   );
// };

// export default AdminUsers;


// // File: src/components/admin/AdminUsers.js
// "use client";
// import React, { useState, useEffect } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);  // For multiple users
//   const [selectedUser, setSelectedUser] = useState("");  // Selected user ID
//   const [btc, setBtc] = useState("");  // BTC value
//   const [usd, setUsd] = useState("");  // USD value

//   // Fetch all users
//   useEffect(() => {
//     fetch("http://localhost:3001/api/users") // Make sure this URL is correct
//       .then((res) => res.json())
//       .then((data) => setUsers(data)) // Set the users state with the array of users
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // Handle update request
//   const handleUpdate = async () => {
//     if (!selectedUser) {
//       alert("Please select a user.");
//       return;
//     }

//     // Validation for numeric values
//     if (isNaN(btc) || isNaN(usd)) {
//       alert("BTC and USD values must be valid numbers.");
//       return;
//     }

//     // Update request to the backend
//     const response = await fetch("http://localhost:3001/api/update-numbers", { // Ensure this is the correct URL for your backend
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: selectedUser, btc, usd }),
//     });

//     if (response.ok) {
//       alert("User's BTC & USD updated successfully!");
//     } else {
//       alert("Failed to update user's numbers.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Admin Panel - Update User's BTC & USD</h2>

//       {/* User Selection Dropdown */}
//       <select
//         className="border p-2 rounded mb-4 w-full"
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}  // Update the selected user ID
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user._id} value={user._id}> {/* Use user._id for the value */}
//             {user.name} ({user.email})
//           </option>
//         ))}
//       </select>

//       {/* BTC Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter BTC value"
//         value={btc}
//         onChange={(e) => setBtc(e.target.value)}  // Update BTC value
//       />

//       {/* USD Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter USD value"
//         value={usd}
//         onChange={(e) => setUsd(e.target.value)}  // Update USD value
//       />

//       {/* Update Button */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleUpdate}  // Trigger update when clicked
//       >
//         Update Values
//       </button>
//     </div>
//   );
// };

// export default AdminUsers;
// es zmoet aris mtyvneli










// "use client";
// import React, { useState, useEffect } from "react";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);  // Store all users
//   const [selectedUser, setSelectedUser] = useState("");  // Store the selected user
//   const [btc, setBtc] = useState("");  // Store BTC value to update
//   const [usd, setUsd] = useState("");  // Store USD value to update

//   // Fetch all users initially
//   useEffect(() => {
//     fetch("http://localhost:3001/api/users") // Ensure this points to your backend
//       .then((res) => res.json())
//       .then((data) => setUsers(data)) // Set the users state with the array of users
//       .catch((err) => console.error("Error fetching users:", err));
//   }, []);

//   // Handle update request for a specific user
//   const handleUpdate = async () => {
//     if (!selectedUser) {
//       alert("Please select a user.");
//       return;
//     }

//     // Validate BTC and USD
//     if (isNaN(btc) || isNaN(usd)) {
//       alert("BTC and USD values must be valid numbers.");
//       return;
//     }

//     // Send PUT request to the backend to update BTC and USD values for a specific user
//     const response = await fetch("http://localhost:3001/api/numbers", {  // Correct endpoint for the update action
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: selectedUser, btc, usd }), // Send userId, btc, and usd
//     });

//     if (response.ok) {
//       // On successful update, fetch the updated list of users again
//       const updatedUser = await response.json();
//       alert("User's BTC & USD updated successfully!");

//       // Update the user in the local state to reflect the changes
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === updatedUser.id
//             ? { ...user, btc: updatedUser.btc, usd: updatedUser.usd }
//             : user
//         )
//       );

//       // Optionally, reset input values after successful update
//       setBtc("");
//       setUsd("");
//     } else {
//       const errorData = await response.json();
//       alert(errorData.message || "Failed to update user's numbers.");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Admin Panel - Update User's BTC & USD</h2>

//       {/* User Selection Dropdown */}
//       <select
//         className="border p-2 rounded mb-4 w-full"
//         value={selectedUser}
//         onChange={(e) => setSelectedUser(e.target.value)}  // Update the selected user ID
//       >
//         <option value="">Select a user</option>
//         {users.map((user) => (
//           <option key={user._id} value={user._id}> {/* Use user._id for the value */}
//             {user.name} ({user.email})
//           </option>
//         ))}
//       </select>

//       {/* BTC Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter BTC value"
//         value={btc}
//         onChange={(e) => setBtc(e.target.value)}  // Update BTC value
//       />

//       {/* USD Input */}
//       <input
//         type="number"
//         className="border p-2 rounded mb-4 w-full"
//         placeholder="Enter USD value"
//         value={usd}
//         onChange={(e) => setUsd(e.target.value)}  // Update USD value
//       />

//       {/* Update Button */}
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleUpdate}  // Trigger update when clicked
//       >
//         Update Values
//       </button>
//     </div>
//   );
// };

// export default AdminUsers;

// esec mushaobs
// "use client";
// import React, { useState, useEffect } from "react";

// const AdminNumbers = () => {
//   const [btc, setBtc] = useState(0);
//   const [usd, setUsd] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // მონაცემების გადაღება როდესაც კომპონენტი ჩატვირთება
//   useEffect(() => {
//     async function fetchNumbers() {
//       try {
//         const res = await fetch("http://localhost:3001/api/numbers");
//         if (!res.ok) {
//           throw new Error("Failed to fetch numbers");
//         }
//         const data = await res.json();
//         setBtc(data.btc);
//         setUsd(data.usd);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     }
//     fetchNumbers();
//   }, []);

//   // მონაცემების განახლება PUT მოთხოვნით
//   const handleUpdate = async () => {
//     try {
//       const res = await fetch("http://localhost:3001/api/numbers", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ btc, usd }),
//       });
//       if (!res.ok) {
//         throw new Error("Failed to update numbers");
//       }
//       const data = await res.json();
//       setBtc(data.btc);
//       setUsd(data.usd);
//       alert("Numbers updated successfully!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
//       <h1>Admin Panel - Update BTC & USD</h1>
//       <div style={{ marginBottom: "15px" }}>
//         <label style={{ display: "block", marginBottom: "5px" }}>
//           BTC:
//         </label>
//         <input
//           type="number"
//           value={btc}
//           onChange={(e) => setBtc(Number(e.target.value))}
//           style={{ width: "100%", padding: "8px" }}
//         />
//       </div>
//       <div style={{ marginBottom: "15px" }}>
//         <label style={{ display: "block", marginBottom: "5px" }}>
//           USD:
//         </label>
//         <input
//           type="number"
//           value={usd}
//           onChange={(e) => setUsd(Number(e.target.value))}
//           style={{ width: "100%", padding: "8px" }}
//         />
//       </div>
//       <button
//         onClick={handleUpdate}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//           borderRadius: "4px",
//         }}
//       >
//         Update Values
//       </button>
//     </div>
//   );
// };

// export default AdminNumbers;

// "import React, { useState, useEffect } from 'react';
// import { supabase } from '../lib/supabase';

// interface User {
//   id: string;
//   email: string;
//   first_name: string;
//   last_name: string;
// }

// interface Balance {
//   btc: number;
//   usd: number;
// }

// const AdminPanel: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string | null>(null);
//   const [btc, setBtc] = useState<number>(0);
//   const [usd, setUsd] = useState<number>(0);
//   const [message, setMessage] = useState<string>('');
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('users')
//         .select('*')
//         .order('email');

//       if (error) throw error;
//       setUsers(data || []);
//     } catch (err) {
//       setError('Error loading users: ' + (err as Error).message);
//     }
//   };

//   const handleUserSelect = async (userId: string) => {
//     if (!userId) return;

//     setSelectedUser(userId);

//     try {
//       const { data, error } = await supabase
//         .from('balances')
//         .select('btc, usd')
//         .eq('user_id', userId)
//         .single();

//       if (error) throw error;
      
//       setBtc(data?.btc || 0);
//       setUsd(data?.usd || 0);
//       setError('');
//     } catch (err) {
//       setError('Error loading user data: ' + (err as Error).message);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedUser) {
//       setError('Please select a user first');
//       return;
//     }

//     try {
//       const { error } = await supabase
//         .from('balances')
//         .upsert({
//           user_id: selectedUser,
//           btc,
//           usd,
//           updated_at: new Date().toISOString(),
//         });

//       if (error) throw error;

//       setMessage('User balances updated successfully!');
//       setError('');
//     } catch (err) {
//       setError('Error updating user: ' + (err as Error).message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
//       <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

//       {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}
//       {message && <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">{message}</div>}

//       <div className="mb-6">
//         <label htmlFor="user-select" className="block text-sm font-medium text-gray-700 mb-2">
//           Select User:
//         </label>
//         <select
//           id="user-select"
//           onChange={(e) => handleUserSelect(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         >
//           <option value="">-- Select a user --</option>
//           {users.map((user) => (
//             <option key={user.id} value={user.id}>
//               {user.first_name} {user.last_name} ({user.email})
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedUser && (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="btc-input" className="block text-sm font-medium text-gray-700 mb-2">
//               BTC Balance:
//             </label>
//             <input
//               id="btc-input"
//               type="number"
//               value={btc}
//               onChange={(e) => setBtc(Number(e.target.value))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               step="0.00000001"
//               min="0"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="usd-input" className="block text-sm font-medium text-gray-700 mb-2">
//               USD Balance:
//             </label>
//             <input
//               id="usd-input"
//               type="number"
//               value={usd}
//               onChange={(e) => setUsd(Number(e.target.value))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               step="0.01"
//               min="0"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Update Balances
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;

"use client";
import React, { useState, useEffect } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]); // List of users
  const [selectedUser, setSelectedUser] = useState(""); // Selected user ID
  const [btc, setBtc] = useState(""); // BTC value
  const [usd, setUsd] = useState(""); // USD value

  // Fetch all users
  useEffect(() => {
    fetch("http://localhost:3001/api/users") // Update with your actual API if needed
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Handle update request
  const handleUpdate = async () => {
    if (!selectedUser) {
      alert("Please select a user.");
      return;
    }

    if (btc === "" || usd === "" || isNaN(btc) || isNaN(usd)) {
      alert("BTC and USD must be valid numbers.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/update-numbers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedUser,
          btc: Number(btc), // Send numbers as individual properties
          usd: Number(usd),
        }),
      });

      const data = await response.json();
      console.log("Response from update:", data);

      if (response.ok) {
        alert("User's BTC & USD updated successfully!");
        setBtc(""); // Clear input after update
        setUsd(""); // Clear input after update
      } else {
        alert("Failed to update user's numbers: " + data.error);
      }
    } catch (error) {
      console.error("Error updating numbers:", error);
      alert("An error occurred while updating.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Admin Panel - Update User&apos;s BTC & USD</h2>

      {/* User Dropdown */}
      <select
        className="border p-2 rounded mb-4 w-full"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name} ({user.email})
          </option>
        ))}
      </select>

      {/* BTC Input */}
      <input
        type="number"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Enter BTC value"
        value={btc}
        onChange={(e) => setBtc(e.target.value)}
      />

      {/* USD Input */}
      <input
        type="number"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Enter USD value"
        value={usd}
        onChange={(e) => setUsd(e.target.value)}
      />

      {/* Update Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleUpdate}
      >
        Update Values
      </button>
    </div>
  );
};

export default AdminUsers;
