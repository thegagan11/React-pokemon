import { useState } from 'react';

function useFlip(initialState = false) {
    const [isFlipped, setIsFlipped] = useState(initialState);


    const toggle = () => {
        setIsFlipped(oldState => !oldState);
    };


    return [isFlipped, toggle];

}



export default useFlip;