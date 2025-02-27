import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customtypes/product";
import { prd1, prd2, prd3, prd4, prd5, prd6, prd7, prd8 } from "@assets/images";

type TResponse = TProduct[];

const actGetProductByBanner = createAsyncThunk(
  "product/actGetProductByBanner",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      /*const response = await axios.get<TResponse>(
        `api/products?cate_id=${prefix}`
      );
      return response.data; */
      return <TResponse>[
        {
          id: 1,
          title: `${prefix}-aaaaa`,
          oldPrice: 12,
          price: Math.random(),
          summary: "Black",
          discount: 12,
          img: prd1,
          rating : 3,
        },
        {
          id: 2,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          discount: undefined,
          img: prd2,
          rating : 3,
        },
        {
          id: 3,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          discount: 0,
          img: prd3,
          rating : 4,
        },
        {
          id: 4,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          discount: 12,
          img: prd4,
          rating : 5,
        },
        {
          id: 5,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          discount: 12,
          img: prd5,
          rating : 2,
        },
        {
          id: 6,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          img: prd6,
          rating : 4,
        },
        {
          id: 7,
          title: "aaa",
          price: Math.random(),
          summary: "Black",
          discount: 12,
          img: prd7,
          rating : 5,
        },
        {
          id: 8,
          title: "aaa",
          price: Math.random(),
          discount: null,
          summary: "Black",
          img: prd8,
          rating : 5,
        },
      ];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductByBanner;
