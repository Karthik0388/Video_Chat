import React, { useEffect } from "react";
import { MdVideoCameraFront } from "react-icons/md";
import ActiveUsersList from "../ActiveUsers/ActiveUsersList";
import * as webRTCHandler from "../../utils/webRTC/webRTCHandler";

const Dashboard = () => {
  useEffect(() => {
    webRTCHandler.getLocalStream();
  }, []);
  return (
    <section className="w-full h-full">
      <article className="w-full  h-screen flex mx-auto">
        <div className="basis-4/5 flex flex-col justify-center bg-blue-400">
          <div className="basis-4/5">content</div>
          <div className="basis-1/5 bg-slate-600">rooms</div>
        </div>
        <div className="basis-1/5 flex flex-col justify-center bg-slate-600">
          <div className="basis-4/5 ">
            <ActiveUsersList />
          </div>
          <div className="basis-1/5 flex justify-center items-center">
            <MdVideoCameraFront className="h-24 w-32 " />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
