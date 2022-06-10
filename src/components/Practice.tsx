import { Fragment, useEffect, useState } from "react";
import axiosInstance from "../axios/instance";

export default function Practice() {
  const [photos, setPhotos] = useState<any>([]);
  console.log(photos);
  const fetchData = async (controller: AbortController) => {
    try {
      const res = await axiosInstance.get("/photos", {
        signal: controller.signal,
      });
      setPhotos(res.data);
    } catch (error) {
      console.log(error, "error is -");
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort();
  }, []);
  return (
    <Fragment>
      <div>Practice</div>
      {photos?.map((photo: any) => (
        <li key={photo.id}>{photo.id}</li>
      ))}
    </Fragment>
  );
}
