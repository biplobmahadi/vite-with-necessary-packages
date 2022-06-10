export default function useEnvVariables() {
  const envVariables = import.meta.env;
  return {
    baseURL: envVariables.VITE_BASE_URL,
  };
}
