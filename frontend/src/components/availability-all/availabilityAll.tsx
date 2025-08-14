function AvailabilityAllComponent() {
  const availability = [
    {
      date: "15 de Julho, 2024",
      start_time: "10:00",
      end_time: "11:00",
      status: "Free",
    },
  ];

  return (
    <div>
      <section>
        <p>Date</p>
        <p>Time</p>
        <p>Status</p>
        <p>Actions</p>
      </section>
      <section>
        {availability.map((currentAvailability) => (
          <div>
            <p>{currentAvailability.date}</p>
            <p>
              {currentAvailability.start_time} - {currentAvailability.end_time}
            </p>
            <p>{currentAvailability.status}</p>
            <div>
              <button>Edit</button>
              <p>|</p>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AvailabilityAllComponent;
