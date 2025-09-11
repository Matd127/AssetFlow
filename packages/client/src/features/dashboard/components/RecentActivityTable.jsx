import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, TextField, Box, Typography, Link } from '@mui/material';

const mockRows = [
  { date: '2025-09-10', createdBy: 'Jane Smith', action: 'Added', item: 'Asset', target: 'MacBook Pro' },
  { date: '2025-09-10', createdBy: 'John Doe', action: 'Assigned', item: 'License', target: 'Adobe CC' },
  { date: '2025-09-09', createdBy: 'Peter Jones', action: 'Created', item: 'Ticket', target: 'Printer Issue' },
  { date: '2025-09-08', createdBy: 'Emily White', action: 'Retired', item: 'Asset', target: 'Dell Monitor' },
  { date: '2025-09-08', createdBy: 'Jane Smith', action: 'Added', item: 'User', target: 'Michael Brown' },
  // ...more rows
];

export default function RecentActivityTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const filtered = mockRows.filter(row =>
    row.createdBy.toLowerCase().includes(search.toLowerCase()) ||
    row.action.toLowerCase().includes(search.toLowerCase()) ||
    row.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper elevation={1} sx={{ p: 0, borderRadius: 3, boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, pb: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={600}>Recent Activity</Typography>
        <TextField
          size="small"
          placeholder="Quick search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ width: 200 }}
          inputProps={{ 'aria-label': 'Search recent activity' }}
        />
      </Box>
      <TableContainer sx={{ flex: 1 }}>
        <Table size="small" aria-label="Recent Activity Table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Target</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.target}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 }}>
        <Link href="#" underline="hover" sx={{ fontWeight: 500, fontSize: 14 }}>View full history</Link>
        <TablePagination
          component="div"
          count={filtered.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
          rowsPerPageOptions={[10, 20, 50]}
        />
      </Box>
    </Paper>
  );
}
