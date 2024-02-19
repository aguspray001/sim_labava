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

export const AddRoom = () => {
  const [token, setToken] = useState(null);
  const [room, setRoom] = useState(null);
  const [number_room, setNumberRoom] = useState(null);

  const RoomAdd = async (room, number_room) => {
    axios.defaults.baseURL = 'http://103.106.72.182:8101/api/v1/'
    const resp = await axios({
      url: "", method: 'post', data: {
        room, number_room
      }
    })
    setToken(resp);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 justify-center items-center">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Penambahan Ruangan di Lab AVA
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="ml-2 pl-3 flex flex-col mr-2 pr-3">
              <div className="flex flex-col w-full mb-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Ruangan
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setRoom(e.target.value)}
                  placeholder="Nama Peminjam"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Nomor Ruangan
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setNumberRoom(e.target.value)}
                  placeholder="Organisasi / Jurusan"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
            </div>
          </form>
          <div>
            <div className="flex flex-col gap-6 col-span-2 items-center">
              <Button className="my-4" color="indigo" size="lg" onClick={() => RoomAdd(room, number_room)}>
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddRoom