import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [products, setProducts] = useState([
    { id: 1, name: "Homemade Pickles", price: 150, status: "approved", sales: 12, earnings: 1800 },
    { id: 2, name: "Handmade Jewelry", price: 500, status: "pending", sales: 0, earnings: 0 },
    { id: 3, name: "Stitched Clothes", price: 800, status: "approved", sales: 5, earnings: 4000 }
  ]);
  const [orders, setOrders] = useState([
    { id: 1, customer: "Rahul Kumar", product: "Homemade Pickles", amount: 150, status: "delivered", date: "2024-01-15" },
    { id: 2, customer: "Sita Devi", product: "Handmade Jewelry", amount: 500, status: "processing", date: "2024-01-16" },
    { id: 3, customer: "Amit Singh", product: "Stitched Clothes", amount: 800, status: "shipped", date: "2024-01-17" }
  ]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/auth");
    }
  }, [navigate]);

  const stats = {
    totalProducts: products.length,
    totalSales: products.reduce((sum, p) => sum + p.sales, 0),
    totalEarnings: products.reduce((sum, p) => sum + p.earnings, 0),
    pendingOrders: orders.filter(o => o.status === "processing").length,
    approvedProducts: products.filter(p => p.status === "approved").length
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleAddProduct = () => {
    navigate("/upload");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

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
              <h1 className="ml-3 text-2xl font-bold text-indigo">My Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.phone}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg shadow p-1 mb-8">
          {["overview", "products", "orders", "earnings"].map((tab) => (
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

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900">Total Products</h3>
                <p className="text-3xl font-bold text-indigo">{stats.totalProducts}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900">Total Sales</h3>
                <p className="text-3xl font-bold text-saffron">{stats.totalSales}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900">Total Earnings</h3>
                <p className="text-3xl font-bold text-green-600">₹{stats.totalEarnings}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900">Pending Orders</h3>
                <p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={handleAddProduct}
                  className="bg-saffron text-white p-4 rounded-lg hover:bg-orange-500 transition"
                >
                  <div className="text-2xl mb-2">➕</div>
                  <div className="font-semibold">Add New Product</div>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="bg-indigo text-white p-4 rounded-lg hover:bg-blue-600 transition"
                >
                  <div className="text-2xl mb-2">📦</div>
                  <div className="font-semibold">View Orders</div>
                </button>
                <button
                  onClick={() => setActiveTab("earnings")}
                  className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition"
                >
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">View Earnings</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">My Products</h2>
              <button
                onClick={handleAddProduct}
                className="bg-saffron text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition"
              >
                Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Earnings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === "approved" ? "bg-green-100 text-green-800" : 
                          product.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sales}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.earnings}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
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
              <h2 className="text-lg font-semibold text-gray-900">My Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
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

        {/* Earnings Tab */}
        {activeTab === "earnings" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Earnings Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">Total Earnings</h3>
                <p className="text-3xl font-bold">₹{stats.totalEarnings}</p>
                <p className="text-sm opacity-90">All time</p>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold">This Month</h3>
                <p className="text-3xl font-bold">₹{Math.floor(stats.totalEarnings * 0.3)}</p>
                <p className="text-sm opacity-90">30% of total</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 