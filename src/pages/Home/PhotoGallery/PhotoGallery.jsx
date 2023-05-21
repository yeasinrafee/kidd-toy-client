import Gallery from "react-photo-gallery";
const PhotoGallery = () => {
  const photos = [
    {
      src: "./images/gallery/gallery5.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery6.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery7.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery8.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery9.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery10.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery11.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery12.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery13.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery14.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery15.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery16.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "./images/gallery/gallery17.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./images/gallery/gallery18.jpg",
      width: 1,
      height: 1,
    },
  ];
  return (
    <div className="bg-violet-50 py-5">
      <div className="text-violet-500 text-4xl text-center font-bold mt-40 mb-12">
        Here is Our Beautiful Collection
      </div>
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
