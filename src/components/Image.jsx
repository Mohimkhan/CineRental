const Image = ({
  className,
  imgSrc,
  altText = "image",
  width = "",
  height = "",
}) => {
  return (
    <img
      className={className ? className : ""}
      src={imgSrc}
      alt={altText}
      width={width}
      height={height}
    />
  );
};

export default Image;
