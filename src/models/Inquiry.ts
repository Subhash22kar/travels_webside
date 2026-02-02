import mongoose, { Schema, Document } from "mongoose";

export interface IInquiry extends Document {
    name: string;
    phone: string;
    destination: string;
    budget: string;
    message: string;
    createdAt: Date;
}

const InquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        destination: { type: String, required: true },
        budget: { type: String, required: false },
        message: { type: String, required: false },
    },
    { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
