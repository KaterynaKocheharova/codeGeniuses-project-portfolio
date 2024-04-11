import { getReviews } from "./API";

  async function onCreateReview() {
    const reviews = await getReviews();
    console.log(reviews)
    // const markup = userTemplate(newUser);
    // refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  }
  

  onCreateReview()
  // ============================================================
  
//   function userTemplate({ id, name, img, email, phone }) {
//     return `<li class="card user-item" data-id="${id}">
//     <img
//       src="https://source.unsplash.com/720x1280/?random=${id}&girl,portret,celebrity"
//       alt="#"
//       class="user-avatar"
//     />
//     <h3 class="user-title">${name}</h3>
//     <p>Phone: ${email}</p>
//     <p>Email: ${phone}</p>
//     <button class="btn button">DELETE</button>
//   </li>`;
//   }
  
//   function usersTemplate(arr) {
//     return arr.map(userTemplate).join('\n\n\n\n');
//   }
  