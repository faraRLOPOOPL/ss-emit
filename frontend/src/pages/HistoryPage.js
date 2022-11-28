import React from 'react';
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HistoryHead } from '../components/History';

export const HistoryPage = () => {
    return(
        <div>
            <Navbar />
            <HistoryHead />
            <Footer />
        </div>
    )
}