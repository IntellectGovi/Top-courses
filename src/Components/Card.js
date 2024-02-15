import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  const isLiked = likedCourses.some((id) => id === course.id);

  function clickHandler() {
    if (isLiked) {
      setlikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Liked Removed");
    } else {
      setlikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img
          src={course.image.url}
          className="w-full min-h-[168px] object-cover"
        />
        <div className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center absolute right-2 -bottom-3 shadow-xl">
          <button onClick={clickHandler}>
            {
              isLiked ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
            } 
          </button>
        </div>
      </div>

      <div className="p-4 text-white">
        <p className="font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-base mt-2">
        {
          course.description.length > 100 ? (course.description.substr(0,100)) + "...": (course.description)
        }
        </p>
      </div>
    </div>
  );
};

export default Card;