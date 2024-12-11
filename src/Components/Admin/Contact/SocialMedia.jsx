import React, { useState, useEffect } from "react";

const SocialMedia = () => {
  const [platform, setPlatform] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/mailapp/social.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        platform: platform,
        link_url: linkUrl,
      }),
    });
    const result = await response.text();
    alert(result);
    fetchLinks();
  };

  const fetchLinks = async () => {
    const response = await fetch("http://localhost/mailapp/social.php");
    const result = await response.json();
    setLinks(result);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mt-1 block w-full p-2 border rounded text-black"
            required
          >
            <option value="">Select Platform</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Link URL</label>
          <input
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="mt-1 block w-full p-2 border rounded text-black"
            placeholder="Enter the social media link"
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

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Social Media Links</h2>
        <div className="flex justify-center items-center gap-10 mt-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
