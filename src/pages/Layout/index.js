import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './styles/index.scss';
import './styles/index_mobile.scss';

function Layout() {
    // Changes the page layout based on the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 930);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 930;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    return (
            <div className="App">
                <div className={`${isMobile ? "mobile" : "non-mobile"}`}>
                    <div className="page">
                        <span className='tags top-tags'>&lt;body&gt;</span>
                        <Outlet />
                        <span className='tags bottom-tags'>
                            &lt;/body&gt;
                            <br />
                            <span className='bottom-tag-html'>&lt;/html&gt;</span>
                        </span>
                    </div>
                </div>
            <Sidebar />
        </div>
    )
}

export default Layout;