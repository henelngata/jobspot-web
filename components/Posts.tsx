export default function Posts() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Latest Posts</h2>
      <div className="grid gap-4">
        {[
          "The Future of AI",
          "Sustainable Energy Solutions",
          "Remote Work Trends",
        ].map((post, index) => (
          <div key={index} className="p-4 border rounded-md">
            <h3 className="font-semibold">{post}</h3>
            <p className="text-sm text-gray-600">
              Posted on {new Date().toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
