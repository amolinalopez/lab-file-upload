const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    content: {
      type: String,
    //   trim: true,
      required: [true, "Content is required."],
    //   unique: true,
    },
    creatorId: {
        type : Schema.Types.ObjectId, ref: 'User' 
    },
    picPath: {
      type: String,
    //   type: Image,
    },
    picName: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("post", postSchema);
