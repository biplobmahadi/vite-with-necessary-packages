import APIPaths from "../../paths/APIPaths";
import usePublicAxios from "./usePublicAxios";

export default function useRefreshToken() {
  const { publicGet } = usePublicAxios();
  const refresh = async () => {
    const response = await publicGet(APIPaths.Auth.Refresh, {
      activateAbort: false,
    });

    localStorage.setItem("access-token", "new-access-token");
    return response;
  };
  return refresh;
}
