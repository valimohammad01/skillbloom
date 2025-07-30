import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([
    { id: 1, name: "Priya Sharma", phone: "9876543210", status: "active", products: 5, earnings: 2500 },
    { id: 2, name: "Meera Patel", phone: "8765432109", status: "pending", products: 2, earnings: 800 },
    { id: 3, name: "Anjali Singh", phone: "7654321098", status: "active", products: 8, earnings: 4200 }
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: "Homemade Pickles", seller: "Priya Sharma", price: 150, status: "approved", category: "Food" },
    { id: 2, name: "Handmade Jewelry", seller: "Meera Patel", price: 500, status: "pending", category: "Jewelry" },
    { id: 3, name: "Stitched Clothes", seller: "Anjali Singh", price: 800, status: "approved", category: "Clothing" }
  ]);
  const [orders, setOrders] = useState([
    { id: 1, customer: "Rahul Kumar", product: "Homemade Pickles", amount: 150, status: "delivered" },
    { id: 2, customer: "Sita Devi", product: "Handmade Jewelry", amount: 500, status: "processing" },
    { id: 3, customer: "Amit Singh", product: "Stitched Clothes", amount: 800, status: "shipped" }
  ]);

  const stats = {
    totalUsers: users.length,
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0),
    pendingApprovals: products.filter(p => p.status === "pending").length,
    activeSellers: users.filter(u => u.status === "active").length
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };

  const approveProduct = (productId) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, status: "approved" } : p
    ));
  };

  const rejectProduct = (productId) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, status: "rejected" } : p
    ));
  };

  const approveUser = (userId) => {
    setUsers(users.map(u => 
      u.id === userId ? { ...u, status: "active" } : u
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo to-saffron rounded-full flex items-center justify-center text-white font-bold text-lg">
                SB
              </div>
              <h1 className="ml-3 text-2xl font-bold text-indigo">SkillBloom Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg shadow p-1 mb-8">
          {["dashboard", "users", "products", "orders", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-indigo text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
              <p className="text-3xl font-bold text-indigo">{stats.totalUsers}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Total Products</h3>
              <p className="text-3xl font-bold text-saffron">{stats.totalProducts}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Total Orders</h3>
              <p className="text-3xl font-bold text-mint">{stats.totalOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
              <p className="text-3xl font-bold text-green-600">₹{stats.totalRevenue}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
              <p className="text-3xl font-bold text-orange-600">{stats.pendingApprovals}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">Active Sellers</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.activeSellers}</p>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Manage Users</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Products</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Earnings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.products}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{user.earnings}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {user.status === "pending" && (
                          <button
                            onClick={() => approveUser(user.id)}
                            className="text-indigo-600 hover:text-indigo-900 mr-2"
                          >
                            Approve
                          </button>
                        )}
                        <button className="text-red-600 hover:text-red-900">Block</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Manage Products</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.seller}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === "approved" ? "bg-green-100 text-green-800" : 
                          product.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {product.status === "pending" && (
                          <>
                            <button
                              onClick={() => approveProduct(product.id)}
                              className="text-green-600 hover:text-green-900 mr-2"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => rejectProduct(product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Manage Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === "delivered" ? "bg-green-100 text-green-800" : 
                          order.status === "shipped" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-indigo to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">Revenue Growth</h3>
                <p className="text-3xl font-bold">+15%</p>
                <p className="text-sm opacity-90">This month</p>
              </div>
              <div className="bg-gradient-to-r from-saffron to-orange-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">New Sellers</h3>
                <p className="text-3xl font-bold">+8</p>
                <p className="text-sm opacity-90">This week</p>
              </div>
              <div className="bg-gradient-to-r from-mint to-green-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">Products Added</h3>
                <p className="text-3xl font-bold">+24</p>
                <p className="text-sm opacity-90">This month</p>
              </div>
              <div className="bg-gradient-to-r from-red-400 to-pink-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="text-sm opacity-90">Average rating</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 