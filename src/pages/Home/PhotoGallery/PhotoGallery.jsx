import Gallery from "react-photo-gallery";
const PhotoGallery = () => {
  const photos = [
    {
      src: "./images/gallery/gallery5.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery6.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery7.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery8.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery9.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery10.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery11.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery12.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery13.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery14.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery15.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery16.webp",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery17.webp",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery18.webp",
      width: 1,
      height: 1,
    },
  ];
  return (
    <div className="w-11/12 md:w-full mx-auto" data-aos="zoom-in-up">
      <div className="text-violet-500 text-3xl text-center font-bold mt-16 md:mt-36 mb-16 rounded-md">
        <h2 className="uppercase">Here is Our Beautiful Collection</h2>
      </div>
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
