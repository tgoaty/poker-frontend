import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from "src/shared/config/config";
import { votingSystemENUM } from '../types/types';

interface tableData {
    tableName: string;
    votingSystem: votingSystemENUM;
    id: string;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
    endpoints: (builder) => ({
        createTableData: builder.mutation<void, tableData>({
            query: (data) => ({
                url: '/create-table',
                method: 'POST',
                body: data,
            }),
        }),
        fetchTableInfo: builder.query<tableData, string>({
            query: (id: string) => ({
                url: '/table',
                params: {
                    _id: id
                }
            })
        })
    }),
});

