const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {title && <h2 className="text-[2rem] font-bold text-4xl">{title}</h2>}
      {text && <p className="body-2 mt-4">{text}</p>}
    </div>
  );
};

export default Heading;