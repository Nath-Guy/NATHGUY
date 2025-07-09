import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "../components/MemeSVGViewer/MemeSVGViewer.connected";
import { update } from "../store/current";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";

function Editor() {
  const params = useParams();
  const dispatch = useDispatch();
  const meme = useSelector((s: RootState) => s.ressources.memes);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (undefined !== params.id) {
        const foundMeme = meme.find((m) => m.id === Number(params.id));
        if (foundMeme) {
          dispatch(update(foundMeme));
        } else {
            navigate("/");
        }
      } else {
        dispatch(update(emptyMeme));
      }
    };
  }, [params, navigate, dispatch, meme]);
  return (
    <div>
      <MemeSVGViewer />
      <MemeForm />
    </div>
  );
}

export default Editor;
