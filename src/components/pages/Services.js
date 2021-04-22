import React from 'react';
import '../../App.css'
import TopData from '../TopData';

import InfoSection from '../../components/InfoSection';
import { InfoData, InfoDataOne, InfoDataThree, InfoDataFour, InfoDataFive, InfoDataSix, InfoDataSeven, InfoDataEight, InfoDataTow } from '../../data/InfoData';
import Footer from '../Footer';


export default function Services() {
    return <div className='services-up'>
        <TopData />
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataOne} />
        <InfoSection {...InfoDataTow} />
        <InfoSection {...InfoDataThree} />
        <InfoSection {...InfoDataFour} />
        <InfoSection {...InfoDataFive} />
        <InfoSection {...InfoDataSix} />
        <InfoSection {...InfoDataSeven} />
        <InfoSection {...InfoDataEight} />
        <Footer />
    </div>
}