'use client';

import { Category } from './_components/Category';
import { Food } from './_components/Food';

export default function Admin() {
    return(
        <div className='flex flex-col'>
            <Category/>
            <Food/>
            <Food/>
        </div>
    )
}
