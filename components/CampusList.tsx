function CampusList({ campus, onSelect }) {
  return (
    <div style={{ maxHeight: "80vh" }} className="h-full overflow-auto">
      {[
        { title: "PUBLIC", desc: "" },
        {
          title: "KMITL",
          desc: "King Mongkut's Institute of Technology Ladkrabang",
        },
        {
          title: "KMUTT",
          desc: "King Mongkut's University of Technology Thonburi",
        },
      ].map((v) => {
        return (
          <div
            onClick={() => {
              onSelect(v.title);
            }}
            key={v.title}
            className="flex mb-4 pb-4 border-b border-gray-50"
          >
            {campus === v.title && (
              <i className="mr-4 mt-2 fas fa-check-circle text-mint-100"></i>
            )}
            <div className={campus === v.title ? "" : "ml-8"}>
              <h4 className="text-2xl">{v.title}</h4>
              <p className="text-xs">{v.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CampusList;
