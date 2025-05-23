import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Hello, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to your Pizza Dashboard. Here you can manage and track all your pizza orders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Stats
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Total Orders</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Pending Orders</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Delivered Orders</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">15</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Popular Pizzas
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Pepperoni</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">8 orders</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Margherita</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">6 orders</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Veggie Supreme</span>
              <span className="text-lg font-medium text-gray-900 dark:text-white">5 orders</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">New Order #PZA024</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Just now</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Order #PZA023 Delivered</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Order #PZA022 Out for Delivery</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}