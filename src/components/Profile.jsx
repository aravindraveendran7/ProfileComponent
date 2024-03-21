import React from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-green-400 h-52 w-96 mx-auto mt-10 border-solid border-2 border-sky-300 ">
        <div className="flex flex-col justify-center items-center pt-40 gap-2">
          <img
            src="./images/profilepic.jpeg"
            alt="profile photo"
            className="rounded-full h-24 w-24 justify-center items-center"
          />
          <div className="flex gap-2 items-center justify-center">
            <h3 className="font-bold">Aravind Raveendran</h3>
            <p className="text-gray-500">32</p>
          </div>
          <p className="text-gray-500">India</p>
          <hr className="border-t border-gray-300 w-full" />
        </div>

        <div className="flex justify-around">
          <div className="flex flex-col">
            <p className="font-bold">80k</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">803k</p>
            <p className="text-gray-500">Likes</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">1.4K</p>
            <p className="text-gray-500">Photos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
