'use client';

import { Category } from './_components/Category';
import {useEffect, useState} from 'react';
import { Food } from './_components/Food';
import { useSearchParams } from 'next/navigation';
import { CategoryType } from '@/constants/types';


export default function Admin() {
    return(
        <div className='flex flex-col'>
            <Category/>           
            <Food/>
        </div>
    )
};
