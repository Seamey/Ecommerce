import { baseApi } from '@/constants/baseApi'
import UpdateProductForm from '@/components/forms/UpdateForm'
import React from 'react'
type Props = {
	params:{
		id:number
	},
	
}
export const getData=async(id:number )=>
{
  const data=await fetch(`${baseApi}products/${id}/`)
  const respone= await data.json()
  console.log(respone)
  return respone;
}
export default async function page(props:Props) {
  const data= await getData(props.params.id)
  console.log(data)
  return (
	<div>
      <UpdateProductForm 
        category={data.category}
        price={data.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      />
	</div>
  )
}