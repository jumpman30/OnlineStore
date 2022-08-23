import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'users',  
    baseQuery: fetchBaseQuery({
         baseUrl: 'https://jsonplaceholder.typicode.com'
         }),
    endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users', // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;