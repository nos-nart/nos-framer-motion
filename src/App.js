function Button({ children }) {
  return (
    <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
      {children}
    </button>
  );
}

export function App() {
  return <div>Hello world! <Button>Hello world!</Button></div>;
}