import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const Kategori = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [total, setTotal] = useState(null);
  const [category_number, setNumberCategory] = useState(null);

  const category = async (name, total, category_number) => {
    axios.defaults.baseURL = 'http://103.106.72.182:8101/api/v1/'
    const resp = await axios({
      url: "stuff/category", method: 'post', data: {
        name, total, category_number
      }
    })
    setToken(resp);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 justify-center items-center">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Penambahan Kategori Inventaris Lab AVA
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="ml-2 pl-3 flex flex-col mr-2 pr-3">
              <div className="flex flex-col w-full mb-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Kategori
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="add kategori"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Total
                </Typography>
                <Input
                  type="number"
                  size="lg"
                  onChange={(e) => setTotal(e.target.value)}
                  // placeholder="Prodi"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Nomor Kategori
                </Typography>
                <Input
                  type="number"
                  size="lg"
                  onChange={(e) => setNumberCategory(e.target.value)}
                  // placeholder="Organisasi / Jurusan"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
            </div>
          </form>
          <div>
            <div className="flex flex-col gap-6 col-span-2 items-center">
              <Button className="my-4" color="indigo" size="lg" onClick={() => category(name, total, category_number)}>
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Kategori