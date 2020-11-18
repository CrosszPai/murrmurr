function NotificationCard() {
  return (
    <div className="rounded-2xl p-4 w-full text-white bg-gray-80 my-2 flex">
      <div
        style={{ height: "fit-content" }}
        className="rounded-full border border-white mr-4"
      >
        <i aria-hidden className="p-4 fa fa-user-graduate"></i>
      </div>
      <div className="text-gray-10">
        <h6 className="font-medium mb-2">Header</h6>
        <p className="text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          facilisi quam sed lacus sed iaculis posuere
        </p>
        <p className="text-xs">3 mins ago</p>
      </div>
    </div>
  );
}

export default NotificationCard;
