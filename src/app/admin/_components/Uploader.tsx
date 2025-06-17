'use client';

import { useState } from "react";

export const Uploader = () => {
    const [imageUrl, setImageUrl] = useState('');

    const handleUpload = async(event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0){
            console.log(event.target.files[0]);
            
            const file = event.target.files[0];

            const data = new FormData();
            data.append('file', file); 
            data.append('upload_preset', 'food-delivery');

            const response = await fetch(`https://api.cloudinary.com/v1_1/dcchyvdpt/upload`, {
                method: 'POST',
                body: data,
            }
        );
            const dataJson = await response.json();
            setImageUrl(dataJson.secure_url);
        };
    };

    return(
        <div className="w-[412px] h-[138px] border border-dashed border-[#2563EB] rounded-md hover:border-black">
            <input 
                placeholder=""
                type="file" 
                onChange={handleUpload}
            />
            { imageUrl && <img src={imageUrl}/> }
        </div>
    )
};