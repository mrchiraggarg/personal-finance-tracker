import React from 'react';
import { Transaction } from '../types';
import { getMonthlyData, formatCurrency } from '../utils/calculations';
import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';

interface MonthlyCardsProps {
  transactions: Transaction[];
}

export function MonthlyCards({ transactions }: MonthlyCardsProps) {
  const monthlyData = getMonthlyData(transactions);
  const currentMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];

  if (!currentMonth) return null;

  const incomeChange = previousMonth 
    ? ((currentMonth.income - previousMonth.income) / previousMonth.income) * 100 
    : 0;
  
  const expenseChange = previousMonth 
    ? ((currentMonth.expenses - previousMonth.expenses) / previousMonth.expenses) * 100 
    : 0;

  const formatMonth = (monthStr: string) => {
    const [year, month] = monthStr.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Calendar className="h-5 w-5" />
        Monthly Summary
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white">{formatMonth(currentMonth.month)} Income</h4>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">{formatCurrency(currentMonth.income)}</p>
          {previousMonth && (
            <p className={`text-sm mt-2 ${incomeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {incomeChange >= 0 ? '+' : ''}{incomeChange.toFixed(1)}% from last month
            </p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white">{formatMonth(currentMonth.month)} Expenses</h4>
            <TrendingDown className="h-5 w-5 text-red-600" />
          </div>
          <p className="text-2xl font-bold text-red-600">{formatCurrency(currentMonth.expenses)}</p>
          {previousMonth && (
            <p className={`text-sm mt-2 ${expenseChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {expenseChange >= 0 ? '+' : ''}{expenseChange.toFixed(1)}% from last month
            </p>
          )}
        </div>
      </div>
    </div>
  );
}