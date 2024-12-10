import React, { useState } from 'react';

const BankAccountForm = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountName: '',
    accountNumber: '',
    branch: '',
    ifscCode: '',
    micr: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost/mailapp/bank_accounts.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accountDetails),
      });

      const result = await response.json();
      if (response.ok) {
        setAccountDetails({ accountName: '', accountNumber: '', branch: '', ifscCode: '', micr: '' });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-10 mt-10">Add Bank Account</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#0B0A2A] p-6 rounded-lg text-white w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="accountName" className="block mb-1">Account Name</label>
          <input
            type="text"
            id="accountName"
            value={accountDetails.accountName}
            onChange={(e) => setAccountDetails({ ...accountDetails, accountName: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block mb-1">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountDetails.accountNumber}
            onChange={(e) => setAccountDetails({ ...accountDetails, accountNumber: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="branch" className="block mb-1">Branch</label>
          <input
            type="text"
            id="branch"
            value={accountDetails.branch}
            onChange={(e) => setAccountDetails({ ...accountDetails, branch: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ifscCode" className="block mb-1">IFSC Code</label>
          <input
            type="text"
            id="ifscCode"
            value={accountDetails.ifscCode}
            onChange={(e) => setAccountDetails({ ...accountDetails, ifscCode: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="micr" className="block mb-1">MICR</label>
          <input
            type="text"
            id="micr"
            value={accountDetails.micr}
            onChange={(e) => setAccountDetails({ ...accountDetails, micr: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Account'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default BankAccountForm;
