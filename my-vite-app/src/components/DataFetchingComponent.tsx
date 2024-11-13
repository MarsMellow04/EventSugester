import React, { useEffect, useState } from 'react';

interface Tag {
    id: number;
    name: string;
  }

  const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<Tag[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/GetSystemTags')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
      {data.map(item => (
        <button key={item.id} className="default-button">
          <h2 className="text-gray-700 font-semibold text-m mb-2" >{item.name}</h2>
          {/* <p className="text-gray-700 text-base">{item.body}</p> */}
        </button>
      ))}
    </div>
  );
};
export default DataFetchingComponent;
