import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => setIsFlipped(false),
        onSwipedRight: () => setIsFlipped(true),
    });

    return (
        <div {...handlers} className="max-w-sm mx-auto">
            <div
                className={`relative w-full h-64 p-4 border-2 border-gray-300 bg-white shadow-md transition-transform duration-700 ease-in-out ${isFlipped ? 'transform rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="absolute top-0 left-0 w-full h-full backface-hidden">
                    <div className="h-full flex justify-center items-center font-bold text-xl">
                        {/* Front content here */}
                        Question?
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full transform rotate-y-180 backface-hidden">
                    <div className="h-full flex justify-center items-center font-bold text-xl">
                        {/* Back content here */}
                        Answer!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
