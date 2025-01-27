'use client';

import Category from './categories/page';
import {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';
import { CategoryType } from '@/constants/types';
import Menu from './menu/page';


export default function Admin() {
    return(
        <div className='flex flex-col'>
            <Category/>           
            <Menu/>
        </div>
    )
};
