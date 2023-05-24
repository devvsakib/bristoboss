const MenuItem = ({ item }) => {
    return (
        <div className="flex items-start gap-5">
            <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                    <img src={item.image} />
                </div>
            </div>
            <div className="">
                <h2 className='uppercase text-lmd'>{item.name} ----------------</h2>
                <p className='text-secondary text-sm'>{item.recipe}</p>
            </div>
            <div>
                <p className='text-primary text-lg font-semibold'>${item.price}</p>
            </div>
        </div>
    )
}

export default MenuItem