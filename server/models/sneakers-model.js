import {Schema, model} from "mongoose";

const SneakersSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    sex: {
      type: String,
      required: true
    },
    fullname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sizes: {
        type: Array,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        required: true,
    },
})

export default model('sneakers', SneakersSchema);