
import { filmManagementService } from "../../services/FilmManagementService";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await filmManagementService.layDanhSachBanner();
      dispatch({
        type: SET_CAROUSEL,
        arrBanner: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
