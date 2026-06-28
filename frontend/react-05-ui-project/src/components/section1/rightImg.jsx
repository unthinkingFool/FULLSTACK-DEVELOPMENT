function Rightimg(props) {
  return (
    <div className="relative h-full w-70 overflow-hidden rounded-3xl">

      {/* Image */}
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold">
          {props.id+1}
        </h2>

        <div className="flex flex-col gap-4 text-gray-200">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat quod et totam nemo architecto debitis!
          </p>

          <button className="self-start bg-gray-600/80 backdrop-blur-sm text-white font-medium px-8 py-3 rounded-full">
            {props.tag}
          </button>
        </div>
      </div>

    </div>
  );
}

export default Rightimg;