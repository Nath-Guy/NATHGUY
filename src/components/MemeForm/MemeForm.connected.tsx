import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/current";
import type { AppDispatch, RootState } from "../../store/store";
import UnconnectedMemeForm from "./MemeForm";

const MemeForm = (props: any) => {
  const dispatch: AppDispatch = useDispatch();
  const meme = useSelector((s: RootState) => {
    return s.current.meme;
  });

  const images = useSelector((s: RootState) => {
    return s.ressources.images;
  });

  return (
    <UnconnectedMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(m) => {
        dispatch(update(m));
      }}
    />
  );
};

export default MemeForm;
