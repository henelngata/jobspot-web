export default function Jobs() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Job Openings</h2>
      <div className="grid gap-4">
        {["Software Engineer", "Product Manager", "UX Designer"].map(
          (job, index) => (
            <div key={index} className="p-4 border rounded-md">
              <h3 className="font-semibold">{job}</h3>
              <p className="text-sm text-gray-600">Location: Remote</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Apply Now
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
