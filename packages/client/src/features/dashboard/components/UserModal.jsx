import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import { primaryButtonStyles } from 'shared/styles/buttonStyles';

const departments = ["Engineering", "Design", "Marketing", "HR", "Finance"];
const roles = ["Software Engineer", "UI Designer", "Marketing Manager", "HR Specialist", "Accountant"];
const statuses = ["Active", "Inactive"];
const mockUsers = ["John Doe", "Jane Smith", "Peter Jones", "Emily White", "Michael Brown"];

export default function UserModal({ open, onClose, onSubmit, onUpdate, item }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    status: "Active",
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    } else {
      setForm({ name: "", email: "", department: "", role: "", status: "Active" });
    }
  }, [item, open]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (item && onUpdate) {
      onUpdate(form);
    } else {
      onSubmit(form);
    }
    setForm({ name: "", email: "", department: "", role: "", status: "Active" });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? "Edit User" : "Add New User"}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth required type="email" />
          <TextField select label="Department" name="department" value={form.department} onChange={handleChange} fullWidth required>
            {departments.map(dep => (
              <MenuItem key={dep} value={dep}>{dep}</MenuItem>
            ))}
          </TextField>
          <TextField select label="Role" name="role" value={form.role} onChange={handleChange} fullWidth required>
            {roles.map(role => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </TextField>
          <TextField select label="Status" name="status" value={form.status} onChange={handleChange} fullWidth required>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" sx={primaryButtonStyles}>{item ? "Update User" : "Add User"}</Button>
      </DialogActions>
    </Dialog>
  );
}
