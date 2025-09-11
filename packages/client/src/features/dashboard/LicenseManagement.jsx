import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LicenseModal from './components/LicenseModal';
import ConfirmActionModal from './components/ConfirmActionModal';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, InputAdornment, Button, TablePagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { primaryButtonStyles } from 'shared/styles/buttonStyles.js';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const licenses = [
  { id: 'LIC-001', name: 'Microsoft Office 365', type: 'Subscription', status: 'Active', expiry: '2025-12-31', user: 'Company-wide' },
  { id: 'LIC-002', name: 'Adobe Photoshop', type: 'Perpetual', status: 'Active', expiry: '-', user: 'Jane Smith' },
  { id: 'LIC-003', name: 'JetBrains All Products Pack', type: 'Subscription', status: 'Expiring Soon', expiry: '2025-07-15', user: 'John Doe' },
  { id: 'LIC-004', name: 'Figma', type: 'Subscription', status: 'Expired', expiry: '2025-05-31', user: 'Peter Jones' },
  { id: 'LIC-005', name: 'Slack', type: 'Subscription', status: 'Active', expiry: '2026-01-01', user: 'Company-wide' },
];

const statusColors = {
  Active: 'success',
  'Expiring Soon': 'warning',
  Expired: 'error',
};

// LicenseManagement() 

export default function LicenseManagement() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = event => { setRowsPerPage(parseInt(event.target.value, 10)); setPage(0); };

  const [openLicenseModal, setOpenLicenseModal] = useState(false);
  const [editLicense, setEditLicense] = useState(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState(null);
  const handleAddLicense = data => {
    // TODO: Add license to state or send to backend
    setOpenLicenseModal(false);
  };
  const handleUpdateLicense = data => {
    // TODO: Update license in state or send to backend
    setOpenLicenseModal(false);
    setEditLicense(null);
  };
  const handleDeleteLicense = () => {
    // TODO: Delete license logic
    setOpenConfirmModal(false);
    setConfirmTarget(null);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLicense, setSelectedLicense] = useState(null);
  const handleMenuOpen = (event, license) => {
    setAnchorEl(event.currentTarget);
    setSelectedLicense(license);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard / License Management
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            size="small"
            placeholder="Search license..."
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
          <Button variant="contained" disableElevation sx={{ ...primaryButtonStyles, bgcolor: '#006397', '&:hover': { bgcolor: '#005380' } }} onClick={() => { setEditLicense(null); setOpenLicenseModal(true); }}>
            Add New License
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>License ID</TableCell>
                <TableCell>Software</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Expiry Date</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {licenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(license => (
                <TableRow key={license.id}>
                  <TableCell>{license.id}</TableCell>
                  <TableCell>{license.name}</TableCell>
                  <TableCell>{license.type}</TableCell>
                  <TableCell>
                    <Chip label={license.status} color={statusColors[license.status]} size="small" />
                  </TableCell>
                  <TableCell>{license.expiry}</TableCell>
                  <TableCell>{license.user}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={event => handleMenuOpen(event, license)}>
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
          count={licenses.length}
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
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem onClick={() => { navigate(`/dashboard/licenses/${selectedLicense?.id}`); handleMenuClose(); }}>View Details</MenuItem>
        <MenuItem onClick={() => { setEditLicense(selectedLicense); setOpenLicenseModal(true); handleMenuClose(); }}>Edit License</MenuItem>
        <MenuItem onClick={() => { setOpenConfirmModal(true); setConfirmTarget(selectedLicense); handleMenuClose(); }} sx={{ color: 'error.main' }}>
          Delete License
        </MenuItem>
      </Menu>
      <LicenseModal
        open={openLicenseModal}
        onClose={() => { setOpenLicenseModal(false); setEditLicense(null); }}
        onSubmit={handleAddLicense}
        onUpdate={handleUpdateLicense}
        item={editLicense}
      />
      <ConfirmActionModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={handleDeleteLicense}
        title="Confirm Deletion"
        description={confirmTarget ? `Are you sure you want to delete license '${confirmTarget.name}'?` : ''}
        confirmLabel="Delete"
        danger
      />
    </Box>
  );
}
