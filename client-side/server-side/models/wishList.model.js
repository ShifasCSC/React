import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{ 
               productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
               productName: { type: String },
               productPrice: { type: Number }
             }
            ]
  })
  export default mongoose.model.wish||mongoose.model('wish',wishlistSchema)
  