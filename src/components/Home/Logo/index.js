import { useRef } from 'react'
import './indes.scss'
import LogoB from '../../../assets/images/Bangela.png'

function Logo() {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    
    return(
    <div className='logo-container' ref={bgRef}>
        <img ref={solidLogoRef} className='solid-logo' src={LogoB} alt="B"/>
        <svg
            className='logo-outline'
            width="714"
            height="891"
            version="1.0"
            viewBox="0 0 714 891"
            xmins="http://www.w3.org/2000/svg">
                <g
                    className='svg-container'
                    fill="none">
                    <path
                        ref={outlineLogoRef}
                        d="m 285.45523,883.51541 c -31.36343,-3.3245 -76.66942,-19.5874 -106.86877,-38.3613 -33.22564,-20.65526 -61.18603,-48.64526 -74.91449,-74.99383 -8.39863,-16.11923 -11.405901,-27.69155 -11.434151,-44 -0.0292,-16.87692 2.348421,-24.28388 10.020031,-31.21472 9.7454,-8.8044 16.50157,-7.72467 18.05126,2.88485 3.34996,22.93447 37.47158,58.34799 67.68726,70.25001 13.9147,5.48104 26.02598,7.43119 51.55051,8.30062 45.19206,1.53937 99.32103,-4.78954 144.66667,-16.9148 61.98301,-16.57404 133.80254,-50.55959 179.50626,-84.94374 32.58224,-24.5125 52.23176,-45.05475 64.16532,-70.04633 11.1557,-29.65915 -4.51108,-51.11454 -19.42669,-69.73628 -20.83762,-21.46346 -52.08488,-34.58722 -98.91156,-41.48835 -20.19649,-2.97648 -91.17491,-3.38956 -116,-0.6751 -40.10968,4.38573 -79.3074,11.70222 -86.49594,16.145 -5.96918,3.68914 -10.05071,11.80437 -18.15922,36.1055 -19.53964,58.56019 -29.6009,118.09574 -25.41686,150.39928 2.58298,19.9424 0.73842,22.30939 -19.92798,25.57211 -23.2625,3.67257 -45.58151,-6.73328 -72.32862,-33.72197 -17.05965,-17.21375 -21.99453,-26.3345 -25.13851,-46.46152 -2.14482,-13.73071 -0.74109,-49.83972 2.73891,-70.45456 10.71547,-63.47628 39.41719,-140.3113 89.40298,-239.33334 37.53122,-74.34948 66.13875,-123.44626 102.34752,-175.65077 l 10.8553,-15.65077 -10.7488,5.4044 c -14.71051,7.39629 -60.36442,33.7167 -82.36388,47.48448 -48.82591,30.55633 -71.90552,53.98422 -92.90647,94.30845 -8.69537,16.69609 -12.72333,27.35605 -16.48057,43.61559 -2.93228,12.68948 -3.11821,23.91921 -0.65493,39.5552 -0.27038,19.58939 -27.65118,18.2474 -35.38959,18.24052 -22.111441,-0.86361 -26.670171,-1.61394 -45.703733,-11.05232 -28.81686,-14.28974 -50.06805,-40.0072 -50.24271,-58.63112 -0.22544,-24.03839 36.78189,-72.97115 89.315733,-118.09731 97.8861,-84.08336 221.87696,-142.613526 343.96404,-162.368936 24.11542,-3.90223 66.49505,-4.86124 86.25533,-1.95188 41.41042,6.09694 67.32334,18.051 91.07799,42.01576 14.48911,14.617256 22.04391,26.739426 29.11158,46.711366 3.81366,10.77674 5.84781,15.0908 6.40856,28.06734 0.56803,13.14514 -1.08868,17.80695 -4.16199,32.66667 -9.9454,48.08688 -32.78925,85.3234 -81.13192,132.24873 -28.23885,27.41095 -52.48604,46.96332 -115.74377,93.33312 l -18.1842,13.32958 12.35906,1.61694 c 55.30687,7.23587 127.81989,38.54667 161.59357,63.66508 14.98248,11.14288 29.64348,32.10934 37.54622,43.42099 12.01282,17.19463 22.79533,41.92633 25.64216,63.23288 4.82233,36.09195 -4.74127,69.02723 -29.82304,102.70504 -13.85493,18.60329 -53.31253,58.05856 -76.94956,76.94503 -68.80266,54.97472 -146.96727,92.54911 -218.26534,104.92191 -17.8471,3.0971 -53.433,4.4109 -70.49297,2.6025 z m 59.42499,-4.6207 c 56.17118,-7.5437 120.69582,-33.398 180.66666,-72.39113 46.42546,-30.18589 95.69478,-74.46805 122.7807,-110.35256 10.82465,-14.34093 22.06099,-37.95428 26.58195,-50.65741 3.89448,-10.94283 5.05519,-39.43439 2.03606,-52.12793 -4.42951,-18.62328 -12.87983,-39.08849 -24.78493,-57.87207 -7.98296,-12.59533 -29.60606,-39.3876 -47.45092,-49.25795 -3.10974,-1.72006 -5.57859,-3.74118 -7.92319,-4.91931 -38.90409,-19.54878 -92.27785,-44.56611 -142.23967,-51.89697 -10.64475,-1.5619 -16.33333,-2.96261 -16.33333,-4.02178 0,-0.89387 6.75,-6.61139 15,-12.70563 78.55489,-58.02805 96.16711,-72.30939 126.40177,-102.49612 44.99395,-44.92267 64.87283,-77.50969 75.29043,-123.422 6.09039,-26.84149 5.09947,-44.23525 -3.75698,-65.94691 -18.19579,-44.607056 -56.34716,-72.100466 -112.26856,-80.905246 -27.2752,-4.29446 -70.77937,-2.24304 -108,5.09271 C 298.4032,71.124034 163.98609,143.56317 72.205417,238.3089 c -31.97683,33.00988 -51.44501,63.49132 -51.52263,80.66928 -0.0789,17.45614 26.9584,45.77695 56.34524,59.02011 18.549116,7.7516 39.902843,8.73114 58.539203,3.48501 9.22658,-4.67545 11.09086,-7.83745 8.65456,-14.67892 -7.75092,-21.76577 6.81796,-69.25285 33.12712,-107.97744 10.35368,-15.23964 35.07807,-40.03121 51.20457,-51.34372 35.32051,-24.77682 117.42404,-71.98961 125.1907,-71.98961 3.80855,0 1.41678,5.44315 -9.1285,20.77437 -42.47442,61.75134 -78.74337,125.13066 -116.7364,203.99474 -54.31319,112.74068 -79.15625,192.92822 -79.28006,255.89756 -0.0684,34.78821 3.79743,45.44184 24.07123,66.33638 27.61052,28.4559 48.17398,38.49896 70.86178,34.60844 11.71461,-2.00884 15.88576,-3.96702 16.87889,-7.924 0.44018,-1.75376 0.0485,-9.6009 -0.87021,-17.43808 -2.74,-23.37198 1.31545,-56.11096 12.66585,-102.24941 6.87359,-27.94055 20.68926,-69.79692 25.40695,-76.97367 4.64041,-7.05917 11.06517,-9.7953 33.52545,-14.27757 84.62667,-16.88847 173.94725,-15.61835 232.07602,3.30009 28.92716,9.41456 50.78639,31.2985 61.15232,46.22597 8.55288,16.02225 11.9541,31.12568 9.30953,49.43577 -0.18865,1.18146 -0.42643,2.2226 -0.72299,3.06638 -16.88178,48.03183 -90.7708,104.33087 -186.74051,142.28528 -48.76416,19.28542 -90.07868,29.44976 -142.66667,35.09938 -25.99242,2.79241 -76.29669,3.1613 -91.33333,0.66978 -23.55821,-3.90352 -41.62836,-12.25617 -59.91078,-27.69285 -16.87208,-14.24584 -35.42255,-40.53155 -35.42255,-50.19313 0,-8.37416 -3.80595,-9.84707 -10.62283,-4.11104 -7.02579,5.91181 -9.80136,12.97268 -10.41656,26.49894 -1.35652,29.82552 12.3968,56.41766 45.7743,88.50487 30.82994,29.63815 70.22262,50.9876 116.32282,63.0429 8.3622,2.1867 18.89511,4.4569 23.40647,5.045 13.5719,1.769 48.61048,1.4794 63.5358,-0.525 z m 5.33333,-507.88175 c 0,-1.73103 10.54901,-26.78103 23.44225,-55.66667 49.40861,-110.69365 51.95305,-117.39716 50.94724,-134.22435 -1.06936,-17.89056 -12.35563,-35.22168 -29.83595,-45.81585 -7.87757,-4.77432 -9.06762,-7.88512 -4.22021,-11.03173 6.50119,-4.22014 63.89033,-22.41722 91.0158,-28.85951 27.21496,-6.46354 79.58036,-8.8873 99.73696,-4.6164 11.38454,2.41224 27.47604,9.42251 32.24724,15.35337 3.97897,4.94608 5.62785,5.70874 5.61246,20.64506 -0.0139,13.52951 -2.13998,16.18409 -5.42722,26.03006 -19.29915,57.8049 -82.01962,120.36646 -178.6458,178.19319 -26.70361,15.981 -78.37144,43.14015 -82.07022,43.14015 -2.05632,0 -2.80255,-0.83803 -2.80255,-3.14732 z m 75.33333,-38.81436 c 109.9711,-64.3855 178.95473,-136.58507 188.68428,-197.48054 2.92478,-21.66434 -4.10454,-31.14233 -20.71741,-36.404226 -3.20012,-1.013594 -8.43618,-2.270064 -11.25967,-3.166478 -62.92771,-6.996548 -123.27426,7.025834 -186.54536,30.947824 l -4.50481,2.29896 9.65784,6.42052 c 15.90334,10.57254 25.87753,26.95603 27.5927,45.32354 1.51738,16.24912 -1.73041,25.14957 -43.36402,118.83762 -16.98228,38.21523 -30.87688,69.914 -30.87688,70.44174 0,1.44836 48.60154,-23.91004 71.33333,-37.21896 z"
                    />
                </g>
            </svg>
    </div>
    )
}

export default Logo;