import DarkMode from "@/components/DarkMode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({country:"India"});
  const [address, setAddress] = useState({ currentAddress: true });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, employeeAddress: address };
    
    console.log(address);
    console.log(updatedFormData);
    try {
      const res = await fetch("http://localhost:8080/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();
      console.log(data);

      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="fixed top-4 right-4  px-4 py-2 border border-gray-300 rounded">
        <DarkMode />
      </div>
      <h1 className="text-3xl text-center font-semibold my-4">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-base text-gray-700 "
      >
        <input
          type="text"
          placeholder="name"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
          id="localAddress"
          onChange={(e) => {
            setAddress({ ...address, [e.target.id]: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          className="border p-3 rounded-lg"
          id="birthDay"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          className="border p-3 rounded-lg"
          id="city"
          onChange={(e) => {
            setAddress({ ...address, [e.target.id]: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="State"
          className="border p-3 rounded-lg"
          id="state"
          onChange={(e) => {
            setAddress({ ...address, [e.target.id]: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Pincode"
          className="border p-3 rounded-lg"
          id="pinCode"
          onChange={(e) => {
            setAddress({ ...address, [e.target.id]: e.target.value });
          }}
        />
        <select
          className="text-base text-gray-700  border p-3 rounded-lg"
          id="country"
          onChange={handleChange}
        >
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
        </select>

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
