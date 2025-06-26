'use client';

import {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';
import { AdminCategory } from '../_components/admin/Category';
import { AdminMenu } from '../_components/admin/Menu';

export default function AdminPage() {
    return(
        <div className='flex flex-col ml-7'>
            <AdminCategory />           
            <AdminMenu/>
        </div>
    )
};
