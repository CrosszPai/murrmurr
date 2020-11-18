function PostDetial() {
  return (
    <div className="text-gray-10 h-full pb-24 flex flex-col">
      <div className="flex mb-2">
        <i
          aria-hidden
          className="rounded-full border border-white fas fa-user p-3 mr-2"
          style={{ height: "fit-content" }}
        ></i>
        <div>
          <h4 className="text-base">Zoey Michacles</h4>
          <p className="text-xs text-gray-50">1 hr ago</p>
        </div>
      </div>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
        vulputate morbi in nisl. Tortor porttitor ultricies ornare pellentesque.
      </p>
      <div
        style={{ maxHeight: "60vh" }}
        className="pl-6 border-l border-white flex-auto overflow-auto"
      >
        {Array(10)
          .fill(0)
          .map((v, i) => (
            <div className="my-2" key={i}>
              <div className="flex mb-2">
                <i
                  aria-hidden
                  className="rounded-full border border-white fas fa-user p-3 mr-2"
                  style={{ height: "fit-content" }}
                ></i>
                <div>
                  <h4 className="text-base">Zoey Michacles</h4>
                  <p className="text-xs text-gray-50">1 hr ago</p>
                </div>
              </div>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                vulputate morbi in nisl. Tortor porttitor ultricies ornare
                pellentesque.
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default PostDetial;
