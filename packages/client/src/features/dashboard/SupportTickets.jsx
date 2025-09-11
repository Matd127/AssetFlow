import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TicketModal from './components/TicketModal';
import ConfirmActionModal from './components/ConfirmActionModal';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, InputAdornment, Button, TablePagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { primaryButtonStyles } from 'shared/styles/buttonStyles.js';

const tickets = [
  { id: 'TKT-001', subject: 'Cannot connect to printer', priority: 'High', status: 'Open', user: 'John Doe', date: '2025-06-21' },
  { id: 'TKT-002', subject: 'Software installation request', priority: 'Medium', status: 'In Progress', user: 'Jane Smith', date: '2025-06-20' },
  { id: 'TKT-003', subject: 'Password reset', priority: 'Low', status: 'Closed', user: 'Peter Jones', date: '2025-06-19' },
  { id: 'TKT-004', subject: 'Laptop screen flickering', priority: 'High', status: 'Open', user: 'Emily White', date: '2025-06-21' },
  { id: 'TKT-005', subject: 'Email not syncing', priority: 'Medium', status: 'Closed', user: 'Michael Brown', date: '2025-06-18' },
];

const priorityColors = {
  High: 'error',
  Medium: 'warning',
  Low: 'info',
};

const statusColors = {
  Open: 'success',
  'In Progress': 'info',
  Closed: 'default',
};



import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SupportTickets() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = event => { setRowsPerPage(parseInt(event.target.value, 10)); setPage(0); };

  const [openTicketModal, setOpenTicketModal] = useState(false);
  const [editTicket, setEditTicket] = useState(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState(null);
  const handleAddTicket = (data) => {
    // TODO: Add ticket to state or send to backend
    setOpenTicketModal(false);
  };
  const handleUpdateTicket = (data) => {
    // TODO: Update ticket in state or send to backend
    setOpenTicketModal(false);
    setEditTicket(null);
  };
  const handleDeleteTicket = () => {
    // TODO: Delete ticket logic
    setOpenConfirmModal(false);
    setConfirmTarget(null);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleMenuOpen = (event, ticket) => {
    setAnchorEl(event.currentTarget);
    setSelectedTicket(ticket);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard / Support Tickets
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            size="small"
            placeholder="Search tickets..."
            // value={searchQuery}
            // onChange={e => setSearchQuery(e.target.value)}
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" disableElevation sx={{ ...primaryButtonStyles, bgcolor: '#006397', '&:hover': { bgcolor: '#005380' } }} onClick={() => { setEditTicket(null); setOpenTicketModal(true); }}>
            Add New Ticket
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ticket ID</TableCell>
                <TableCell>Subject</TableCell>
                
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(ticket => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>
                    <Chip label={ticket.priority} color={priorityColors[ticket.priority]} size="small" />
                  </TableCell>
                  <TableCell>
                    <Chip label={ticket.status} color={statusColors[ticket.status]} size="small" />
                  </TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{ticket.user}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={event => handleMenuOpen(event, ticket)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={tickets.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => { navigate(`/dashboard/tickets/${selectedTicket?.id}`); handleMenuClose(); }}>View Details</MenuItem>
        <MenuItem onClick={() => { setEditTicket(selectedTicket); setOpenTicketModal(true); handleMenuClose(); }}>Edit Ticket</MenuItem>
        <MenuItem onClick={() => { setOpenConfirmModal(true); setConfirmTarget(selectedTicket); handleMenuClose(); }} sx={{ color: 'error.main' }}>Delete Ticket</MenuItem>
      </Menu>
      <TicketModal
        open={openTicketModal}
        onClose={() => { setOpenTicketModal(false); setEditTicket(null); }}
        onSubmit={handleAddTicket}
        onUpdate={handleUpdateTicket}
        item={editTicket}
      />
      <ConfirmActionModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={handleDeleteTicket}
        title="Confirm Deletion"
        description={confirmTarget ? `Are you sure you want to delete ticket '${confirmTarget.subject}'?` : ''}
        confirmLabel="Delete"
        danger
      />
    </Box>
  );
}
