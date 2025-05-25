'use client';

import StatusBadge from '@/components/dashboard/StatusBadge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OrderStatus, pizzaOrders } from '@/data/orders';
import { ArrowUpDown, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type SortField = 'id' | 'customerName' | 'pizzaType' | 'quantity' | 'orderDate' | 'status';
type SortDirection = 'asc' | 'desc';

export default function OrdersPage() {
  const [sortField, setSortField] = useState<SortField>('orderDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredOrders = useMemo(() => {
    return pizzaOrders
      .filter(order => {
        // Apply status filter
        if (statusFilter !== 'All' && order.status !== statusFilter) {
          return false;
        }

        // Apply search filter
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            order.id.toLowerCase().includes(searchLower) ||
            order.customerName.toLowerCase().includes(searchLower) ||
            order.pizzaType.toLowerCase().includes(searchLower)
          );
        }

        return true;
      })
      .sort((a, b) => {
        // Apply sorting
        let comparison = 0;

        if (sortField === 'quantity') {
          comparison = a.quantity - b.quantity;
        } else if (sortField === 'orderDate') {
          comparison = new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime();
        } else {
          const aValue = String(a[sortField]).toLowerCase();
          const bValue = String(b[sortField]).toLowerCase();
          comparison = aValue.localeCompare(bValue);
        }

        return sortDirection === 'asc' ? comparison : -comparison;
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pizzaOrders, sortField, sortDirection, statusFilter, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Pizza Orders
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as OrderStatus | 'All')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Preparing">Preparing</SelectItem>
              <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('id')}>
                <div className="flex items-center">
                  Order ID
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('customerName')}>
                <div className="flex items-center">
                  Customer Name
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('pizzaType')}>
                <div className="flex items-center">
                  Pizza Type
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('quantity')}>
                <div className="flex items-center">
                  Quantity
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('orderDate')}>
                <div className="flex items-center">
                  Order Date
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('status')}>
                <div className="flex items-center">
                  Status
                  <ArrowUpDown className="w-4 h-4 ml-1" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {order.id}
                  </th>
                  <td className="px-6 py-4">{order.customerName}</td>
                  <td className="px-6 py-4">{order.pizzaType}</td>
                  <td className="px-6 py-4">{order.quantity}</td>
                  <td className="px-6 py-4">{order.orderDate}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td colSpan={6} className="px-6 py-4 text-center">
                  No orders found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}