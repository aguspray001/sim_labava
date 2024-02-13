<form className="mt-8 mb-2 w-full max-w-screen-lg">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Nama Peminjam
      </Typography>
      <Input
        size="lg"
        placeholder="Nama Peminjam"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        NIM
      </Typography>
      <Input
        size="lg"
        placeholder="NIM"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Program Studi
      </Typography>
      <Input
        size="lg"
        placeholder="Prodi"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Nomor Hp
      </Typography>
      <Input
        size="lg"
        placeholder="0812xxxxxx"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Tanggal Peminjaman
      </Typography>
      <DatePicker />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Organisasi / Jurusan
      </Typography>
      <Input
        size="lg"
        placeholder="Organisasi / Jurusan"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Dosen Pengampu
      </Typography>
      <Input
        size="lg"
        placeholder="Nama Dosen Pengampu"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Keperluan peminjaman
      </Typography>
      <Input
        size="lg"
        placeholder="Keperluan Peminjaman"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{ className: "before:content-none after:content-none" }}
      />
    </div>
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Tanggal Pengembalian
      </Typography>
      <DatePicker />
    </div>
    <div className="flex flex-col w-full">
      <Button className="my-1" color="indigo" size="lg">
        Submit
      </Button>
      <Link to={`/dashboard/peminjaman-alat/pdf`}>
        Generate PDF
      </Link>
    </div>
  </div>
</form>
