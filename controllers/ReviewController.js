import Review from '../models/Review.js';
import ReviewService from '../service/ReviewService.js';

class ReviewController {
    async create(req,res){
        try {
            const review = await ReviewService.createReview(req.body)
            res.status(200).json(review)
        } catch (error) {
            res.status(500).json(error)
        }
    
    }

    async getAll(req, res){
        try {
            const reviews = await ReviewService.getAllReviews();
            return res.json(reviews)
        } catch (error) {
            res.status(500).josn(error)
        }
    }

    async getById(req, res){

        try {
            
            const review = await ReviewService.getOne(req.params.id);
            return res.json(review)
        } catch (error) {
            res.status(500).josn(error.message)
        }
    }

    async update(req, res){

        try {
            const updatedReview = await ReviewService.updateReview(req.body)
            return res.json(updatedReview)
        } catch (error) {
            res.status(500).josn(error.message)
        }
    }

    async delete(req,res){

        try {
            
            const delReview = await ReviewService.deleteReview(req.params.id);
            res.json(delReview)

        } catch (error) {
            
        }
    }



}


export default new ReviewController;