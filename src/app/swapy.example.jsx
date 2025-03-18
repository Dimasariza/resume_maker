import { addSkill } from '@/lib/features/skills'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSwapy, utils } from 'swapy'

const initialItems = [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
]
  
let id = 4

export default function Swapy() {
    const { title, listOfSkills } = useSelector((state) => state.Skills);
    const [items, setItems] = useState(listOfSkills)

    const dispatch = useDispatch();

    const [slotItemMap, setSlotItemMap] = useState(utils.initSlotItemMap(items, 'id'))
    const slottedItems = useMemo(() => utils.toSlottedItems(items, 'id', slotItemMap), [items, slotItemMap])
    const swapyRef = useRef(null)

    const containerRef = useRef(null)

    useEffect(() => {
        utils.dynamicSwapy(swapyRef.current, items, 'id', slotItemMap, setSlotItemMap)
    }, [items])

    useEffect(() => {
        swapyRef.current = createSwapy(containerRef.current, {
        manualSwap: true,
    })

    swapyRef.current.onSwap((event) => {
      setSlotItemMap(event.newSlotItemMap.asArray)
    })

    return () => {
        swapyRef.current?.destroy()
        }
    }, [])

    return (
        <div className="container" ref={containerRef}>
        <div className="items">
            {slottedItems.map(({ slotId, itemId, item }) => (
            <div className="slot size-10 bg-red-500" key={slotId} data-swapy-slot={slotId}>
                {item &&
                <div className="item size-10 bg-red-200" data-swapy-item={itemId} key={itemId}>
                    <span>{item.id}</span>
                    {/* <span className="delete" data-swapy-no-drag onClick={() => {
                        setItems(items.filter(i => i.id !== item.id))
                    }}>Del</span> */}
                </div>
                }
            </div>
            ))}
        </div>

        <div className="item item--add" onClick={()=>dispatch(addSkill())}>+</div>

        {/* <div className="item item--add" onClick={() => {
            const newItem = { id: `${id}`, title: `${id}` }
            setItems([...items, newItem])
            id++
        }}>+</div> */}
        </div>
    )
}