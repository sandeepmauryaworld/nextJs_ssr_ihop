import Image from "next/image";
import React from "react";


export const getStaticPaths=async()=>{

    const res = await fetch('https://qyydnh2xz9.execute-api.us-west-1.amazonaws.com/prod/products')
   
    const data = await res.json();


    const paths= data.products.map((curEle)=>{
        return{

            params:{
                pageno:curEle.lid.toString(),
            }
        }
    })
    return{
        paths, 
        fallback:false,
    }
}

export const getStaticProps= async (context)=>{

    const lid= context.params.pageno;
    console.log(lid,'this is lid');
    const res = await fetch(`https://qyydnh2xz9.execute-api.us-west-1.amazonaws.com/prod/products?lid=${lid}`)
    const data = await res.json();

    console.log(data, 'this is data for fid');
    return{
        props:{
            data,
        }
    }
   

}

const myData= ({data})=>{
     return (

        <>
     
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image alt="i-hop" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data.logo}width={400} height='400' />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">location-: {data.address_1} </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.location_name}</h1>
        <div className="flex mb-4">
        
        
        </div>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
         
        </div>
        <div className="flex">
   
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Like id  {data.fid}</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        
        </>
     )
}

export default myData;