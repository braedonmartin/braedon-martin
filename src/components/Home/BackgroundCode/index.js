import { useRef } from 'react'
import './index.scss'

function BackgroundCode() {
    const codeRef = useRef()

    return(
    <div className="code-container" ref={codeRef}>

        <div className="useState">
            <span>{`const [letterClass, setLetterClass] = useState('text-animate');`}</span>
        </div>

        <div className='effect-container'>
            <span className='useEffect indent-0'>{`useEffect(() => {`}</span>
            <span className='effect-closing'>{`}, []);`}</span>
        </div>

        <div className='css'>
            <span>{`animation: float 6s ease-in-out infinite;`}</span>
        </div>
        
        <div className='keyframes'>
            <span className='indent-0'>{`@keyframes float {`}</span>
            <span className='indent-1'>{`0% {`}</span>
            <span className='indent-2'>{`transform: translateY(0);`}</span>
            <span className='indent-1'>{`}`}</span>
            <span className='indent-1'>{`100% {`}</span>
            <span className='indent-2'>{`transform: translateY(-10px);`}</span>
            <span className='indent-1'>{`}`}</span>
            <span className='indent-0'>{`}`}</span>
        </div>
    </div>
    )
}

export default BackgroundCode;