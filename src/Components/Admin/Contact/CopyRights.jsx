import React, { useState, useEffect } from "react";

const CopyRights = () => {
  const [footerContent, setFooterContent] = useState("");

  const fetchFooter = async () => {
    const response = await fetch("http://localhost/mailapp/CopyRights.php");
    const result = await response.text();
    setFooterContent(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/mailapp/CopyRights.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        content: footerContent,
      }),
    });
    const result = await response.text();
    alert(result);
    fetchFooter();
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">CopyRights Content</label>
          <textarea

            onChange={(e) => setFooterContent(e.target.value)}
            className="mt-1 block w-full  border rounded text-black"
            rows="2"
            placeholder="Enter CopyRights content"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update CopyRights
        </button>
      </form>

      <div className="mt-8 bg-footer-bg p-2 text-footer-text text-center">
        <p className="text-[#C8F51E]">{footerContent}</p>
      </div>
    </div>
  );
};

export default CopyRights;
