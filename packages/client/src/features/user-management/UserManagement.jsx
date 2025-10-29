import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserModal from '../dashboard/components/UserModal.jsx';
import ConfirmActionModal from '../dashboard/components/ConfirmActionModal.jsx';
import { primaryButtonStyles } from 'shared/styles/buttonStyles.js';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

const statusColors = {
  Active: 'success',
  Inactive: 'default',
};

// Mock data
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    role: 'Software Engineer',
    status: 'Active',
    assets: 5,
    licenses: 3,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Design',
    role: 'UI Designer',
    status: 'Active',
    assets: 2,
    licenses: 2,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@company.com',
    department: 'Marketing',
    role: 'Marketing Manager',
    status: 'Inactive',
    assets: 1,
    licenses: 1,
  },
];

export default function UserManagement() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [openUserModal, setOpenUserModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState(null);
  const handleAddUser = data => {
    // TODO: Add user to state or send to backend
    setOpenUserModal(false);
  };
  const handleUpdateUser = data => {
    // TODO: Update user in state or send to backend
    setOpenUserModal(false);
    setEditUser(null);
  };
  const handleDeactivateUser = () => {
    // TODO: Deactivate user logic
    setOpenConfirmModal(false);
    setConfirmTarget(null);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleMenuOpen = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const filteredUsers = mockUsers.filter(
    user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.department.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Dashboard / User Management
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            size="small"
            placeholder="Search users..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
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
              setEditUser(null);
              setOpenUserModal(true);
            }}>
            Add New User
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Assets</TableCell>
                <TableCell>Licenses</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#006397' }}>{user.name[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2">{user.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Chip label={user.status} size="small" color={statusColors[user.status]} />
                  </TableCell>
                  <TableCell>{user.assets}</TableCell>
                  <TableCell>{user.licenses}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={event => handleMenuOpen(event, user)}>
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
          count={filteredUsers.length}
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem
          onClick={() => {
            navigate(`/dashboard/users/${selectedUser?.id}`);
            handleMenuClose();
          }}>
          View Details
        </MenuItem>
        <MenuItem
          onClick={() => {
            setEditUser(selectedUser);
            setOpenUserModal(true);
            handleMenuClose();
          }}>
          Edit User
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>Manage Assets</MenuItem>
        <MenuItem onClick={handleMenuClose}>Manage Licenses</MenuItem>
        <MenuItem
          onClick={() => {
            setOpenConfirmModal(true);
            setConfirmTarget(selectedUser);
            handleMenuClose();
          }}
          sx={{ color: 'error.main' }}>
          Deactivate User
        </MenuItem>
      </Menu>
      <UserModal
        open={openUserModal}
        onClose={() => {
          setOpenUserModal(false);
          setEditUser(null);
        }}
        onSubmit={handleAddUser}
        onUpdate={handleUpdateUser}
        item={editUser}
      />
      <ConfirmActionModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onConfirm={handleDeactivateUser}
        title="Confirm Deactivation"
        description={confirmTarget ? `Are you sure you want to deactivate user '${confirmTarget.name}'?` : ''}
        confirmLabel="Deactivate"
        danger
      />
    </Box>
  );
}
