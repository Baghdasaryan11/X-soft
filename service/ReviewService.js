import Review from "../models/Review.js";

class ReviewService {
  async createReview(review) {
    const createdReview = await Review.create({ review });

    return createdReview;
  }

  async getAllReviews() {
    const review = await Review.find();
    return review;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is required");
    }
    const review = await Review.findById(id);
    return review;
  }

  async updateReview(review) {
    if (!review._id) {
      throw new Error("id is empty ");
    }
    const updatedReview = await Review.findByIdAndUpdate(
        review._id,
        review,
      { new: true }
    );
    return updatedReview;
  }

  async deleteReview(id) {
    if (!id) {
      throw new Error("id is empty");
    }
    const delReview = await Review.findByIdAndDelete(id);

    return delReview;
  }
}


export default new ReviewService();