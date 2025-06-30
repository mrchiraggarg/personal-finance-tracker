import { Category } from '../types';

export const defaultCategories: Category[] = [
  // Income categories
  { id: '1', name: 'Salary', type: 'income', color: '#10B981', icon: 'DollarSign' },
  { id: '2', name: 'Freelance', type: 'income', color: '#8B5CF6', icon: 'Briefcase' },
  { id: '3', name: 'Investment', type: 'income', color: '#06B6D4', icon: 'TrendingUp' },
  { id: '4', name: 'Other Income', type: 'income', color: '#84CC16', icon: 'Plus' },
  
  // Expense categories
  { id: '5', name: 'Food & Dining', type: 'expense', color: '#EF4444', icon: 'Utensils' },
  { id: '6', name: 'Transportation', type: 'expense', color: '#F97316', icon: 'Car' },
  { id: '7', name: 'Shopping', type: 'expense', color: '#EC4899', icon: 'ShoppingBag' },
  { id: '8', name: 'Entertainment', type: 'expense', color: '#8B5CF6', icon: 'Film' },
  { id: '9', name: 'Bills & Utilities', type: 'expense', color: '#6B7280', icon: 'Home' },
  { id: '10', name: 'Healthcare', type: 'expense', color: '#14B8A6', icon: 'Heart' },
  { id: '11', name: 'Education', type: 'expense', color: '#3B82F6', icon: 'GraduationCap' },
  { id: '12', name: 'Other Expenses', type: 'expense', color: '#6B7280', icon: 'Minus' },
];