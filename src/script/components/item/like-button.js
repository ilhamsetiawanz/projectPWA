const createLikeButtonTemplate = () => `
    <button aria-label="like this Restaurant" id="likeButton" class="like">
        <span class="material-symbols-outlined">
        add
        </span> Add Favorite
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this Restaurant" id="likeButton" class="like">
        <span class="material-symbols-outlined">
        remove
        </span> Remove Favorite
    </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};