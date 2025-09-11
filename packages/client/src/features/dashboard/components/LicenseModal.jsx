import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import { primaryButtonStyles } from 'shared/styles/buttonStyles';

const types = ["Subscription", "Perpetual"];
const statuses = ["Active", "Expiring Soon", "Expired"];
const mockUsers = ["John Doe", "Jane Smith", "Peter Jones", "Emily White", "Michael Brown"];

export default function LicenseModal({ open, onClose, onSubmit, onUpdate, item }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "Active",
    expiry: "",
    user: "",
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    } else {
      setForm({ name: "", type: "", status: "Active", expiry: "", user: "" });
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
    setForm({ name: "", type: "", status: "Active", expiry: "", user: "" });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? "Edit License" : "Add New License"}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Software Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
          <TextField select label="Type" name="type" value={form.type} onChange={handleChange} fullWidth required>
            {types.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <TextField select label="Status" name="status" value={form.status} onChange={handleChange} fullWidth required>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
          <TextField label="Expiry Date" name="expiry" value={form.expiry} onChange={handleChange} fullWidth required type="date" InputLabelProps={{ shrink: true }} />
          <Autocomplete
            options={mockUsers}
            value={form.user}
            onChange={(_, value) => setForm({ ...form, user: value || "" })}
            renderInput={(params) => (
              <TextField {...params} label="Assigned To" fullWidth required />
            )}
            freeSolo
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" sx={primaryButtonStyles}>{item ? "Update License" : "Add License"}</Button>
      </DialogActions>
    </Dialog>
  );
}
