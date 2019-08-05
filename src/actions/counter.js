export function incCounter(id, items) {
    const tempItems = items.map(function(item) {
      if (item.id === +id) {item.count++}
            return (
                item
        )})
      return {
        type: 'INC_COUNT',
        payload: tempItems,
    }
    }

export function decCounter(id, items) {
     const tempItems = items.map(function(item) {
      if (item.id === +id & item.count > 0) {item.count--}
                return (
                    item
            )})
       return {
            type: 'DEC_COUNT',
            payload: tempItems,
    }
    }

export function nullCounter(id, items) {
      const tempItems = items.map(function(item) {
      if (item.id === +id & item.count > 0) {item.count = 0}
                    return (
                        item
                )})
      return {
                type: 'NULL_COUNT',
                payload: tempItems,
        }
        }

export function nullAllCounter(items) {
      const tempItems = items.map(function(item) {
              item.count = 0
                        return (
                            item
                    )})
      return {
                    type: 'NULL_ALL_COUNT',
                    payload: tempItems,
            }
           }