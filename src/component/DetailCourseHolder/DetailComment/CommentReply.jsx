import React, { useEffect, useState } from "react";
import http from "../../../core/Servises/interceptor";
import { useParams } from "react-router-dom";
import AddCommentReply from "./AddCommentReply";

const CommentReply = ({commentId}) => {
  const { id } = useParams();
  const [ReplyList, setReplyList] = useState(null);

  const getCourseReply = async () => {
    const res = await http.get(
      `/Course/GetCourseReplyCommnets/${id}/${commentId}`
    );
    setReplyList(res);
  };

  useEffect(() => {
    getCourseReply();
  }, []);

  return (
    <div>
      {ReplyList?.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
          </div>
        );
      })}
      <AddCommentReply commentId={commentId} />
    </div>
  );
};

export default CommentReply;
