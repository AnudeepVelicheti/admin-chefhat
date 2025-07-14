import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface Category {
  id: string;
  name: string;
  color: string;
  order: number;
}

export interface MenuItem {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  description: string;
  imageUrl: string;
  isWeeklySpecial: boolean;
  status: 'active' | 'inactive';
  order: number;
}

export interface Order {
  id: string;
  date: string;
  items: string[];
  total: number;
  status: 'Fulfilled' | 'Pending' | 'Cancelled';
}

interface AdminDataContextType {
  // Category functions
  categories: Category[];
  createCategory: (category: Omit<Category, 'id'>) => string;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  reorderCategories: (categories: Category[]) => void;
  
  // Menu functions
  menuItems: MenuItem[];
  getMenu: () => MenuItem[];
  createItem: (item: Omit<MenuItem, 'id'>) => void;
  updateItem: (id: string, item: Partial<MenuItem>) => void;
  deleteItem: (id: string) => void;
  reorderItems: (items: MenuItem[]) => void;
  
  // Order functions
  orders: Order[];
  getOrders: () => Order[];
  
  // Loading states
  loading: boolean;
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load from localStorage for demo purposes
        const savedCategories = localStorage.getItem('admin-categories');
        const savedMenu = localStorage.getItem('admin-menu-items');
        const savedOrders = localStorage.getItem('admin-orders');
        
        if (savedCategories) {
          setCategories(JSON.parse(savedCategories));
        }
        if (savedMenu) {
          setMenuItems(JSON.parse(savedMenu));
        }
        if (savedOrders) {
          setOrders(JSON.parse(savedOrders));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('admin-categories', JSON.stringify(categories));
    }
  }, [categories, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('admin-menu-items', JSON.stringify(menuItems));
    }
  }, [menuItems, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('admin-orders', JSON.stringify(orders));
    }
  }, [orders, loading]);

  // Category functions
  const createCategory = (category: Omit<Category, 'id'>) => {
    const newCategory: Category = {
      ...category,
      id: Date.now().toString()
    };
    setCategories(prev => [...prev, newCategory]);
    return newCategory.id;
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategories(prev => 
      prev.map(category => 
        category.id === id ? { ...category, ...updates } : category
      )
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(category => category.id !== id));
    // Also remove any items in this category
    setMenuItems(prev => prev.filter(item => item.categoryId !== id));
  };

  const reorderCategories = (reorderedCategories: Category[]) => {
    setCategories(reorderedCategories);
  };

  // Menu functions
  const getMenu = () => menuItems;

  const createItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString()
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateItem = (id: string, updates: Partial<MenuItem>) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const reorderItems = (reorderedItems: MenuItem[]) => {
    setMenuItems(reorderedItems);
  };

  const getOrders = () => orders;

  const value: AdminDataContextType = {
    categories,
    createCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    menuItems,
    getMenu,
    createItem,
    updateItem,
    deleteItem,
    reorderItems,
    orders,
    getOrders,
    loading
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within AdminDataProvider');
  }
  return context;
};