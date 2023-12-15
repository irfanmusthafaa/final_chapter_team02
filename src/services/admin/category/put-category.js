import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import httpAdmin from "../../../utils/httpAdmin";

const UpdateCategory = async (id, input) => {
  console.log(input, "input");
  return await httpAdmin.put(`${API_ENDPOINT.DATA_CATEGORY}/${id}`, {
    categoryName: input,
  });
  // .then((result) => {
  //   console.log(result, "result");
  // })
  // .catch((err) => {});
};

const useUpdateCategory = () => {
  return useMutation(UpdateCategory);
};

export { UpdateCategory, useUpdateCategory };

// const updateCategory = async (categoryId, updatedData) => {
//   try {
//     const response = await httpAdmin.put(`${API_ENDPOINT.DATA_CATEGORY}/${categoryId}`, updatedData);
//     return response.data; // Jika API mengembalikan data setelah pembaruan
//   } catch (error) {
//     console.log(error, "error");
//     throw new Error(error.response ? error.response.data.message : "Terjadi kesalahan saat memperbarui kategori");
//   }
// };

// const useUpdateCategory = () => {
//   return useMutation(updateCategory);
// };

// export { updateCategory, useUpdateCategory };
