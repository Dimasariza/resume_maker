export function reconstructData(prevData, action, key) {
    const { value, index } = action.payload
    return prevData.map((item, i) => i == index ? {...item, [key]: value} : item)
}