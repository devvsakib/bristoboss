import { useEffect, useState } from "react"
import Heading from "../../../components/Common/Heading"
import MenuItem from "../../../components/Common/MenuItem"

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <div className="my-36">
            <Heading title='From Our Menu' tagline='Check it out' />
            <div>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        menu.map((item, ind) => (
                            <MenuItem
                                key={ind}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularMenu