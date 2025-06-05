import { useState } from 'react';
import { primaryButtonStyles } from 'shared/styles/buttonStyles';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Chip, Avatar, IconButton, Menu, MenuItem, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
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
      <Typography variant="h4" gutterBottom>
        User Management
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
          <Button variant="contained" disableElevation sx={{ ...primaryButtonStyles, bgcolor: '#006397', '&:hover': { bgcolor: '#005380' } }}>
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
              {filteredUsers.map(user => (
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
                    <Chip
                      label={user.status}
                      size="small"
                      color={user.status === 'Active' ? 'success' : 'default'}
                      sx={{
                        bgcolor: user.status === 'Active' ? '#E8F5E9' : '#F5F5F5',
                        color: user.status === 'Active' ? '#2E7D32' : '#757575',
                        borderRadius: 1,
                      }}
                    />
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
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
        <MenuItem onClick={handleMenuClose}>Edit User</MenuItem>
        <MenuItem onClick={handleMenuClose}>Manage Assets</MenuItem>
        <MenuItem onClick={handleMenuClose}>Manage Licenses</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          Deactivate User
        </MenuItem>
      </Menu>
    </Box>
  );
}
