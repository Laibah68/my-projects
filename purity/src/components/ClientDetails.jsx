export default function ClientDetails({ client }) {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-2">Client Info</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Assigned User:</strong> {client.assigned}</p>
    </div>
  );
}
