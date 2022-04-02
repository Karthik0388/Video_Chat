import { setLocalStream } from "../../Redux/Actions/callActions";
import store from "./../../Redux/Store/store";

const defaultConstrains = {
  video: true,
  audio: true,
};

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstrains)
    .then(stream => {
      store.dispatch(setLocalStream(stream));
    })
    .catch(err => {
      console.log("error occured when trying to access local stream");
      console.log(err);
    });
};
