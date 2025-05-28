import ReviewCard from '../components/ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'This platform has transformed how we do business. The analytics tools alone are worth the price!',
      date: 'March 15, 2023',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      name: 'Michael Chen',
      rating: 4,
      comment: 'Excellent customer support and reliable service. We\'ve been using it for 2 years with no major issues.',
      date: 'February 2, 2023',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'The user interface is so intuitive that we barely needed any training. Highly recommended!',
      date: 'January 28, 2023',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'David Wilson',
      rating: 5,
      comment: 'We evaluated several competitors but found this to be the most comprehensive solution for our needs.',
      date: 'December 10, 2022',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Lisa Thompson',
      rating: 4,
      comment: 'Great value for money. The regular updates with new features keep getting better.',
      date: 'November 5, 2022',
      avatar: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    {
      name: 'James Park',
      rating: 5,
      comment: 'Implementation was smooth and the integration with our existing systems worked perfectly.',
      date: 'October 18, 2022',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our customers have to say about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Submit Your Review</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="review-name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="review-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="review-email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="review-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-gray-400 hover:text-yellow-400 focus:outline-none"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="review-comment" className="block text-gray-700 mb-2">Your Review</label>
              <textarea
                id="review-comment"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;