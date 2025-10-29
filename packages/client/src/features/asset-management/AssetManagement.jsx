import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssetModal from '../dashboard/components/AssetModal.jsx';
import ConfirmActionModal from '../dashboard/components/ConfirmActionModal.jsx';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, TextField, InputAdornment, Button, TablePagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { primaryButtonStyles } from 'shared/styles/buttonStyles.js';

const assets = [
  { id: 'ASSET-001', name: 'MacBook Pro 16"', category: 'Laptop', status: 'Assigned', user: 'John Doe' },
  { id: 'ASSET-002', name: 'Dell UltraSharp 27"', category: 'Monitor', status: 'In Stock', user: '-' },
  { id: 'ASSET-003', name: 'iPhone 14 Pro', category: 'Mobile', status: 'Assigned', user: 'Jane Smith' },
  { id: 'ASSET-004', name: 'Logitech MX Master 3', category: 'Accessory', status: 'In Repair', user: 'John Doe' },
  { id: 'ASSET-005', name: 'Herman Miller Aeron', category: 'Furniture', status: 'Assigned', user: 'Peter Jones' },
];

const statusColors = {
  Assigned: 'primary',
  'In Stock': 'success',
  'In Repair': 'warning',
};

import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function AssetManagement() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openAssetModal, setOpenAssetModal] = useState(false);
  const [editAsset, setEditAsset] = useState(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState(null);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddAsset = data => {
    // TODO: Add asset to state or send to backend
    setOpenAssetModal(false);
  };
  const handleUpdateAsset = data => {
    // TODO: Update asset in state or send to backend
    setOpenAssetModal(false);
    setEditAsset(null);
  };
  const handleDeleteAsset = () => {
    // TODO: Delete asset logic
    setOpenConfirmModal(false);
    setConfirmTarget(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const handleMenuOpen = (event, asset) => {
    setAnchorEl(event.currentTarget);
    setSelectedAsset(asset);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard / Asset Management
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          {/*TODO: Implement search functionality */}
          <TextField
            size="small"
            placeholder="Search assets..."
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{ ...primaryButtonStyles, bgcolor: '#006397', '&:hover': { bgcolor: '#005380' } }}
            onClick={() => {
              setEditAsset(null);
              setOpenAssetModal(true);
            }}>
            Add New Asset
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Asset ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(asset => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.id}</TableCell>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.category}</TableCell>
                  <TableCell>
                    <Chip label={asset.status} color={statusColors[asset.status]} size="small" />
                  </TableCell>
                  <TableCell>{asset.user}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={event => handleMenuOpen(event, asset)}>
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
          count={assets.length}
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
        <MenuItem
          onClick={() => {
            navigate(`/dashboard/assets/${selectedAsset?.id}`);
            handleMenuClose();
          }}>
          View Details
        </MenuItem>
        <MenuItem
          onClick={() => {
            setEditAsset(selectedAsset);
            setOpenAssetModal(true);
            handleMenuClose();
          }}>
          Edit Asset
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenConfirmModal(true);
            setConfirmTarget(selectedAsset);
            handleMenuClose();
          }}
          sx={{ color: 'error.main' }}>
          Delete Asset
        </MenuItem>
      </Menu>
      <AssetModal
        open={openAssetModal}
        onClose={() => {
          setOpenAssetModal(false);
          setEditAsset(null);
        }}
        onSubmit={handleAddAsset}
        onUpdate={handleUpdateAsset}
        item={editAsset}
      />
      <ConfirmActionModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={handleDeleteAsset}
        title="Confirm Deletion"
        description={confirmTarget ? `Are you sure you want to delete asset '${confirmTarget.name}'?` : ''}
        confirmLabel="Delete"
        danger
      />
    </Box>
  );
}
