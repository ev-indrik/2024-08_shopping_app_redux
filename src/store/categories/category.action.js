import { CATEGOIRES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGOIRES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  try {}
  catch,
  const categoriesArray = await getCategoriesAndDocuments();
};
