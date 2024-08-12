import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGOIRES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGOIRES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
