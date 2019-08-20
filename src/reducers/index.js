export const initialState = {
  cardOpen : false,
    items: [
      {
        id: 0,
        name: `Item 1`,
        price: 890,
        count: 0
      },
      {
        id: 1,
        name: `Item 2`,
        price: 20,
        count: 3
      },
      {
        id: 2,
        name: `Item 3`,
        price: 428,
        count: 0
      },
      {
        id: 3,
        name: `Item 4`,
        price: 45,
        count: 23
      }
    ]
  }

  export function rootReducer (state = initialState, action)  {
    
    switch (action.type) {
      case 'INC_COUNT':
        return { ...state, items: action.payload };
        
      case 'DEC_COUNT':
        return { ...state, items: action.payload };
      
      case 'NULL_COUNT':
        return { ...state, items: action.payload };

      case 'NULL_ALL_COUNT':
        return { ...state, items: action.payload };

      case 'CARD_OPEN':
        return { ...state, cardOpen: action.payload };
        
      case 'LIST_OPEN':
          return { ...state, cardOpen: action.payload };
          
      default:
        return state
    }
  }

    

