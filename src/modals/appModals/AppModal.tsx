import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/post";
import { IUser } from "../../interfaces/user";
import useModal from "../hook";
import { IAppModal } from "../interfaces";

function AppModal({ users }: IAppModal) {
  const { isOpen, open, close, RenderedModal } = useModal();

  const [posts, setPosts] = useState<IPost>();

  useEffect(() => {
    // get data from api call if modal open
    if (isOpen) {
      setPosts({
        id: 1,
        comment: "haha",
      });
    }
  }, [isOpen]);

  return (
    <div>
      <p>AppModal</p>
      <div>
        <button onClick={open}>Open</button>
      </div>
      <RenderedModal>
        <div>I am app modal body!</div>
        <ul>
          {users.map((user: IUser) => (
            <li key={user.age}>{user.name}</li>
          ))}
        </ul>
        <p>{posts?.comment}</p>
        <button onClick={close}>Close</button>
      </RenderedModal>
    </div>
  );
}

export default AppModal;
