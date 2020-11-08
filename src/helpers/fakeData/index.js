import React from 'react'
import { Timeline } from '../../mui';
import ReportIcon from '../../Views/Train/SVG/Report'
const data = {
    modules: {
        pages: [
            {
                name: "TRAIN", children: [
                    { name: 'Activity', link: '/train', icon: <Timeline/> },
                    {name: 'Report', link: '/report', icon: <ReportIcon/>}
            ] },
            { name: 'FLIGHTS', link: '/flight'},
            { name: 'HOTELS' }, { name: 'BUS' }
        ],
        
        
    }
}

export default data;