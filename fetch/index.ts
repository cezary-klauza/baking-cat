'use server';

import { ApiResponse, Category, Flavore, Product } from "@/types";

import { createClient, type QueryParams } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});


export async function getProducts(page:number = 1, pageSize:number = 6, categories?: Category[], flavores?: Flavore[], search?: string): Promise<Product[]>{
    let params = '';

    categories?.map((category, i) => {
        params += `${i===0 ? ' &&' : ' ||'} category->name == '${category}'`
    })

    flavores?.map((flavore) => {
        params += ` && '${flavore}' in flavores[]->name`
    })
    

    if(search!==undefined && search!==''){
        params += `&& name match ${search} || description match ${search}`;
    }

    let order = `| order(_id) [${(page-1)*pageSize}...${pageSize*page}]`

    let query = `*[_type == 'product' ${params}] ${order} {
                    _id,
                    name,
                    description,
                    price,
                    'image': image.asset->url,
                    'category': category->name,
                    'flavores': flavores[]->name
                    }`;


    const data = await client.fetch(query, {}, {
                            next: {
                            revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600
                            },
                        });

  return await data;
}

export async function getAmountOfProduct(categories?: Category[], flavores?: Flavore[], search?: string): Promise<number>{
    let params = '';

    categories?.map((category, i) => {
        params += `${i===0 ? ' &&' : ' ||'} category->name == '${category}'`
    })

    flavores?.map((flavore) => {
        params += ` && '${flavore}' in flavores[]->name`
    })

    if(search!==undefined && search!==''){
        params += `&& name match ${search} || description match ${search}`;
    }

    let query = `*[_type == 'product' ${params}]{
                    _id,
                    name,
                    description,
                    price,
                    'image': image.asset->url,
                    'category': category->name,
                    'flavores': flavores[]->name
                    }`;

    let amount: number = 0;
    const data = await client.fetch(query, {}, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600
    },
  });

    for await(const res of (await data)){
        amount++;
    }

    return amount;
}

export async function getProduct(id: string): Promise<Product>{
    const query = `*[_type == 'product' && _id == '${id}']{
                    _id,
                    name,
                    description,
                    price,
                    'image': image.asset->url,
                    'category': category->name,
                    'flavores': flavores[]->name
                    }`

    const data = await client.fetch(query, {}, {
                            next: {
                            revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600
                            },
                        });

    return (await data)[0];
}