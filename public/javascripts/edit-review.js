window.addEventListener("DOMContentLoaded", (event) => {
    console.log("hello");
  });
const form = document.querySelector('.edit-review')
   

// for(let i = 0; i < form.length; i++){
//     let reviewForm = form[i];
    
    form.addEventListener('submit', async(e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const rating = formData.get("rating");
        const ratingBody = { rating }
        const review = formData.get("review")
        const reviewBody = { review }
        const reviewId = e.target.id
        try {
            const res = await fetch("`/shows/review/${reviewId}/edit`", {
                method: "POST",
                body: JSON.stringify(reviewBody, ratingBody),
                headers: {
                  "Content-Type": "application/json",
                },
            })
            if (!res.ok) {
                throw res;
            }
            form.reset();
            let newRating = document.querySelector(`#rating-${reviewId}`)
            let newReview = document.querySelector(`#content-${reviewId}`)
            oldRating = newRating.value;
            oldReview = newReview.value;
        }catch(e){

        }
    })
// }



        // const ratingEditForm = document.querySelectorAll('#rating')
        // let oldRating = ratingEditForm[0].value
        // const reviewEditForm = document.querySelectorAll('#review')
        // let oldReview = reviewEditForm[0].value
        
        // const reviewId = e.target.id
            
        // const res = await fetch(`/shows/review/${reviewId}/edit`, {
        //     method: 'PUT'
        // })
        // const res = await fetch(`/shows/review/${reviewId}/edit`, {
        //     method: 'POST'
        // })
            
        // const data = await res.json()
        // console.log(data)
    
        // if (data.message === "Success") {
        //     let newRating = document.querySelector(`#rating-${reviewId}`)
        //     let newReview = document.querySelector(`#content-${reviewId}`)
        //     oldRating = newRating.value;
        //     oldReview = newReview.value;
        // } 
        // }
