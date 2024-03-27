import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import zepplin from "../assets/Zepplin.png"
import figma from "../assets/Figma.png"
import meta from "../assets/Meta.png"
import angular from "../assets/Angular.png"
import vue from "../assets/Vue.png"

const columns = [
    { id: 'source', label: 'Source', minWidth: 170 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
        customFormat: (value) => {
            if (value === 'Active') {
              return {
                content: <span style={{ color: '#20C997', backgroundColor: "#DCFFF5", padding: "2px 10px 2px 10px", borderRadius: "100px", fontWeight: "600", fontSize: "12px", fontFamily: "Inter"}}>{value}</span>,
              };
            }
            if (value === 'Pending') {
                return {
                  content: <span style={{ color: '#FD7E14', backgroundColor: "#FFEAD8", padding: "2px 10px 2px 10px", borderRadius: "100px", fontWeight: "600", fontSize: "12px", fontFamily: "Inter"}}>{value}</span>,
                };
            }
            if (value === 'Cancelled') {
                return {
                  content: <span style={{ color: '#5F6980', backgroundColor: "#F2F4F7", padding: "2px 10px 2px 10px", borderRadius: "100px", fontWeight: "600", fontSize: "12px", fontFamily: "Inter"}}>{value}</span>,
                };
            }
             else {
              return {
                content: value,
              };
            }
          }
    },
    {
        id: 'userid',
        label: 'User ID',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'joined',
        label: 'Joined',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'group',
        label: 'Group',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    }
];

function createData(source, amount, status, userid, joined, group) {
    return { source, amount, status, userid, joined, group };
}

const cellData = (image, data) => {
    return <span style={{display: "flex", alignItems: "center", fontWeight: "600", color: "#282828", fontFamily: "Inter"}}><img src={image}/>{data}</span>
}

const rows = [
    createData(cellData(zepplin, "Zepplin"), 686.00, "Active", 114423, "October", "Design"),
    createData(cellData(figma, "Figma"), 864.00, "Pending", 76223, "June", "Finance"),
    createData(cellData(meta, "Meta"), 176, "Cancelled", 89453, "March", "Coding"),
    createData(cellData(angular, "Angular"), 49.00, "Active", 11467, "Februay", "Marketing"),
    createData(cellData(vue, "Vue"), 999.00, "Active", 67385, "October", "Finance"),
    createData(cellData(meta, "Meta"), 176, "Cancelled", 89453, "March", "Coding"),
    createData(cellData(figma, "Figma"), 864.00, "Pending", 76223, "June", "Finance"),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: "#F9FAFB", color: "#5F6980", fontSize: "14px" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} style={column.customFormat ? column.customFormat(value).style : {color: "#5F6980"}}>
                                                    {column.customFormat ? column.customFormat(value).content : (column.format && typeof value === 'number' ? column.format(value) : value)}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
