import { Transaction } from '../types';
import { formatCurrency, formatDate } from './calculations';

export function exportToCSV(transactions: Transaction[], filename: string = 'transactions.csv') {
  const headers = ['Date', 'Type', 'Category', 'Description', 'Amount', 'Notes'];
  
  const csvContent = [
    headers.join(','),
    ...transactions.map(transaction => [
      formatDate(transaction.date),
      transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1),
      transaction.category,
      `"${transaction.description}"`,
      transaction.amount.toFixed(2),
      `"${transaction.notes || ''}"`,
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}