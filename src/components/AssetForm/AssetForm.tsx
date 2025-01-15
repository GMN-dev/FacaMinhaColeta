"use client"

import { SubmitHandler, useForm } from "react-hook-form";

const AssetForm = () => {
    
    const {register, handleSubmit, formState: { errors }} = useForm<AssetInterface>()
    
    const onSubmit: SubmitHandler<AssetInterface>()

    return(
        
    );
}