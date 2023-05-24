import React from 'react'

const Card = ({ top }) => {
    return (
        <div className="bg-[#F3F3F3]">
            <img className='w-full h-64 object-cover object-center' src="/assets/home/slide2.jpg" />
            <div className="px-5 py-5 text-center">
                <h2 className="text-2xl font-semibold">Caeser Salad</h2>
                <p className="my-2 mb-4">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button className="text-primary bg-[#E8E8E8] border-b-2 border-primary px-5 py-3 uppercase font-semibold rounded-lg hover:bg-[#1F2937] hover:border-none transition-all duration-200 ease-linear">add to cart</button>
            </div>
        </div>
    )
}

export default Card