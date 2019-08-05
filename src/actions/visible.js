export function cardOpen(mainvisible) {
    mainvisible= {
        list: false,
        card: true,
    }
     return {
        type: 'CARD_OPEN',
        payload: mainvisible,
      }
}

export function listOpen(mainvisible) {
    mainvisible= {
            list: true,
            card: false,
    }
    return {
            type: 'LIST_OPEN',
            payload: mainvisible,
    }
}