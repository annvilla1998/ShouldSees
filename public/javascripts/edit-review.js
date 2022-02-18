window.addEventListener("DOMContentLoaded", (event) => {
    console.log("hello");
  });
const editReviewButton = document.querySelectorAll('.edit-post-button')
   

for(let i = 0; i < editReviewButton.length; i++){
    let button = editReviewButton[i];
    
    button.addEventListener('click', async(e) => {
        e.preventDefault()
        
        const ratingEditForm = document.querySelectorAll('#rating')
        const oldRating = ratingEditForm[0].value
        const reviewEditForm = document.querySelectorAll('#review')
        const oldReview = reviewEditForm[0].value
        
        const reviewId = e.target.id
            
        const res = await fetch(`/shows/review/${reviewId}/edit`, {
            method: 'PUT',
        })
    
            
        const data = await res.json()
        console.log(data)
    
        if (data.message === "Success") {
            return data
        } 
        })
    }
