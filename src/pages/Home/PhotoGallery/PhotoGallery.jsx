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
    <div className="bg-violet-50 py-5" data-aos="zoom-in-up">
      <div className="text-violet-500 text-4xl text-center font-bold mt-40 mb-12">
        Here is Our Beautiful Collection
      </div>
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
