import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answerIndex: { type: Number, required: true }
});

export default mongoose.model("Question", questionSchema);
