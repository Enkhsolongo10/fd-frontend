'use client';

import {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';
import {AdminCategoryPage} from './category/page';
import {AdminMenuPage} from './foods/page';

export default function Admin() {
    return(
        <div className='flex flex-col'>
            <AdminCategoryPage/>           
            <AdminMenuPage/>
        </div>
    )
};
