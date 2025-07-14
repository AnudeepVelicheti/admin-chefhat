// Enhanced menu data with additional information for popups
export interface NutritionalFact {
  name: string;
  value: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  type?: string;  // Add this property for item type identification
  category?: string;
  image?: string;
  ingredients?: string[];
  nutritionalFacts?: {
    name: string;
    value: string;
  }[];
  icon?: React.ReactNode;
  customizations?: string[]; // Add this line to support customizations
}

export interface MenuData {
  mains: MenuItem[];
  salads: MenuItem[];
  smoothies: MenuItem[];
  drinks: MenuItem[];
  desserts: MenuItem[];
}

const menuData: MenuData = {
  mains: [
    { 
      id: 1, 
      name: 'HUMMUS', 
      price: '$4.99', 
      description: 'Fresh made daily with our signature spices',
      ingredients: ['Chickpeas', 'Tahini', 'Olive Oil', 'Garlic', 'Lemon', 'Chef Hut Special Spices'],
      nutritionalFacts: [
        { name: 'Calories', value: '166 kcal' },
        { name: 'Protein', value: '7.9g' },
        { name: 'Carbs', value: '14.3g' },
        { name: 'Fat', value: '9.6g' }
      ]
    },
    { 
      id: 2, 
      name: 'REG. FRIES', 
      price: '$4.99', 
      description: 'Crispy golden fries with our special seasoning',
      image: '/lovable-uploads/8f6a8780-4f09-4bdf-b615-eea745e4f948.png',
      ingredients: ['Potatoes', 'Vegetable Oil', 'Sea Salt', 'Chef Hut Seasoning Blend'],
      nutritionalFacts: [
        { name: 'Calories', value: '312 kcal' },
        { name: 'Protein', value: '3.4g' },
        { name: 'Carbs', value: '41g' },
        { name: 'Fat', value: '15g' }
      ]
    },
    { 
      id: 3, 
      name: 'CHICKEN TENDERS', 
      price: '$7.99', 
      description: 'Juicy chicken tenders, perfectly seasoned and fried',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Chicken Breast', 'Flour', 'Spices', 'Vegetable Oil'],
      nutritionalFacts: [
        { name: 'Calories', value: '240 kcal' },
        { name: 'Protein', value: '20g' },
        { name: 'Carbs', value: '15g' },
        { name: 'Fat', value: '10g' }
      ]
    },
    { 
      id: 4, 
      name: 'CHICKEN WINGS', 
      price: '$9.99', 
      description: 'Classic chicken wings with your choice of sauce',
      image: '/lovable-uploads/49959951-9649-4949-887d-8568175185a5.png',
      ingredients: ['Chicken Wings', 'Sauce', 'Spices'],
      nutritionalFacts: [
        { name: 'Calories', value: '320 kcal' },
        { name: 'Protein', value: '25g' },
        { name: 'Carbs', value: '5g' },
        { name: 'Fat', value: '22g' }
      ]
    },
    { 
      id: 5, 
      name: 'FRIED CHICKEN SANDWICH', 
      price: '$8.99', 
      description: 'Crispy fried chicken on a toasted bun with toppings',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Chicken Breast', 'Bun', 'Lettuce', 'Tomato', 'Mayonnaise'],
      nutritionalFacts: [
        { name: 'Calories', value: '450 kcal' },
        { name: 'Protein', value: '30g' },
        { name: 'Carbs', value: '40g' },
        { name: 'Fat', value: '20g' }
      ]
    },
    { 
      id: 6, 
      name: 'GRILLED CHICKEN SANDWICH', 
      price: '$8.99', 
      description: 'Healthy grilled chicken on a toasted bun with fresh toppings',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Chicken Breast', 'Bun', 'Lettuce', 'Tomato', 'Light Dressing'],
      nutritionalFacts: [
        { name: 'Calories', value: '380 kcal' },
        { name: 'Protein', value: '35g' },
        { name: 'Carbs', value: '35g' },
        { name: 'Fat', value: '10g' }
      ]
    },
    { 
      id: 7, 
      name: 'STEAK SANDWICH', 
      price: '$10.99', 
      description: 'Juicy steak slices on a toasted roll with caramelized onions',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Steak', 'Roll', 'Caramelized Onions', 'Cheese Sauce'],
      nutritionalFacts: [
        { name: 'Calories', value: '520 kcal' },
        { name: 'Protein', value: '40g' },
        { name: 'Carbs', value: '45g' },
        { name: 'Fat', value: '25g' }
      ]
    },
    { 
      id: 8, 
      name: 'LAMB SANDWICH', 
      price: '$11.99', 
      description: 'Tender lamb on a toasted bun with mint yogurt sauce',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Lamb', 'Bun', 'Mint Yogurt Sauce', 'Lettuce'],
      nutritionalFacts: [
        { name: 'Calories', value: '480 kcal' },
        { name: 'Protein', value: '38g' },
        { name: 'Carbs', value: '42g' },
        { name: 'Fat', value: '22g' }
      ]
    },
    { 
      id: 9, 
      name: 'FALAFEL SANDWICH', 
      price: '$7.99', 
      description: 'Vegetarian delight with falafel, hummus, and tahini',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Falafel', 'Pita Bread', 'Hummus', 'Tahini', 'Vegetables'],
      nutritionalFacts: [
        { name: 'Calories', value: '420 kcal' },
        { name: 'Protein', value: '15g' },
        { name: 'Carbs', value: '55g' },
        { name: 'Fat', value: '18g' }
      ]
    },
    { 
      id: 10, 
      name: 'HALLOUMI SANDWICH', 
      price: '$9.99', 
      description: 'Grilled halloumi cheese with vegetables and pesto',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Halloumi Cheese', 'Bun', 'Vegetables', 'Pesto'],
      nutritionalFacts: [
        { name: 'Calories', value: '460 kcal' },
        { name: 'Protein', value: '20g' },
        { name: 'Carbs', value: '45g' },
        { name: 'Fat', value: '22g' }
      ]
    },
  ],
  salads: [
    { 
      id: 11, 
      name: 'GREEK SALAD', 
      price: '$8.99', 
      description: 'Classic Greek salad with fresh vegetables and feta',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Tomatoes', 'Cucumbers', 'Onions', 'Olives', 'Feta Cheese'],
      nutritionalFacts: [
        { name: 'Calories', value: '280 kcal' },
        { name: 'Protein', value: '8g' },
        { name: 'Carbs', value: '15g' },
        { name: 'Fat', value: '20g' }
      ]
    },
    { 
      id: 12, 
      name: 'CAESAR SALAD', 
      price: '$7.99', 
      description: 'Romaine lettuce with croutons, parmesan, and Caesar dressing',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
      nutritionalFacts: [
        { name: 'Calories', value: '320 kcal' },
        { name: 'Protein', value: '10g' },
        { name: 'Carbs', value: '20g' },
        { name: 'Fat', value: '22g' }
      ]
    },
    { 
      id: 13, 
      name: 'FATTOUSH', 
      price: '$9.99', 
      description: 'Lebanese bread salad with toasted pita bread',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Pita Bread', 'Tomatoes', 'Cucumbers', 'Mint', 'Parsley'],
      nutritionalFacts: [
        { name: 'Calories', value: '300 kcal' },
        { name: 'Protein', value: '7g' },
        { name: 'Carbs', value: '30g' },
        { name: 'Fat', value: '18g' }
      ]
    },
    { 
      id: 14, 
      name: 'TABBOULEH', 
      price: '$8.99', 
      description: 'Parsley salad with bulgur, tomatoes, and mint',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Parsley', 'Bulgur', 'Tomatoes', 'Mint', 'Lemon Juice'],
      nutritionalFacts: [
        { name: 'Calories', value: '250 kcal' },
        { name: 'Protein', value: '5g' },
        { name: 'Carbs', value: '25g' },
        { name: 'Fat', value: '15g' }
      ]
    },
    { 
      id: 15, 
      name: 'QUINOA SALAD', 
      price: '$10.99', 
      description: 'Healthy quinoa salad with mixed vegetables',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Quinoa', 'Cucumber', 'Bell Peppers', 'Black Beans', 'Corn'],
      nutritionalFacts: [
        { name: 'Calories', value: '350 kcal' },
        { name: 'Protein', value: '12g' },
        { name: 'Carbs', value: '45g' },
        { name: 'Fat', value: '15g' }
      ]
    },
  ],
  smoothies: [
    { 
      id: 16, 
      name: 'STRAWBERRY BANANA SMOOTHIE', 
      price: '$5.99', 
      description: 'Classic smoothie with strawberries and banana',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Strawberries', 'Banana', 'Yogurt', 'Milk'],
      nutritionalFacts: [
        { name: 'Calories', value: '220 kcal' },
        { name: 'Protein', value: '5g' },
        { name: 'Carbs', value: '40g' },
        { name: 'Fat', value: '3g' }
      ]
    },
    { 
      id: 17, 
      name: 'MANGO PASSION SMOOTHIE', 
      price: '$6.99', 
      description: 'Tropical smoothie with mango and passion fruit',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Mango', 'Passion Fruit', 'Yogurt', 'Orange Juice'],
      nutritionalFacts: [
        { name: 'Calories', value: '250 kcal' },
        { name: 'Protein', value: '4g' },
        { name: 'Carbs', value: '50g' },
        { name: 'Fat', value: '2g' }
      ]
    },
    { 
      id: 18, 
      name: 'GREEN DETOX SMOOTHIE', 
      price: '$7.99', 
      description: 'Healthy smoothie with spinach, kale, and green apple',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Spinach', 'Kale', 'Green Apple', 'Banana', 'Almond Milk'],
      nutritionalFacts: [
        { name: 'Calories', value: '180 kcal' },
        { name: 'Protein', value: '6g' },
        { name: 'Carbs', value: '30g' },
        { name: 'Fat', value: '2g' }
      ]
    },
    { 
      id: 19, 
      name: 'BERRY BLAST SMOOTHIE', 
      price: '$6.99', 
      description: 'Antioxidant-rich smoothie with mixed berries',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Blueberries', 'Raspberries', 'Blackberries', 'Yogurt', 'Apple Juice'],
      nutritionalFacts: [
        { name: 'Calories', value: '230 kcal' },
        { name: 'Protein', value: '5g' },
        { name: 'Carbs', value: '45g' },
        { name: 'Fat', value: '3g' }
      ]
    },
    { 
      id: 20, 
      name: 'PEANUT BUTTER BANANA SMOOTHIE', 
      price: '$6.99', 
      description: 'Creamy smoothie with peanut butter and banana',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Peanut Butter', 'Banana', 'Milk', 'Honey'],
      nutritionalFacts: [
        { name: 'Calories', value: '300 kcal' },
        { name: 'Protein', value: '10g' },
        { name: 'Carbs', value: '40g' },
        { name: 'Fat', value: '12g' }
      ]
    },
  ],
  drinks: [
    { 
      id: 21, 
      name: 'FRESH ORANGE JUICE', 
      price: '$3.99', 
      description: 'Freshly squeezed orange juice',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Oranges'],
      nutritionalFacts: [
        { name: 'Calories', value: '110 kcal' },
        { name: 'Carbs', value: '26g' }
      ]
    },
    { 
      id: 22, 
      name: 'LEMONADE', 
      price: '$2.99', 
      description: 'Refreshing homemade lemonade',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Lemons', 'Sugar', 'Water'],
      nutritionalFacts: [
        { name: 'Calories', value: '90 kcal' },
        { name: 'Carbs', value: '24g' }
      ]
    },
    { 
      id: 23, 
      name: 'ICED TEA', 
      price: '$2.49', 
      description: 'Brewed iced tea',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Tea', 'Water'],
      nutritionalFacts: [
        { name: 'Calories', value: '2 kcal' }
      ]
    },
    { 
      id: 24, 
      name: 'COFFEE', 
      price: '$2.99', 
      description: 'Freshly brewed coffee',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Coffee Beans', 'Water'],
      nutritionalFacts: [
        { name: 'Calories', value: '5 kcal' }
      ]
    },
    { 
      id: 25, 
      name: 'MINERAL WATER', 
      price: '$1.99', 
      description: 'Sparkling mineral water',
      image: '/lovable-uploads/69551a14-4497-4923-981d-7890944c989a.png',
      ingredients: ['Mineral Water'],
      nutritionalFacts: [
        { name: 'Calories', value: '0 kcal' }
      ]
    },
  ],
  desserts: []
};

export default menuData;
