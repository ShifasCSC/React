import { Router } from "express"
import * as rh from "./requestHandle.js"
import Auth from "./middleware/Auth.js"

const router=Router()
router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.signIn)
router.route("/mail").post(rh.mail)



//profile
router.route("/disp").get(Auth,rh.dispUser)
router.route("/delete").delete(rh.deleteUser)
router.route("/edituser").put(rh.editUser)
//adress
router.route("/addaddr").post(Auth,rh.addAddress)
router.route("/dispaddr").get(Auth,rh.displayAddress)
router.route("/uptaddr").put(Auth,rh.updateAddress)
router.route("/deladdr").delete(Auth,rh.deleteAddress)


// company
router.route('/editcompany').post(Auth,rh.editComapany)
router.route('/getcompany').get(Auth,rh.getCompany)

// category
router.route('/category').post(rh.category)
router.route('/getcategory').get(rh.getCategory)

// product
router.route('/delproduct/:_id').delete(rh.delProduct)
router.route('/editproduct/:_id').put(rh.editProduct)
router.route('/disproduct/:_id').get(rh.disProduct)
router.route('/addproduct').post(rh.addProduct)
router.route('/getproducts').get(rh.getProducts)
router.route('/getcatproducts/:category').get(rh.getCatProducts)

//whish list
router.route('/addwish/:id').post(Auth,rh.addWish)
router.route('/getwish').get(Auth,rh.getWish)
router.route('/remwish/:id').delete(Auth,rh.remWish)
router.route('/check/:id').get(Auth,rh.checkWish);  // Check if product is in wishlist

//cart
router.route("/addtocart").post(Auth,rh.addToCart);
router.route("/getcart").get(Auth,rh.getCart); 

export default router;