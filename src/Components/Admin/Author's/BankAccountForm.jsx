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

  // Handle form submission to add new account details
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Assuming there's a backend API for handling POST request
      const response = await fetch('http://localhost/mailapp/bank_accounts.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accountDetails),
      });

      const result = await response.json();
      if (response.ok) {
        // Reset form after successful submission
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
    <section>
      <div className="flex flex-col items-center py-4 text-black">
        {/* Form for entering bank account details */}
        <div className="w-full max-w-md bg-gray-100 p-6 border border-gray-300">
          <h2 className="text-center text-xl font-bold mb-4">Add Bank Account Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="accountName">Account Name</label>
              <input
                type="text"
                id="accountName"
                value={accountDetails.accountName}
                onChange={(e) => setAccountDetails({ ...accountDetails, accountName: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                value={accountDetails.accountNumber}
                onChange={(e) => setAccountDetails({ ...accountDetails, accountNumber: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                value={accountDetails.branch}
                onChange={(e) => setAccountDetails({ ...accountDetails, branch: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="ifscCode">IFSC Code</label>
              <input
                type="text"
                id="ifscCode"
                value={accountDetails.ifscCode}
                onChange={(e) => setAccountDetails({ ...accountDetails, ifscCode: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="micr">MICR</label>
              <input
                type="text"
                id="micr"
                value={accountDetails.micr}
                onChange={(e) => setAccountDetails({ ...accountDetails, micr: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Account'}
            </button>
          </form>
        </div>

        {/* Error handling */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default BankAccountForm;
