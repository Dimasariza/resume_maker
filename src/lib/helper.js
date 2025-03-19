export function reconstructData(prevData, action, key) {
    const { value, index } = action.payload
    return prevData.map((item) => item.id == index ? {...item, [key]: value} : item)
}