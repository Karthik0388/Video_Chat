import React from "react";
import userAvatar from "../../resources/userAvatar.png";

const ActiveUsersListItems = props => {
  let { activeUser } = props;
  console.log(activeUser);
  const handleListItem = () => {};
  return (
    <section onClick={handleListItem} className="w-full hover:bg-slate-300 ">
      <article className=" w-4/5 mx-auto flex p-5 ">
        <div className="w-4/5 ">
          <img src={userAvatar} alt="avatar.png" className="w-20 h-16" />
        </div>
        <span className="w-full h-full flex py-4 items-center text-2xl text-white font-bold">
          {activeUser.username}
        </span>
      </article>
    </section>
  );
};

export default ActiveUsersListItems;
