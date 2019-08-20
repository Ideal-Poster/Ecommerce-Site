import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const apiUrl = process.env.API_URL || 'http://localhost:8091/graphql';

const client = new ApolloClient({
  link: new HttpLink({uri: apiUrl}),
  cache: new InMemoryCache()
});

export const requestBrandProducts = async ({brand}) => {
  brand = brand.charAt(0).toUpperCase() + brand.slice(1);
  try {
    const query = gql`{
      brandFilter(name: "${brand}") {
        id
        name
        description
        images
      }
    }`;
    const {data: {brandFilter}} = await client.query({query});
    console.log(brandFilter);
    return brandFilter;
  } catch (error) {
    console.log(error);
  }
}

export const requestProductsByCategory = async ({category}) => {
  category = category.slice(0,-1);
  console.log(category);
  try {
    const query = gql`{
      categoryFilter(name: "${category}") {
        id
        name
        description
      }
    }`;
    const {data: {categoryFilter}} = await client.query({query});
    console.log(categoryFilter);
    return categoryFilter;
  } catch (error) {
    console.log(error);
  }
}

export const requestProduct = async ({product: {id}}) => {
  try {
    const query = gql`{
      product(id: "${id}") {
        id
        name
        price
        description
        images
      }
    }`;
    const {data: {product}} = await client.query({query});
    // console.log('hello' + product);
    return product;
  } catch (error) {
    console.log(error);
  }
}


export const requestBrands = async () => {
  try {
    const query = gql`{
      brands {
        name
      }
    }`
    const {data: {brands}} = await client.query({query});
    // console.log(brands);
    return brands;
  } catch (error){
    console.log(error);
  }
}

export const requestCategories = async () => {
  try {
    const query = gql`{
      categories {
        name
      }
    }`
    const {data: {categories}} = await client.query({query});
    console.log(categories);
    return categories;
  } catch (error){
    console.log(error);
  }
}