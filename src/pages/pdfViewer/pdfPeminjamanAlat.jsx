import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'
import { Document, PDFViewer, Page } from '@react-pdf/renderer'
import React from 'react'

const PdfPeminjamanAlat = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
    <PDFViewer>
    <Document>
        <Page>
            <Table
                data={[
                    {firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000"}
                ]}
            >
                <TableHeader textAlign={"center"}>
                    <TableCell weighting={0.3}>
                        First Name
                    </TableCell>
                    <TableCell weighting={0.3}>
                        Last Name
                    </TableCell>
                    <TableCell>
                        DOB
                    </TableCell>
                    <TableCell>
                        Country
                    </TableCell>
                    <TableCell>
                        Phone Number
                    </TableCell>
                </TableHeader>
                <TableBody>
                    <DataTableCell weighting={0.3} getContent={(r) => r.firstName}/>
                    <DataTableCell weighting={0.3} getContent={(r) => r.lastName}/>
                    <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                    <DataTableCell getContent={(r) => r.country}/>
                    <DataTableCell getContent={(r) => r.phoneNumber}/>
                </TableBody>
            </Table>
        </Page>
    </Document>
</PDFViewer>
    </div>
  )
}

export default PdfPeminjamanAlat