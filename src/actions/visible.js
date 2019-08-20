export function toCardOpen() {
   const cardOpen = true;
     return {
        type: 'CARD_OPEN',
        payload: cardOpen,
      }
}

export function toListOpen() {
    const cardOpen = false;
    return {
            type: 'LIST_OPEN',
            payload: cardOpen,
    }
}