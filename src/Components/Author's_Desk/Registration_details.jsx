import React, { useEffect, useState } from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Registration_details = (props) => {
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch account data from the PHP backend
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch('http://localhost/mailapp/bank_accounts.php');
        if (!response.ok) throw new Error('Failed to fetch account data');
        const data = await response.json();
        setAccount(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountDetails();
  }, []);

  if (isLoading) return <p>Loading account details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <AboutHeader title={"REGISTRATION DETAILS"} theme1={props.color1} theme2={props.color2}/>
      <section>
        <div className="flex flex-col items-center p-8 bg-[#0B0A2A]">

          <div className=" w-80 md:w-96 border border-[#C8F51E]">
            <div className="bg-[#0B0A2A] text-white  border-b border-[#C8F51E]">
              <p className='p-4'>Registration fee will be made only after the acceptance of your article.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white border-b border-[#C8F51E]">
              <p className='p-4'>Payment can be made through Online Transfer (NEFT / IMPS) or Cash Deposit.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white  border-b border-[#C8F51E]">
              <p className='p-4'> After making payment, kindly send us the proof of the payment (Screenshot / Reference Number / Transaction ID or Counter Slip) along with your Paper ID & necessary details.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white border-b border-[#C8F51E]">
              <p className='p-4 m-0'>
                It is mandatory for at least one author of each accepted paper to register and attend the conference to present the paper.
              </p>
            </div>
            <div className="bg-[#0B0A2A] text-white">
              <p className='p-4'>All the abstracts of the selected papers will be published in the conference proceedings with ISBN.</p>
            </div>
          </div>

          <button className="mt-8 bg-[#FFA500] text-white font-bold py-2 px-6 rounded">
            Bank Details
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        <div className="w-full max-w-5xl bg-white border border-gray-300 shadow-md">
          {account ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border-b border-gray-300">Field</th>
                  <th className="px-4 py-2 border-b border-gray-300">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 font-bold">Account Name</td>
                  <td className="px-4 py-2 border-b border-gray-300">{account.accountName}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 font-bold">Account Number</td>
                  <td className="px-4 py-2 border-b border-gray-300">{account.accountNumber}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 font-bold">Branch</td>
                  <td className="px-4 py-2 border-b border-gray-300">{account.branch}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 font-bold">IFSC Code</td>
                  <td className="px-4 py-2 border-b border-gray-300">{account.ifscCode}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold">MICR</td>
                  <td className="px-4 py-2">{account.micr}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="text-center p-4">No account details found</p>
          )}
        </div>
      </section>
      <AboutLocation />
      <AboutFooter theme1={props.color1} theme2={props.color2} />

    </div>
  )
}

export default Registration_details
