function CampusList() {
  return (
    <div style={{ maxHeight: "80vh" }} className="h-full overflow-auto">
      {Array(20)
        .fill(0)
        .map((v, i) => {
          return (
            <div className="flex mb-4 pb-4 border-b border-gray-50">
              <i className="mr-4 mt-2 fas fa-check-circle text-mint-100"></i>
              <div>
                <h4 className="text-2xl">LOREM</h4>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CampusList;
