import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


export function SignUp() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone_number, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [nim, setNim] = useState(null);
  const [prodi, setProdi] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  const handleChange = event => {
    setSelectedRole(event.target.value);
  }

  const daftar = async () => {
    axios.defaults.baseURL = 'http://103.106.72.182:8101/api/v1/';
    try {
      const resp = await axios.post("user/register", {
        username,
        email,
        phone_number,
        password,
        role: selectedRole,
        status: 'active',
        nim,
        prodi
      });
      setToken(resp.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
  return (
    <div className="w-full mt-24">
      <div className="text-center">
        <Typography variant="h2" className="font-bold mb-4">Sign Up</Typography>
        {/* <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Sign in to your account</Typography> */}
      </div>
      <form className="mt-8 mb-4 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Full Name
          </Typography>
          <Input
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Email
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Nomor HP
          </Typography>
          <Input
            type="number"
            size="lg"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Password
          </Typography>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Role
          </Typography>
          <div className="relative">
            <select
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              value={selectedRole} onChange={handleChange}
            >
              <option value="1">Mahasiswa</option>
              <option value="2">Petugas Lab</option>
              <option value="3">Ketua Lab</option>
            </select>
            <label
              className="before:content[''] after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
            </label>
          </div>
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            NIM
          </Typography>
          <Input
            type="number"
            size="lg"
            onChange={(e) => setNim(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Program Studi
          </Typography>
          <Input
            size="lg"
            onChange={(e) => setProdi(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        {/* <Button className="mt-6" fullWidth onClick={() => daftar(username, email, phone_number, password, selected_role, nim, prodi)}> */}
        <Button className="mt-6" fullWidth onClick={daftar}>
          Sign Up
        </Button>
        <Typography variant="paragraph" className="mb-5 text-center text-blue-gray-500 font-medium mt-4">
          Already have account?
          <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign In</Link>
        </Typography>
      </form>

    </div>
  );

}
export default SignUp;
