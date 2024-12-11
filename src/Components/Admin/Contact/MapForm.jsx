import React, { useState, useEffect } from "react";

const MapForm = () => {
  const [iframeUrl, setIframeUrl] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/mailapp/map_url.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        iframe_url: iframeUrl,
      }),
    });
    const result = await response.text();
    alert(result);
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost/mailapp/map_url.php");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Iframe URL</label>
          <input
            type="text"
            value={iframeUrl}
            onChange={(e) => setIframeUrl(e.target.value)}
            className="mt-1 block w-full p-2 border rounded text-black"
            placeholder="Enter Iframe URL"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {data && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Latest Data</h2>
          <div className="mt-4">
            <iframe
              src={data.iframe_url}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-lg w-full h-96"
            />
            <p className="mt-2">{data.description}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default MapForm;
