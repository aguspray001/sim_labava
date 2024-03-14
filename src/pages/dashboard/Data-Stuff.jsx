import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const FetchDataStuff = () => {
    const [stuffData, setStuffData] = useState({ data: { rows: [] } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://103.106.72.182:8101/api/v1/stuff?currentPage=1&limit=5');
                setStuffData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        Daftar Inventaris Alat Lab AVA
                    </Typography>
                    <div>
                        <Link to="/dashboard/tambahInventaris">
                            <Button color="indigo" size="lg">
                                Tambah Inventaris
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardBody className="overflow-y-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Nama Alat</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Tanggal Pembelian</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Pemilik</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Kondisi</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Status</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Total</th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">No. Inventaris</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stuffData.data && stuffData.data.rows.map((stuff, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                    <td className="px-4 py-2">{stuff.name}</td>
                                    <td className="px-4 py-2">{new Date(stuff.buy_date).toLocaleDateString()}</td>
                                    <td className="px-4 py-2">{stuff.owner_id}</td>
                                    <td className="px-4 py-2">{stuff.current_condition}</td>
                                    <td className="px-4 py-2">{stuff.status}</td>
                                    <td className="px-4 py-2">{stuff.category ? stuff.category.total : ""}</td>
                                    <td className="px-4 py-2">{stuff.inventaris_code}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default FetchDataStuff;
