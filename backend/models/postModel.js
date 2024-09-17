import mongoose, { Mongoose } from "mongoose";

const postSchema = mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  text: {
    type: String,
    maxLength: 500,
  },
  img: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  replies: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
      },
      text: {
        type: String,
        maxLength: 500,
      },
      userProfilePic: {
        type: String,
      },
      username: {
        type: String,
      }
    },
  ],
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;