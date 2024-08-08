import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGOIRES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGOIRES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
